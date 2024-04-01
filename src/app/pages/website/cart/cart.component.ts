import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faShoppingCart,
  faStamp,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  items: any[] = [];
  faRemove = faTrash;
  faCart = faShoppingCart;

  constructor(private router: Router, private cartService: CartService) {}
  navigateToProduct() {
    this.router.navigate(['all-products']);
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
  }
  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items);
  }

  updateQuantity(event: Event, item: any) {
    const target = event.target as HTMLInputElement;
    const quantity = target.value;

    const parsedQuantity = parseInt(quantity, 10);
    if (!isNaN(parsedQuantity) && parsedQuantity >= 0) {
      item.quantity = parsedQuantity;
      item.subtotal = item.price * item.quantity;
      this.cartService.saveCartItems();
    }
  }

  deleteItem(id: number) {
    this.cartService.removeItem(id);
    this.items = this.cartService.getItems();
  }
}
