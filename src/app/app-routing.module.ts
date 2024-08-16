// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './dashboard/customer-dashboard/customer-dashboard.component';
import { DriverDashboardComponent } from './dashboard/driver-dashboard/driver-dashboard.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer-login', component: LoginComponent },
  { path: 'driver-login', component: LoginComponent },
  { path: 'admin-login', component: LoginComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent, canActivate: [AuthGuard] },
  { path: 'driver-dashboard', component: DriverDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' } // Wildcard route for a 404 page or redirection
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static routes(routes: any) {
    throw new Error('Method not implemented.');
  }
}
