import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LandingPageComponent } from './pages/website/landing-page/landing-page.component';
import { AuthGuard } from './services/authGuard/auth-guard.service';
import { ProductsComponent } from './pages/website/products/products.component';
import { SingleProductComponent } from './pages/website/single-product/single-product.component';
import { CartComponent } from './pages/website/cart/cart.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';

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
    component: ForgotPasswordComponent,
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
    path: 'single-product/:productId',
    component: SingleProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    // canActivate: [AuthGuard],
  },
];
