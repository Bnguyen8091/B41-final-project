import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const url = 'http://localhost:3000/api/login';
    const body = { username: this.username, password: this.password };

    this.http.post(url, body, { withCredentials: true }).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.access_token); // Save token in localStorage
        this.router.navigate(['/dashboard']); // Navigate to a protected page
      },
      error: (error) => {
        console.error('Login error:', error);
        this.errorMessage = 'Invalid credentials';
      },
    });
  }
}
