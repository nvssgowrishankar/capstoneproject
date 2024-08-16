// trip-booking.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripBooking } from '../models/trip-booking.model';

@Injectable({
  providedIn: 'root'
})
export class TripBookingService {
  getDriverTrips() {
    throw new Error('Method not implemented.');
  }
  updateTripStatus(tripId: number, status: string) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8083/api/trip-bookings'; // Update with your actual backend URL

  constructor(private http: HttpClient) { }

  getCustomerTrips(customerId: number): Observable<TripBooking[]> {
    return this.http.get<TripBooking[]>(`${this.apiUrl}/customer, ${customerId}`);
  }

  bookCab(customerId: number, cabId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/book`, { customerId, cabId });
  }
}
