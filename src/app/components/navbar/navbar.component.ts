import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCartShopping,
  faHeart,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  cartItemCount: number = 0;
  faCart = faCartShopping;
  faWish = faHeart;
  faAccount = faUserCircle;
  showNavbar: boolean = false;
  constructor(private router: Router, private cartService: CartService) {}
  navigateToCart() {
    this.router.navigate(['cart']);
  }

  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe((count) => {
      this.cartItemCount = count;
    });
  }
}
