import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LandingPageComponent } from './pages/website/landing-page/landing-page.component';
import { AuthGuard } from './services/authGuard/auth-guard.service';
import { ProductsComponent } from './pages/website/products/products.component';
import { SingleProductComponent } from './pages/website/single-product/single-product.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create-account',
    component: SignupComponent,
  },
  {
    path: 'forgot-password',
    component: SignupComponent,
  },
  {
    path: 'home',
    component: LandingPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'all-products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'single-product',
    component: SingleProductComponent,
    canActivate: [AuthGuard],
  },
];
