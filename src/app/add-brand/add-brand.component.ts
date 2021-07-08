import { Brand } from './brand';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  rForm: FormGroup;
  brand: Brand;

  constructor(private fb: FormBuilder, private dataService: DataService) { 
     this.rForm = this.fb.group({
    'name': [null, Validators.required],
    'company': [null, Validators.required]
  })
}

  ngOnInit() {
  }

  addBrand(){
    this.brand=this.rForm.value;
    this.dataService.addBrand(this.brand).subscribe();
  }

}
