import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { filter } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/getProducts/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ecommerce-ang';
  showNavbar: boolean = true;

  constructor(private router: Router, private productService: ProductsService) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.showNavbar = !['/login', '/create-account'].includes(event.url);
      });
  }
  ngOnInit(): void {
    this.productService.fetchAllProducts();
  }
}
