import { Component } from '@angular/core';
import { Dayjs } from 'dayjs';
import { TimePickerComponent } from '../time-picker/time-picker.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';

@Component({
  selector: 'app-time-zone-display',
  imports: [TimePickerComponent, DatePickerComponent],
  templateUrl: './time-zone-display.component.html',
  styleUrls: ['./time-zone-display.component.scss'],
})
export class TimeZoneDisplayComponent {
  selectedDate: Dayjs | null = null;
  selectedTime: Dayjs | null = null;

  updateSelectedDate(date: Dayjs | null) {
    this.selectedDate = date;
  }

  updateSelectedTime(time: Dayjs | null) {
    this.selectedTime = time;
  }
}