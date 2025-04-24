import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { map } from 'rxjs';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { ProductGenderPipe } from '@products/pipes/product-gender.pipe';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCardComponent, ProductGenderPipe],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);
  gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)));

  genderProductsResource = rxResource({
    request: () => ({ gender: this.gender() }),
    loader: ({ request }) =>
      this.productsService.getProducts({
        limit: 9,
        offset: 0,
        gender: request.gender,
      }),
  });
}
