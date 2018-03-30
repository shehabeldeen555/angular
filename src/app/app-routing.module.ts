import { StoreRequestsComponent } from './store-requests/store-requests.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { StoreOwnerComponent } from './store-owner/store-owner.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { CustomerComponent } from './customer/customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path : ''             , component: HomeComponent       },
  { path : 'signUp'       , component: SignupFormComponent },
  { path : 'logIn'        , component: LoginFormComponent  },
  { path : 'Products'     , component: ProductComponent },
  { path : 'addProduct'   , component: AddProductComponent},
  { path : 'Customer'     , component: CustomerComponent},
  { path : 'addBrand'     , component: AddBrandComponent},
  { path : 'Admin'        , component: AdminViewComponent},
  { path : 'StoreOwner'   , component: StoreOwnerComponent},
  { path : 'addStore'     , component: AddStoreComponent},
  { path : 'storeRequest' , component: StoreRequestsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
