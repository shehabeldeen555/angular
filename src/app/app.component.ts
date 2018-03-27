import { ProductComponent } from './product/product.component';
import { User } from './signup-form/User';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {

  users:User[];
  products: ProductComponent[];
  constructor(private dataService: DataService){}


  ngOnInit():void{
     this.dataService.getProducts().subscribe(data => {
      this.products=data;
      console.log(this.products);
     })
  }
}
