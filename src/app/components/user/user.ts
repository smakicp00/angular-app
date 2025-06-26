import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  // One way data binding: Interpolation, Property Binding,
  // Attribute Binding, Class Binding, Style Binding, Event Binding

  userName: string = 'John Doe';
  userRole: string = 'User';
  userEmail: string = 'john.doe@example.com';
  userBio: string = 'This is a sample user bio.';
  tableClasses: string = 'table table-bordered table-striped table-hover';
  aboutUser: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  tableStyles: { [key: string]: string } = {
    'width': '80%',
    'margin-top': '50px',
    'margin-left': 'auto',
    'margin-right': 'auto'
  };
  buttonClasses: string = 'btn btn-primary';
  buttonStyles: { [key: string]: string } = {
    'margin-top': '20px',
    'margin-left': '10px'
  };
  // Two way data binding: ngModel



  constructor() {
    // Initialization logic can go here
    this.userName = 'John Doe';
    this.userRole = 'User';
    this.userEmail = 'john.doe@example.com';
    this.userBio = 'This is a sample user bio.';

  }

  editUser() {
    // Logic to edit user details
    this.userName = 'Jane Doe';
    this.userRole = 'Admin';
    this.userEmail = 'jane.doe@example.com';
    this.userBio = 'This is an updated user bio.';
  }


}
