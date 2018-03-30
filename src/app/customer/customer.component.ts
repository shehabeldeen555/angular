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

  constructor(private dataService: DataService) { 

  }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(data => {
      this.products=data;
     });

     this.dataService.getAllStores().subscribe(data =>{
       this.stores=data;
     });
  }

  view(product: ProductComponent){
    this.dataService.view(product).subscribe();

  }

}
