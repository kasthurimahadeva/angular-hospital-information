import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProceduresComponent} from './components/procedures/procedures.component';
import {DoctorsComponent} from './components/doctors/doctors.component';
import {ChatRoomComponent} from './components/chat-room/chat-room.component';
import {BookingComponent} from './components/booking/booking.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'procedures',
    component: ProceduresComponent
  },
  {
    path: 'doctors',
    component: DoctorsComponent
  },
  {
    path: 'chatroom',
    component: ChatRoomComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
