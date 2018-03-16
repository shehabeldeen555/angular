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

  constructor(private dataService: DataService){}

  getCustomers(){
    return this.dataService.getCustomers().then(users=>
      this.users=users);
  }

  ngOnInit():void{
      this.getCustomers();
  }
}
