import { Component } from '@angular/core';
import { TimePickerComponent } from "../time-picker/time-picker.component";
import { DatePickerComponent } from "../date-picker/date-picker.component";

@Component({
  selector: 'app-date-time-picker',
  imports: [TimePickerComponent, DatePickerComponent],
  templateUrl: './date-time-picker.component.html',
  styleUrl: './date-time-picker.component.scss'
})
export class DateTimePickerComponent {

}
