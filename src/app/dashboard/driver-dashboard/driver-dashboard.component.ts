// driver-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { TripBooking } from '../../models/trip-booking.model';

@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './driver-dashboard.component.html',
  styleUrls: ['./driver-dashboard.component.css']
})
export class DriverDashboardComponent implements OnInit {
  tripBookings: TripBooking[] = [];

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.loadTrips();
  }

  loadTrips() {
    this.driverService.getDriverTrips().subscribe(
      (data: TripBooking[]) => {
        this.tripBookings = data;
      },
      error => {
        console.error('Error fetching driver trips', error);
      }
    );
  }

  // updateTripStatus(tripId: number, status: string) {
  //   this.driverService.updateTripStatus(tripId, status).subscribe(
  //     response => {
  //       alert('Trip status updated successfully!');
  //       this.loadTrips();
  //     },
  //     error => {
  //       console.error('Error updating trip status', error);
  //     }
  //   );
  // }
}
