import { StoreComponent } from './../store/store.component';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';


@Component({
  selector: 'store-requests',
  templateUrl: './store-requests.component.html',
  styleUrls: ['./store-requests.component.css']
})
export class StoreRequestsComponent implements OnInit {

  stores: StoreComponent[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService.storeRequest().subscribe(data =>{
        this.stores=data;
      })
  }

  addStore(store: StoreComponent){
    this.dataService.acceptStrore(store.id).subscribe();
    window.location.reload();
  }

  deleteStore(store: StoreComponent){
    this.dataService.rejectStore(store.id).subscribe();
    window.location.reload();
  }


}
