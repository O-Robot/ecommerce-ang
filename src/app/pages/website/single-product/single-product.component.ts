import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/getProducts/products.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = +params['productId'];
      this.productService
        .getProductsById(+productId)
        .subscribe((product: any) => {
          this.product = product;
          console.log('ello', product);
        });
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Added to Cart!');
    // this.show();
  }
}
