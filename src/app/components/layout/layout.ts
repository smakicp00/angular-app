import { Component, inject } from '@angular/core';
import { Master } from '../../services/master';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  loggedUser: string = '';
  router = inject(Router)

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

  onLogOff() {
    localStorage.removeItem("angular20User");
    this.readLoggedData();
    this.loggedUser = '';
    this.router.navigateByUrl('/login');
  }
}
