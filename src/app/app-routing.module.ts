import { CustomerComponent } from './customer/customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path : ''      , component: HomeComponent       },
  { path : 'signUp', component: SignupFormComponent },
  { path : 'logIn' , component: LoginFormComponent  },
  { path : 'Products' , component: ProductComponent },
  { path : 'addProduct' , component: AddProductComponent},
  { path : 'Customer' , component: CustomerComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
