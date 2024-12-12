import { Component } from '@angular/core';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';

@Component({
  selector: 'app-root',
  imports: [DateTimePickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
