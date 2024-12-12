import { Component, Output, EventEmitter } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDayjsDateAdapter, MAT_DAYJS_DATE_ADAPTER_OPTIONS, MAT_DAYJS_DATE_FORMATS } from '../../shared/date-adapters/date-adapter-api';
import dayjs, { Dayjs } from 'dayjs';

@Component({
  selector: 'app-date-picker',
  imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MatDayjsDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_DAYJS_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_DAYJS_DATE_FORMATS },
    { provide: MAT_DAYJS_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
})
export class DatePickerComponent {
  @Output() selectedDateChange = new EventEmitter<Dayjs>();

  onDateChange(event: any) {
    this.selectedDateChange.emit(dayjs(event.value));
  }
}