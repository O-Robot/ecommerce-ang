import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCartShopping,
  faEye,
  faHeart,
  faStar,
  faStarHalf,
  faStarHalfStroke,
  faStoreAlt,
} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cart/cart.service';
import { Router } from '@angular/router';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: any;
  faWish = faHeart;
  faCart = faCartShopping;
  faView = faEye;
  faRate = faStar;
  faHalf = faStarHalfStroke;
  faEmpty = faStar;

  Array = Array;
  Math = Math;

  constructor(
    private router: Router,
    private cartService: CartService,
    private messageService: MessageService
  ) {}
  navigateToProduct(productId: number) {
    this.router.navigate(['single-product', productId]);
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('product added');
    // this.show();
  }

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Added to cart successfully',
    });
  }
}
