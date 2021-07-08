import { productHistory } from './productHistory';
import { store_product } from './store_product';
import { ProductComponent } from './../product/product.component';
import { DataService } from './../data.service';
import { StoreOwnerComponent } from './../store-owner/store-owner.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {

  id: number;
  name: string;
  location: string;
  type: string;
  storeOwner: string;
  store: StoreComponent;
  productID: store_product[];
  myproducts: ProductComponent[];
  allproducts: ProductComponent[];
  storeOwners: StoreOwnerComponent[];
  user: string;
  owner: boolean;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.user = params["username"];
    });

    this.dataService.getStore(this.id).subscribe(data => {
      this.store = data;
      this.storeOwner = this.store.storeOwner;
      if (this.user === this.storeOwner) {
        this.owner = true;
      } else {
        this.owner = false;
      }


    });

    this.dataService.getProductsOfStore(this.id).subscribe(data => {
      this.productID = data;
      this.myproducts = new Array();
      for (let i of this.productID) {
        this.dataService.getProduct(i.productID).subscribe(product => {
          product.views = i.views;
          product.sold = i.sold;
          product.quantity = i.quantity;
          this.myproducts.push(product);
        })
      }
    });

    this.dataService.getProducts().subscribe(data => {
      this.allproducts = data;
    });

    this.dataService.getStoreOwner().subscribe(data => {
      this.storeOwners = data;
    })


  }

  add(product: ProductComponent, quantity: number, user: string) {
    let storeProduct: store_product = {
      storeID: this.id,
      productID: product.id,
      quantity: quantity,
      views: 0,
      sold: 0
    }
    if (!this.owner) {
      this.dataService.getStoreProduct(this.id, product.id).subscribe( data =>{
        if(data !== null){
          let oldProduct: productHistory = {
            storeID: data.storeID,
            productID: data.productID,
            quantity: data.quantity,
            collaborator: this.user
          }
          console.log(oldProduct);
         this.dataService.addProductHistory(oldProduct).subscribe();
        }
        else{
          let oldProduct: productHistory = {
            storeID: this.id,
            productID: product.id,
            quantity: null,
            collaborator: this.user
          }
          console.log(oldProduct);
          this.dataService.addProductHistory(oldProduct).subscribe();
        }
      });

    }
    this.dataService.addProductToStore(storeProduct).subscribe();
    window.location.reload();
  }

  AddCollaborator(collaborator: string) {
    this.dataService.addCollaborator(this.id, collaborator).subscribe();
  }


}
