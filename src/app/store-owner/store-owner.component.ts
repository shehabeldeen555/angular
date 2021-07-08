import { Collaborator } from './collaborator';
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

  id: number;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  stores: StoreComponent[];
  collaborator: Collaborator[];

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params["username"];
    });

    this.dataService.getStores(this.username).subscribe(store => {
      this.stores = store;
    });

    this.dataService.getCollaboratorStores(this.username).subscribe(data => {
      this.collaborator = data;
      if (this.collaborator.length > 0) {
        for (var i = 0; i < this.collaborator.length; i++){
          this.dataService.getStore(this.collaborator[i].storeID).subscribe(data => {
            this.stores.push(data);
          });
        }
      }
    });
  }

}
