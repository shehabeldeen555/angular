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
  lForm: FormGroup;
  user: User;
  submit:boolean=false;
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

    this.lForm = this.fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'type': [null,Validators.required]
    })
  }


  private save(): void {
    this.dataService.create(this.user, this.rForm.get('type').value);
  }

  onSignUp() {
    this.user = this.rForm.value;
    this.save();
  }

  onLogin(){
    this.user=this.lForm.value;
    this.dataService.login(this.user,this.lForm.get('type').value)
  }

  changeSubmit(){
    if(this.submit===true){
      this.submit=false;
    }else{
      this.submit=true;
    }
  }


}
