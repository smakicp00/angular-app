import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-app';
  loggedUser: string = '';


  constructor(private masterService: Master) {
    this.readLoggedData();
    this.masterService.onLogin.subscribe(res => {
      this.readLoggedData();
    });



  }

  readLoggedData() {
    const loggedData = localStorage.getItem("angular20User");
    if (loggedData !== null) {
      this.loggedUser = loggedData;
    }
  }

  onLogOff(){
    localStorage.removeItem("angular20User");
    this.readLoggedData();
    this.loggedUser = '';
  }

}
