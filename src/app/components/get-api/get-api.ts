import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css'
})
export class GetApi implements OnInit {

  http = inject(HttpClient);
  userList = signal<any[]>([]);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any) => {
      this.userList.set(result);
    });
  }

}
