import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [SlicePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe, DatePipe, JsonPipe, NaPipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css'
})
export class PipeEx {

  courseName = signal<string>('angular');
  courseDuration = signal<string>('DURATION IS 3 MONTHS');

  currentDate = signal<Date>(new Date());

  rollNoList = signal<number[]>([111,112,113,114,115,116,117]);

  studentObj = signal<any>({
    name: 'John Doe',
    mobile: 1234567890,
    address:{
      city: 'New York',
      state: 'NY',
    }
  });

}
