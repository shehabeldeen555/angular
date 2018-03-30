import { DataService } from './../data.service';
import { StoreComponent } from './../store/store.component';
import { User } from './../signup-form/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-owner',
  templateUrl: './store-owner.component.html',
  styleUrls: ['./store-owner.component.css']
})
export class StoreOwnerComponent implements OnInit {

  firstname: string ;
  lastname: string ;
  username: string ;
  password: string ;
  email: string ;
  stores: StoreComponent[];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.username=params["username"];
    });

    this.dataService.getStores(this.username).subscribe(store =>{
      this.stores=store;
    });
  }

}
