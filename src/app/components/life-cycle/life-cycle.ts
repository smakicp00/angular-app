import { Component, OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, signal } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-life-cycle',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css'
})
export class LifeCycle implements OnChanges, OnInit, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  userName = signal<string>('john doe');

  userEmail = signal<string>('JOHN.DOE@EXAMPLE.COM');

  userSchool = signal<string>('example university');

  constructor() {
    console.log('LifeCycle component constructed');
  }

  ngOnChanges() {
    console.log('LifeCycle component changes');
  }

  ngOnInit() {
    console.log('LifeCycle component initialized');
  }

  ngDoCheck(): void {
    console.log('LifeCycle component checked');
  }

  ngAfterContentInit(): void {
    console.log('LifeCycle component content initialized');
  }

  ngAfterContentChecked(): void {
    console.log('LifeCycle component content checked');
  }

  ngAfterViewInit(): void {
    console.log('LifeCycle component view initialized');
  }

  ngAfterViewChecked(): void {
    console.log('LifeCycle component view checked');
  }

  // Repeat DoCheck, AfterContentChecked, AfterViewChecked

  ngOnDestroy() {
    console.log('LifeCycle component destroyed');
  }


  
}
