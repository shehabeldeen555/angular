import { Location } from '@angular/common';
import { StoreComponent } from './../store/store.component';
import { ProductComponent } from './../product/product.component';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  products: ProductComponent[];
  stores: StoreComponent[];

  constructor(private dataService: DataService, private location: Location) { 

  }

  ngOnInit(): void {
     this.dataService.getAllStores().subscribe(data =>{
       this.stores=data;
     });
  }

  view(store: StoreComponent){
    this.location.go("/StoreView/"+store.name+"/"+store.id);
    window.location.reload();
  }

}
