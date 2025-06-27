import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css'
})
export class ReactiveUser implements OnInit {

  http = inject(HttpClient);

  userObj = signal<any[]>([]);

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required]),
    fullName: new FormControl(""),
    mobileNo: new FormControl("")
  });

  getUsers(){
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers').subscribe((res:any) =>{
      this.userObj.set(res);
      console.log(this.userObj())
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }
  
  onSave(){
    const formValue = this.userForm.value;

    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register',formValue).subscribe({
      next:(res:any)=>{
        alert("User Created Successfully");
        this.getUsers();
      },
      error:(error:any)=>{
        console.log(formValue)
        alert("Error:" + error.message);
      }
    });
  }

}
