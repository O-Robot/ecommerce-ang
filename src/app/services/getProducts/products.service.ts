import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';

  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getProducts();
  }
  getProducts(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (res) => {
        this.productsSubject.next(res);
        console.log('Data', res);
      },
      error: (error) => {
        console.log('Error Fetching Product', error);
      },
    });
  }

  fetchAllProducts(): Observable<any[]> {
    return this.products$;
  }
}
