import { StoreComponent } from './../store/store.component';
import { ProductComponent } from './../product/product.component';
import { store_product } from './../store/store_product';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent implements OnInit {

  id: number;
  store: string;
  productID: store_product[]; 
  myproducts: ProductComponent[];
  stores: StoreComponent[];

  constructor(private dataService: DataService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params["id"];
      this.store=params["name"];
    });

    this.dataService.getAllStores().subscribe(data =>{
      this.stores=data;
    });

    this.dataService.getProductsOfStore(this.id).subscribe( data => {
      this.productID=data;
      this.myproducts=new Array();
      for(let i of this.productID){
        this.dataService.getProduct(i.productID).subscribe(product =>{
          product.views=i.views;
          product.sold=i.sold;
          product.quantity=i.quantity;
          console.log(product);
          this.myproducts.push(product);
        })
      }
    });
  }

  view(product: ProductComponent){
    this.dataService.view(this.id,product.id).subscribe();
  }

  buy(product: ProductComponent){
    this.location.go("/buyProduct/"+this.id+"/"+product.id);
    window.location.reload();
  }
  
  refresh(){
    window.location.reload();
  }
}
