import { ProductComponent } from './product/product.component';
import { User } from './signup-form/User';
import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { promise } from 'protractor';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
 
  notfound : boolean;
  private httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  register(user: User, type: string): boolean {
     this.http.post<boolean>("/api/" + type + "/register", user).subscribe(data =>{
       this.notfound=data;
     });
     return this.notfound;
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

  getProducts(): ProductComponent[]{
    let product :ProductComponent[];
    this.http.get<ProductComponent[]>("/api/Products").subscribe(
      products =>{
          // console.log(product);
          product=products;
      }
    )
    return product;
  }

  addProduct(product: ProductComponent){
    this.http.post("/api/Products/addproduct", product).subscribe();
  }


}
