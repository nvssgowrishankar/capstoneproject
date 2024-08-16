import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8083/api'; // Update with your actual backend URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password, role });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getLoggedInUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  storeUserData(token: string, user: any): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
