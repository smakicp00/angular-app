import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {

  tableClass = signal<string>("table table-striped table-bordered table-hover");

  isParaVisible = signal<boolean>(true);

  startMonthName = signal<string>("Jan");

  cityList = signal<string[]>(["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]);

  studentList = signal<any[]>([
    { name: "John", age: 20 , city: "New York" ,isActive: true},
    { name: "Jane", age: 22 , city: "Los Angeles" ,isActive: false},
    { name: "Jim", age: 21 , city: "Chicago" ,isActive: true},
    { name: "Jack", age: 23 , city: "Houston" ,isActive: false},
    { name: "Jill", age: 19 , city: "Phoenix" ,isActive: true},
    { name: "Joe", age: 24 , city: "San Francisco" ,isActive: false},
    { name: "Jenny", age: 25 , city: "Seattle" ,isActive: true},
    { name: "James", age: 26 , city: "Miami" ,isActive: false},
    { name: "Julia", age: 27 , city: "Dallas" ,isActive: true},
    { name: "Jordan", age: 28 , city: "Atlanta" ,isActive: false}
  ])

  showParagraph() {
    this.isParaVisible.set(true);

  }
  hideParagraph() {
    this.isParaVisible.set(false);
  }
}


