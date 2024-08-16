import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  private apiUrl = 'http://localhost:8083/api/cabs';

  constructor(private http: HttpClient) { }

  getCabs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cabs`);
  }

  getCabDetails(cabId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cabs/${cabId}`);
  }
}
