import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SingleProductComponent } from '../single-product/single-product.component';
import { ProductComponent } from '../../../components/product/product.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, ProductComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
