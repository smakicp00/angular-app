import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [NgClass, NgStyle, CommonModule],
  templateUrl: './directive.html',
  styleUrl: './directive.css'
})
export class Directive {

  div1ClassName = signal<string>("");

  isDivGreen = signal<boolean> (false);

  isDiv3Visible = signal<boolean>(false);

  cityArray = signal<string[]>(["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]);

  setBackgroundClass(color: string){
    this.div1ClassName.set(color);
  }

  toggleDivColor(){
    this.isDivGreen.set(!this.isDivGreen());
  }

  showDiv3(){
    console.log("showDiv3 called");
    this.isDiv3Visible.set(true);
  }
  hideDiv3(){
    console.log("hideDiv3 called");
    this.isDiv3Visible.set(false);
  }
}