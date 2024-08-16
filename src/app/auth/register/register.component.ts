import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { DriverService } from '../../services/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  role: string = 'customer';
  customerData: any = {
    username: '',
    password: '',
    address: '',
    mobileNumber: '',
    email: ''
  };
  driverData: any = {
    username: '',
    password: '',
    licenseNumber: '',
    cabDetails: {
      cabId: 0,
      carType: '',
      registrationNumber: ''
    }
  };

  constructor(private customerService: CustomerService, private driverService: DriverService, private router: Router) { }

  register() {
    if (this.role === 'customer') {
      this.customerService.registerCustomer(this.customerData).subscribe(
        response => {
          alert('Customer registered successfully!');
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Registration failed', error);
          alert('Registration failed. Please try again.');
        }
      );
    } else if (this.role === 'driver') {
      this.driverService.registerDriver(this.driverData).subscribe(
        response => {
          alert('Driver registered successfully!');
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Registration failed', error);
          alert('Registration failed. Please try again.');
        }
      );
    }
  }
}
