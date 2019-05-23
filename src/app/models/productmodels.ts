import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

export interface productmodels {
  productname: string,
  producttitle: string,
  productgroup: string,
  productmeta: string,
  productseo: string,
  description: string,
  offer:string,
  otherinfo:string,
  price: number,
  image1: string,
  image2: string,
  image3: string,
  image4: string
}
@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports:[]
})
export class productmodelsform {
  modelForms: FormGroup = this.formBuilder.group({
    productname: ["", Validators.required],
    producttitle: ["", Validators.required],
    productgroup: ["",Validators.required],
    productmeta: [""],
    productseo: [""],
    description: ["",Validators.required],
    offer: [""],
    otherinfo: [""],
    price: [""],
    image1: [""],
    image2: [""],
    image3: [""],
    image4: [""]
  });

  constructor(private formBuilder: FormBuilder) {}

}
