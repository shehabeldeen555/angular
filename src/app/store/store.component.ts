import { StoreOwnerComponent } from './../store-owner/store-owner.component';
import { Component, OnInit } from '@angular/core';

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
  storeOwner: StoreOwnerComponent;

  constructor() { }

  ngOnInit() {
  }

}
