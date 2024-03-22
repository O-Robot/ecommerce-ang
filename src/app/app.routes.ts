import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LandingPageComponent } from './pages/website/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
  },
];
