import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Master {

  appName: string = "Angular";
  constructor(private http: HttpClient) {}

  getSum(num1: number, num2: number): number {
    const result = num1 + num2;
    return result;
  }

  getUsers(){
    return this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers');
  }

}
