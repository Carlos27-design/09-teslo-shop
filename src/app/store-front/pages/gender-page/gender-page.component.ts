import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { map } from 'rxjs';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { ProductGenderPipe } from '@products/pipes/product-gender.pipe';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { PaginationService } from '@shared/components/pagination/pagination.service';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCardComponent, ProductGenderPipe, PaginationComponent],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);
  public paginationService = inject(PaginationService);
  gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)));

  public productsResource = rxResource({
    request: () => ({
      gender: this.gender(),
      page: this.paginationService.currentPage(),
    }),
    loader: ({ request }) =>
      this.productsService.getProducts({
        gender: request.gender,
        offset: (request.page - 1) * 9,
      }),
  });
}
