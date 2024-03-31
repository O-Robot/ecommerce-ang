import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SingleProductComponent } from '../single-product/single-product.component';
import { ProductComponent } from '../../../components/product/product.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/getProducts/products.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, ProductComponent, FooterComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  products: any[] = [];

  constructor(
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productService
      .fetchAllProducts()

      .subscribe((products) => {
        this.products = products.slice(0, 8);
        console.log('First 8 products:', this.products);
      });
  }

  navigateToProduct(productId: number) {
    this.router.navigate(['single-product', productId]);
  }
}
