import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: number;
  name: string;
  price: number;
  category: string;
  brand: string;
  type: string;
  views: number;
  sold: number;

  constructor() { }

  ngOnInit() {
  }

}
