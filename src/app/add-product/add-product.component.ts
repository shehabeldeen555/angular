import { ProductComponent } from './../product/product.component';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  rForm: FormGroup;
  product: ProductComponent;

  constructor(private fb: FormBuilder, private dataService: DataService) { 
    this.rForm = this.fb.group({
      'name': [null, Validators.required],
      'price': [null, Validators.required],
      'category': [null, Validators.required],
      'brand': [null, Validators.required],
      'type': [null,Validators.required]
    })
  }

  ngOnInit() {
  }

  addProduct(){
    this.product=this.rForm.value;
    this.dataService.addProduct(this.product).subscribe();
  }

}
