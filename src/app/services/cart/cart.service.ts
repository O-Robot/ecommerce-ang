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
  public cartItemCountSubject = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCountSubject.asObservable();
  grandTotalSubject = new BehaviorSubject<number>(0);
  grandTotal$ = this.grandTotalSubject.asObservable();

  constructor() {
    this.loadCartItems();
    this.updateCartItemCount();
    this.getTotalPrice();
  }

  private loadCartItems() {
    const storedItems = localStorage.getItem(this.STORAGE_KEY);
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }
  private updateCartItemCount() {
    this.cartItemCountSubject.next(this.items.length);
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
    this.getTotalPrice();
    this.saveCartItems();
    this.updateCartItemCount();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem(this.STORAGE_KEY);
    this.getTotalPrice();
    this.updateCartItemCount();
    return this.items;
  }

  removeItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    this.getTotalPrice();
    this.saveCartItems();
    this.updateCartItemCount();
  }

  getTotalPrice() {
    let grandTotal = 0;
    this.items.forEach((item: any) => {
      grandTotal += item.subtotal;
    });
    this.grandTotalSubject.next(grandTotal);
  }
}
