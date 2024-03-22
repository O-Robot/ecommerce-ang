import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCartShopping,
  faEye,
  faHeart,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  faWish = faHeart;
  faCart = faCartShopping;
  faView = faEye;
  faRate = faStar;
}
