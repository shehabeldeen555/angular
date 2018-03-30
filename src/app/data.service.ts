import { StoreComponent } from './store/store.component';
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

  register(user: User, type: string){
     return this.http.post<boolean>("/api/" + type + "/register", user);
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

  addStore(store: StoreComponent): Observable<StoreComponent> {
    return this.http.post<StoreComponent>("/api/Store/addStore", store, httpOptions);
  }

  storeRequest(){
    return this.http.get<StoreComponent[]>("/api/Store/getRequests"); 
  }

  acceptStrore(id: number){
    return this.http.get("/api/Store/acceptStore/"+id);
  }

  rejectStore(id: number){
    return this.http.delete("/api/Store/deleteStore/"+id);
  }

  getStores(username: string){
    return this.http.get<StoreComponent[]>("/api/Store/getStores/"+username);
  }

  getAllStores(){
    return this.http.get<StoreComponent[]>("/api/Store/getAll");
  }

  view(product: ProductComponent){
    return this.http.get("/api/Products/view/"+product.id);
  }

}
