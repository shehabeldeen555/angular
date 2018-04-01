import { ProductComponent } from './../product/product.component';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Brand } from '../add-brand/brand';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  rForm: FormGroup;
  product: ProductComponent;
  brands: Brand[];

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
    this.dataService.getBrands().subscribe(data =>{
      this.brands=data;
    })
  }

  addProduct(){
    this.product=this.rForm.value;
    this.product.views=0;
    this.dataService.addProduct(this.product).subscribe();
  }

}
