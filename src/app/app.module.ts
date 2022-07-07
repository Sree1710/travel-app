import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelRegistrationComponent } from './travel-registration/travel-registration.component';
import { SearchplacesComponent } from './searchplaces/searchplaces.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelRegistrationComponent,
    SearchplacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
