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
  submitForm() {
    const firstName = (document.getElementById('fname') as HTMLInputElement)
      .value;
    const lastName = (document.getElementById('lname') as HTMLInputElement)
      .value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;

    const formData = {
      firstName,
      lastName,
      email,
      password,
    };

    alert(JSON.stringify(formData));
  }
}
