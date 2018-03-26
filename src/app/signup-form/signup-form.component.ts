import { User } from './User';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent{
  rForm: FormGroup;
  user: User;
  passworderror: string = 'You need to specify at least 8 characters';

  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService) {
    this.rForm = this.fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'email': [null, Validators.required],
      'type': [null,Validators.required]
    })
  }

  private save(): void {
    this.dataService.register(this.user, this.rForm.get('type').value);
  }

  onSignUp() {
    this.user = this.rForm.value;
    this.save();
  }

}
