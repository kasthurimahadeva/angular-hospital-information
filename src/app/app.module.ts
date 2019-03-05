import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [SideBarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
