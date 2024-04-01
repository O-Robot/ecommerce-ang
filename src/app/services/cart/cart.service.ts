import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly STORAGE_KEY = 'cart_items';
  public items: CartItem[] = [];
  public cartList = new BehaviorSubject<any>([]);

  constructor() {
    this.loadCartItems();
  }

  private loadCartItems() {
    const storedItems = localStorage.getItem(this.STORAGE_KEY);
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  saveCartItems() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items));
  }
  addToCart(product: any) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.subtotal = existingItem.price * existingItem.quantity;
    } else {
      const newItem = { ...product, quantity: 1, subtotal: product.price };
      this.items.push(newItem);
    }
    this.saveCartItems();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalPrice() {
    let grandTotal = 0;
    this.items.map((a: any) => {
      grandTotal += a.subtotal;
    });
  }

  removeItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
