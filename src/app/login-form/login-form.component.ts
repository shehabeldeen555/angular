import { User } from './../signup-form/User';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  rForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService) {
    this.rForm = this.fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'type': [null,Validators.required]
    })

  }

  onLogIn(){
    this.user = this.rForm.value;
    this.dataService.login(this.user,this.rForm.get('type').value);
  }
}
