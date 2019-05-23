import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { __await } from 'tslib';
import { MatSnackBar } from '@angular/material';
import { productmodelsform,productmodels } from '../../../models/productmodels';
import { ProductgroupService } from '../../productsgroup/productgroup.service';
@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  filenameinput3: string = "Image 3";
  filenameinput2: string = "Image 2";
  filenameinput1: string = "Image 1";
  filenameinput4: string = "Image 4";
  _file3id: string = null;
  _file2id: string = null;
  _file1id: string = null;
  _file4id: string = null;

  Forms: FormGroup;
  selectFormControl = new FormControl('', Validators.required);
  groups: any[];
  constructor(private pservice:ProductsService,private snackBar: MatSnackBar,private pgService:ProductgroupService,
    private formBuilder: FormBuilder, private router: Router,private productModels:productmodelsform) { }

  ngOnInit() {
    this.Forms = this.productModels.modelForms;
    this.pgService.getAll().subscribe((posts) => {
      this.groups = posts as any;
      console.log(posts);
    });
  }
  async FormSubmit() {
    this.Forms.patchValue({
      image1: this._file1id,
      image2: this._file2id,
      image3: this._file3id,
      image4: this._file4id,
    })
    const formValue = this.Forms.value;
    try {
      await this.pservice.Add(formValue).subscribe(
        data => {
          console.log("post req successfull");
          this.snackBar.open('Product Added Successfully', "Remove", {
            duration: 6000,
            verticalPosition: 'top',
            panelClass: ['blue-snackbar']
          });
          this.router.navigate(["/productlist"]);
        },
        error => {
          console.log("error post", error);
          this.snackBar.open('Unsuccessfull', "Remove", {
            duration: 6000,
            verticalPosition: 'top',
            panelClass: ['red-snackbar']
          });
        }
      );

    }
    catch (err) {
    }
  }
  file4id($event) {
    this._file4id = $event; console.log("pic id arrived--" + $event);
  }
  file3id($event) {
    this._file3id = $event; console.log("pic id arrived--" + $event);
  }
  file2id($event) {
    this._file2id = $event; console.log("pic id arrived--" + $event);
  }
  file1id($event) {
    this._file1id = $event; console.log("pic id arrived--" + $event);
  }
}
