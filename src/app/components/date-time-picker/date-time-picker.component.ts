import { Component } from '@angular/core';
import { TimeZoneDisplayComponent } from "../time-zone-display/time-zone-display.component";

@Component({
  selector: 'app-date-time-picker',
  imports: [TimeZoneDisplayComponent],
  templateUrl: './date-time-picker.component.html',
  styleUrl: './date-time-picker.component.scss'
})
export class DateTimePickerComponent {

}
