import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  fieldTextType: boolean;
  alert = alert;

  constructor() {
    this.fieldTextType = false;
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  submitForm() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;

    const formData = {
      email,
      password,
    };

    alert(JSON.stringify(formData));
  }
}
