import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LandingPageComponent } from './pages/website/landing-page/landing-page.component';
import { AuthGuard } from './services/authGuard/auth-guard.service';
import { ProductsComponent } from './pages/admin/products/products.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
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
    path: 'landing',
    component: LandingPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'all-products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
];
