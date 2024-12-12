import { Component } from '@angular/core';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import dayjs, { Dayjs } from 'dayjs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';
import { MatDayjsDateAdapter } from '../../shared/date-adapters/date-adapter-api';

@Component({
  selector: 'app-time-picker',
  imports: [
    MatTimepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.scss',
  providers: [
    {
      provide: DateAdapter,
      useClass: MatDayjsDateAdapter,
    },
  ],
})
export class TimePickerComponent {
  constructor(private dateAdapter: DateAdapter<any>) {
    this.dateAdapter.setLocale('en');
  }
}
