import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SingleProductComponent } from '../single-product/single-product.component';
import { ProductComponent } from '../../../components/product/product.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, ProductComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
