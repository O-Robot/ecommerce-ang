import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../../components/product/product.component';
import { ProductsService } from '../../../services/getProducts/products.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  private apiUrl = 'https://fakestoreapi.com/products';
  products: any[] = [];
  categories: any[] = [];
  selectedCategory: string = '';

  constructor(
    private router: Router,
    private productService: ProductsService,
    private http: HttpClient
  ) {}

  fetchAllCategories(): void {
    this.http.get<any[]>(`${this.apiUrl}/categories`).subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (error) => {
        console.log('Error Fetching Categories', error);
      },
    });
  }
  ngOnInit(): void {
    this.fethcProducts();
    this.fetchAllCategories();
  }

  fethcProducts(): void {
    this.productService.fetchAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  onCategorySelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory = target.value;

    if (this.selectedCategory) {
      this.fetchProductsByCategory(this.selectedCategory);
      console.log('Done');
    } else {
      console.log('Error');
    }
  }

  fetchProductsByCategory(category: string): void {
    if (category === 'Categories') {
      this.fethcProducts();
    } else {
      this.http.get<any[]>(`${this.apiUrl}/category/${category}`).subscribe({
        next: (res) => {
          this.products = res;
        },
        error: (error) => {
          console.log('Error Fetching Categories', error);
        },
      });
    }
  }

  sortProducts(event: Event): void {
    const target = event.target as HTMLInputElement;
    const sortOrder = target.value;
    console.log(sortOrder);
    switch (sortOrder) {
      case 'lowToHigh':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'highToLow':
        this.products.sort((a, b) => b.price - a.price);
        break;
      case 'Filter':
        this.fethcProducts();
        break;
      default:
        break;
    }
  }
}
