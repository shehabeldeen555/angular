import { StoreComponent } from './../store/store.component';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  rForm: FormGroup;
  store: StoreComponent;

  constructor(private fb: FormBuilder, private dataService: DataService) { 
    this.rForm = this.fb.group({
      'name': [null, Validators.required],
      'location': [null, Validators.required],
      'type': [null,Validators.required]
    })
  }

  ngOnInit() {
  }

  addStore() {
    this.store=this.rForm.value;
    this.dataService.addStore(this.store).subscribe();
  }

}
