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

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
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
  faEmpty = faStar

  Array = Array;
  Math = Math;
}
