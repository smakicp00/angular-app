import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
 
    // Signal and Computed Signal
  userName = signal<string>("John Doe");
  userAge = signal<number>(30);
  userEmail = signal<string>("john.doe@example.com");

  // Computed Signal to combine user information
  userInfo = computed(() => {
    return `Name: ${this.userName()}, Age: ${this.userAge()}, Email: ${this.userEmail()}`;
  });

  constructor() {
    setTimeout(() => {
      this.userName.set("Jane Smith");
      this.userAge.set(50);
      this.userEmail.set("jane.smith@example.com");
    },5000);
  }

}
