import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HospitalPhotosComponent } from './components/hospital-photos/hospital-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    ContactsFormComponent,
    HospitalPhotosComponent
  ],
  imports: [
    BrowserModule,
      ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
      SideBarComponent,
      ContactsFormComponent,
      HospitalPhotosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
