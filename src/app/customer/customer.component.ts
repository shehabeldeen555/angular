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

  constructor(private dataService: DataService) { 

  }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(data => {
      this.products=data;
     });
  }

}
