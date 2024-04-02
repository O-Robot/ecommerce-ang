import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  submitForm() {
    const email = (document.getElementById('email') as HTMLInputElement).value;

    const formData = {
      email,
    };

    alert(JSON.stringify(formData));
  }
}
