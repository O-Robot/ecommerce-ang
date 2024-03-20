import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  fieldTextType: boolean;

  constructor() {
    this.fieldTextType = false;
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
