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

  // Function to shuffle an array using Fisher-Yates algorithm
  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getProducts(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (res) => {
        const shuffledProducts = this.shuffleArray(res);
        this.productsSubject.next(shuffledProducts);
      },
      error: (error) => {
        console.log('Error Fetching Product', error);
      },
    });
  }

  fetchAllProducts(): Observable<any[]> {
    return this.products$;
  }

  getProductsById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }
}
