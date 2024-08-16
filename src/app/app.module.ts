import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CustomerDashboardComponent } from './dashboard/customer-dashboard/customer-dashboard.component';
import { DriverDashboardComponent } from './dashboard/driver-dashboard/driver-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';

import { AuthService } from './services/auth.service';
import { CustomerService } from './services/customer.service';
import { DriverService } from './services/driver.service';
import { CabService } from './services/cab.service';
import { TripBookingService } from './services/trip-booking.service';
import { AppRoutingModule } from './app-routing.module';
import { CabListComponent } from './modules/cab/cab-list/cab-list.component';
import { DriverListComponent } from './modules/driver/driver-list/driver-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CustomerDashboardComponent,
    DriverDashboardComponent,
    AdminDashboardComponent,
    CabListComponent,
    DriverListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    CustomerService,
    DriverService,
    CabService,
    TripBookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
