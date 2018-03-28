import { User } from './../signup-form/User';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  rForm: FormGroup;
  user: User;
  found: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService, private location: Location) {
    this.rForm = this.fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'type': [null,Validators.required]
    })

  }

  onLogIn(){
    this.user = this.rForm.value;
    this.dataService.login(this.user,this.rForm.get('type').value).subscribe(params => {
      if (params == null)
        console.log("null");
      else {
        if (params.password === this.user.password){
          console.log("true");
          this.found=true;
          this.location.go("/"+this.rForm.get('type').value,"");
          window.location.reload(true);
        } else{
          console.log("false");
          this.found=false;
        }
      }
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Error occured");
        } else {
          console.log("server side Error occured");
        }
      }
    );
  }
}
