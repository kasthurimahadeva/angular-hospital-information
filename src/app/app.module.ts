import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HospitalPhotosComponent } from './components/hospital-photos/hospital-photos.component';
import { AccreditationsComponent } from './components/accreditations/accreditations.component';
import { RoomMealComponent } from './components/room-meal/room-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    ContactsFormComponent,
    HospitalPhotosComponent,
    AccreditationsComponent,
    RoomMealComponent
  ],
  imports: [
    BrowserModule,
      ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
      SideBarComponent,
      ContactsFormComponent,
      HospitalPhotosComponent,
      AccreditationsComponent,
      RoomMealComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
