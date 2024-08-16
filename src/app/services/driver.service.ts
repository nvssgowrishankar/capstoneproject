import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver.model';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private apiUrl = 'http://localhost:8083/api/drivers';

  constructor(private http: HttpClient) { }

  getDriverById(id: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.apiUrl}/${id}`);
  }

  updateDriver(id: number, driver: Driver): Observable<Driver> {
    return this.http.put<Driver>(`${this.apiUrl}/${id}`, driver);
  }

  getAllDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.apiUrl}/all`);
  }

  registerDriver(driverData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, driverData);
  }

  getDriverTrips(): Observable<any> {
    return this.http.get(`${this.apiUrl}/trips`);
  }
}
