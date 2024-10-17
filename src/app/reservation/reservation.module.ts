import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class ReservationModule { }
