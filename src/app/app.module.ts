import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    ContactsFormComponent
  ],
  imports: [
    BrowserModule,
      ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [SideBarComponent,
  ContactsFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
