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

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.dataService.getStoreOwnerName(this.id).subscribe(data => {
      this.store = data;
      this.storeOwner = this.store.storeOwner;
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

  add(product: ProductComponent, quantity: number) {
    let storeProduct: store_product = {
      storeID: this.id,
      productID: product.id,
      quantity: quantity,
      views: 0,
      sold: 0
    }
    this.dataService.addProductToStore(storeProduct).subscribe();
    window.location.reload();
  }

  AddCollaborator(collaborator: string) {
    this.dataService.addCollaborator(this.id, collaborator).subscribe();
  }
  

}
