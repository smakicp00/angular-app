import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../pipes/services/master';

@Component({
  selector: 'app-users',
  imports: [FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {



  http = inject(HttpClient);

  userList = signal<any[]>([]);

  masterService = inject(Master);


  userObj = signal<any>({
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  });

  ngOnInit(): void {
    this.getUsers();
    
  }

  getUsers() {
    //this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe((result: any) => {
    //  this.userList.set(result);
    //});
    this.masterService.getUsers().subscribe((result:any)=>{
    this.userList.set(result);
    });
  }

  onSaveUser() {
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userObj()).subscribe({
      next: (result: any) => {
        console.log("Uslo")
        alert("User created seccessfuly");
        this.getUsers();
      },
      error: (error: any) => {
        alert("Error:" + error.message);
      }
    });
  }

  onResetUser() {
    this.userObj.set({
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    })
  }
  onEdit(user: any) {
    this.userObj.set(user);
  }
  onDelete(id: number) {

    const isDelete = confirm("Are you sure you want to delete this user?");

    if (!isDelete) {
      return;
    }

    this.http.delete('https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=' + id).subscribe({
      next: (result: any) => {
        alert("User updated successfully");

        this.getUsers()
      },
      error: (error: any) => {
        alert("Error: " + error.message);
      }
    });
  }

  onUpdateUser() {

    //this.userObj().createdDate = new Date();
    //this.userObj().projectName = "Angular Project";
    //this.userObj().extraId = 0;

    this.http.put('https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=' + this.userObj().userId, this.userObj()).subscribe({
      next: (result: any) => {
        alert("User updated successfully");
        this.getUsers()
      },
      error: (error: any) => {
        alert("Error: " + error.message);
      }
    });
  }

}
