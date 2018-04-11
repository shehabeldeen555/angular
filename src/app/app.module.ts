import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule , FormControl} from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { AppRoutingModule } from './/app-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CustomerComponent } from './customer/customer.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { StoreOwnerComponent } from './store-owner/store-owner.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { StoreComponent } from './store/store.component';
import { StoreRequestsComponent } from './store-requests/store-requests.component';
import { StoreViewComponent } from './store-view/store-view.component';
import { BuyProductComponent } from './buy-product/buy-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    LoginFormComponent,
    HomeComponent,
    ProductComponent,
    AddProductComponent,
    CustomerComponent,
    AddBrandComponent,
    AdminViewComponent,
    StoreOwnerComponent,
    AddStoreComponent,
    StoreComponent,
    StoreRequestsComponent,
    StoreViewComponent,
    BuyProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
