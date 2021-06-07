import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: CalendarComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
