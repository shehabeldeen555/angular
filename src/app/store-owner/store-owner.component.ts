import { StoreComponent } from './../store/store.component';
import { User } from './../signup-form/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-owner',
  templateUrl: './store-owner.component.html',
  styleUrls: ['./store-owner.component.css']
})
export class StoreOwnerComponent implements OnInit {

  private user: User;
  stores: StoreComponent[];

  constructor() { }

  ngOnInit() {
  }

}
