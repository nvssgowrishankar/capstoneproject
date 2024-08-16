// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.username, this.password, this.role).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        if (this.role === 'customer') {
          this.router.navigate(['/customer-dashboard']);
        } else if (this.role === 'driver') {
          this.router.navigate(['/driver-dashboard']);
        } else if (this.role === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        }
      },
      error => {
        console.error('Login failed', error);
        alert('Login failed. Please check your credentials.');
      }
    );
  }
}
