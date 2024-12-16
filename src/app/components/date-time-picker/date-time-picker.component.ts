import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { FormsModule } from '@angular/forms';
import { MAT_DAYJS_DATE_ADAPTER_OPTIONS, MAT_DAYJS_DATE_FORMATS, MatDayjsDateAdapter, MatDayjsModule } from '../../shared/date-adapters/date-adapter-api';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS, provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
  // providers: [
  //   {
  //     provide: DateAdapter,
  //     useClass: MatDayjsDateAdapter,
  //     deps: [MAT_DATE_LOCALE, MAT_DAYJS_DATE_ADAPTER_OPTIONS],
  //   },
  //   { provide: MAT_DATE_FORMATS, useValue: MAT_DAYJS_DATE_FORMATS },
  //   { provide: MAT_DAYJS_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  // ],
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTimepickerModule,
    FormsModule,
    MatDayjsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateTimePickerComponent {
  timeChanged: boolean = false;
  dateChanged: boolean = false;
  value: Date = new Date();

  setTimeChanged() {
    console.log('here');
    this.timeChanged = true;
  }

  setDateChanged() {
    this.dateChanged = true;
  }

}
