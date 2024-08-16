import { Component, OnInit } from '@angular/core';
import { TripBookingService } from '../../services/trip-booking.service';
import { AuthService } from '../../services/auth.service';
import { TripBooking } from '../../models/trip-booking.model';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  tripBookings: TripBooking[] = [];

  constructor(
    private tripBookingService: TripBookingService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const customerId = this.authService.getLoggedInUser().id;
    this.loadBookings(customerId);
  }

  loadBookings(customerId: number) {
    this.tripBookingService.getCustomerTrips(customerId).subscribe(
      (data: TripBooking[]) => {
        this.tripBookings = data;
      },
      error => {
        console.error('Error fetching trip bookings', error);
      }
    );
  }

  bookCab() {
    // Implement navigation to booking form or open a modal
    console.log('Book Cab method called');
  }
}
