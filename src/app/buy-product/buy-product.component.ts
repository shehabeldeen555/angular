import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from './../signup-form/User';
import { DataService } from './../data.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  rForm: FormGroup;
  productID: number;
  storeID: number;
  quantityErr: string = "quantity is required";
  addressErr: string = "address is required";

  constructor(private fb: FormBuilder, private dataService: DataService, private location: Location, private route: ActivatedRoute) {
    this.rForm = this.fb.group({
      'quantity': [null, Validators.required],
      'address': [null, Validators.compose([Validators.required, Validators.minLength(15)])]
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.storeID = params["storeID"];
      this.productID = params["productID"];
    });
  }

  buy() {
    this.dataService.buy(this.storeID, this.productID, this.rForm.get("quantity").value, this.rForm.get("address").value).subscribe();
  }

}


