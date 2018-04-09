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
  found: boolean= true;
  passworderror: string = 'You need to specify at least 8 characters';

  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService, private location: Location) {
    this.rForm = this.fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    })

  }

  onLogIn(){
    this.user = this.rForm.value;
    this.dataService.login(this.user).subscribe(params => {
      if (params == null){
        console.log("null");
        this.found=false;
      }else {
          console.log("true");
          this.found=true;
          this.location.go("/"+params.type+"/"+params.username,"");
          window.location.reload(true);
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
