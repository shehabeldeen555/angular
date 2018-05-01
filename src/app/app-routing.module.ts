import { StoreActionsComponent } from './store-actions/store-actions.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { StoreViewComponent } from './store-view/store-view.component';
import { StoreComponent } from './store/store.component';
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
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signUp',
    component: SignupFormComponent
  },
  {
    path: 'logIn',
    component: LoginFormComponent
  },
  {
    path: 'Products',
    component: ProductComponent
  },
  {
    path: 'addProduct',
    component: AddProductComponent
  },
  {
    path: 'Customer/:username',
    component: CustomerComponent
  },
  {
    path: 'addBrand',
    component: AddBrandComponent
  },
  {
    path: 'Admin/:username',
    component: AdminViewComponent
  },
  {
    path: 'StoreOwner/:username',
    component: StoreOwnerComponent
  },
  {
    path: 'Store/:id/:username',
    component: StoreComponent
  },
  {
    path: 'Store/:id',
    component: StoreComponent
  },
  {
    path: 'addStore/:username',
    component: AddStoreComponent
  },
  {
    path: 'storeRequest',
    component: StoreRequestsComponent
  },
  {
    path: 'StoreView/:name/:id',
    component: StoreViewComponent
  },
  {
    path: 'buyProduct/:storeID/:productID',
    component: BuyProductComponent
  },
  {
    path: 'StoreActions/:storeID',
    component: StoreActionsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
