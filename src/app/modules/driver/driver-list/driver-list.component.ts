import { Component, OnInit } from '@angular/core';
import { Driver } from '../../../models/driver.model';
import { DriverService } from '../../../services/driver.service';


@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.loadDrivers();
  }

  loadDrivers() {
    this.driverService.getAllDrivers().subscribe(
      (data: Driver[]) => {
        this.drivers = data;
      },
      error => {
        console.error('Error fetching drivers', error);
      }
    );
  }
}
