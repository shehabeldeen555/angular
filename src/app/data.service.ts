import { User } from './signup-form/User';
import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { promise } from 'protractor';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };

  constructor(private http: Http) { }

  create(user: User, type: string) {
    return this.http.post("/api/" + type + "/register", user, this.httpOptions).subscribe();
  }

  login(user: User, type: string) {
    return this.http.post("/api/" + type + "/Login", user, this.httpOptions).subscribe();
  }

  getCustomers(): Promise<User[]> {
    return this.http.get("/api/Customer/getAll").toPromise().then(response => response.json() as User[]).catch(this.handleError);
  }




  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
