import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { provideHttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    // Router configuration is typically handled by importing the routing module in AppModule
  ]
})
  .catch(err => console.error('Bootstrap error:', err));
