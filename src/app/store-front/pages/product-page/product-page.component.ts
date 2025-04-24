import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { ProductCarouselComponent } from '../../../products/components/product-carousel/product-carousel.component';

@Component({
  selector: 'app-product-page',
  imports: [ProductCarouselComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  public productIdSlug = this.route.snapshot.params['idSlug'];

  productResource = rxResource({
    request: () => ({ idSlug: this.productIdSlug }),
    loader: ({ request }) =>
      this.productsService.getProductBySlug(request.idSlug),
  });
}
