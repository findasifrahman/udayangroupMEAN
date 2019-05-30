import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductgroupService } from '../productgroup.service';
import { Router } from '@angular/router';
import { __await } from 'tslib';
import { MatSnackBar } from '@angular/material';

import { producgroupmodels } from '../../../models/productgroupmodels';
@Component({
  selector: 'app-productgroupcreate',
  templateUrl: './productgroupcreate.component.html',
  styleUrls: ['./productgroupcreate.component.css']
})
export class ProductgroupcreateComponent implements OnInit {

  Forms: FormGroup;
  constructor(private pgmodels:producgroupmodels,private snackBar:MatSnackBar,
    private pgservice:ProductgroupService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.Forms = this.pgmodels.modelForms;
    this.Forms.reset();
  }
  async FormSubmit() {
    const formValue = this.Forms.value;
    try {
      await this.pgservice.Add(formValue).subscribe(
        data => {
          console.log("post req successfull");
          this.snackBar.open('Product Group Added Successfully', "Remove", {
            duration: 6000,
            verticalPosition: 'top',
            panelClass: ['blue-snackbar']
          });
          this.router.navigate(["/admin/productgrouplist"]);
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
}
