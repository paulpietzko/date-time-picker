import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import dayjs, { Dayjs } from 'dayjs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DAYJS_DATE_ADAPTER_OPTIONS, MAT_DAYJS_DATE_FORMATS, MatDayjsDateAdapter } from '../../shared/date-adapters/date-adapter-api';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  imports: [
    MatTimepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MatDayjsDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_DAYJS_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_DAYJS_DATE_FORMATS },
    { provide: MAT_DAYJS_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimePickerComponent {
  @Output() selectedTimeChange = new EventEmitter<Dayjs>();
  formControl: FormControl<Date | null>;

  constructor(private dateAdapter: DateAdapter<any>) {
    this.dateAdapter.setLocale('en');
    const initialValue = new Date();
    this.formControl = new FormControl(initialValue);
  }

  onTimeChange(event: any) {
    this.selectedTimeChange.emit(dayjs(event.value));
  }
}