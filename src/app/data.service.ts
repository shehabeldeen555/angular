import { Brand } from './add-brand/brand';
import { ProductComponent } from './product/product.component';
import { User } from './signup-form/User';
import { Injectable } from '@angular/core';
import { HttpModule, Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { promise } from 'protractor';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class DataService {
 
  notfound : boolean;
  constructor(private http: HttpClient) { }

  register(user: User, type: string): boolean {
     this.http.post<boolean>("/api/" + type + "/register", user).subscribe(data =>{
       this.notfound=data;
     });
     return this.notfound;
  }

  login(user: User, type: string) {
    return this.http.get<User>("/api/" + type + "/login/" + user.username);
  }
  
  getCustomers(){
    return this.http.get<User[]>("/api/Customer/getAll");
  }

  getProducts(){
    return this.http.get<ProductComponent[]>("/api/Products");
  }

  addProduct(product: ProductComponent): Observable<ProductComponent> {
    return this.http.post<ProductComponent>("/api/Products/addProduct", product, httpOptions);
  }

  addBrand(brand: Brand): Observable<Brand>{
    return this.http.post<Brand>("/api/Brand/addBrand", brand, httpOptions);
  }

}
