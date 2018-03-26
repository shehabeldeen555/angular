import { User } from './signup-form/User';
import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { promise } from 'protractor';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  register(user: User, type: string) {
    return this.http.post("/api/" + type + "/register", user).subscribe(data => {
      console.log(data);
    });
  }

  login(user: User, type: string) {
    return this.http.get<User>("/api/" + type + "/login/" + user.username).subscribe(params => {
      if (params == null)
        console.log("null");
      else {
        if (params.password === user.password)
          console.log("true");
        else
          console.log("false");
      }
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Error occured");
        } else {
          console.log("server side Error occured");
        }
      }
    )
  }

  getCustomers(): void {
    this.http.get<User[]>("/api/Customer/getAll").subscribe(
      data => {
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Error occured");
        } else {
          console.log("server side Error occured");
        }
      }
    )

  }


}
