import { promise } from 'protractor';
import { User } from './User';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent{
  rForm: FormGroup;
  user: User;
  notfound :boolean= true;
  submit: boolean;
  passworderror: string = 'You need to specify at least 8 characters';
  usernameErr: string= 'this username is not availabe';

  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService, private location: Location) {
    this.rForm = this.fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'email': [null, Validators.required],
      'type': [null,Validators.required]
    })
  }

  onSignUp() {
    this.user = this.rForm.value;
    console.log(this.user.type);
    this.submit=true;
    this.dataService.register(this.user, this.rForm.get('type').value).subscribe(data =>{
      this.notfound=data;
      if(this.notfound){
        this.location.go("/"+this.rForm.get('type').value,"");
        window.location.reload(true);
      }
    });
  }
}
