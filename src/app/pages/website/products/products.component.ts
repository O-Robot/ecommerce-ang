import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../../components/product/product.component';
import { ProductsService } from '../../../services/getProducts/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.fetchAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
