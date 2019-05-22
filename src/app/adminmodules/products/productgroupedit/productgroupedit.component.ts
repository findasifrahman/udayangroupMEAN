import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductgroupService } from '../productgroup.service';
import { Router } from '@angular/router';
import { __await } from 'tslib';
import { MatSnackBar } from '@angular/material';
import { producgroupmodels } from '../../../models/productgroupmodels';
@Component({
  selector: 'app-productgroupedit',
  templateUrl: './productgroupedit.component.html',
  styleUrls: ['./productgroupedit.component.css']
})
export class ProductgroupeditComponent implements OnInit {

  id: any;
  Forms = this.productgroupmodels.modelForms;
  constructor(private productgroupmodels: producgroupmodels, private snackBar: MatSnackBar, 
    private route: ActivatedRoute, private pgService: ProductgroupService, private formBuilder: FormBuilder, public _router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("update id--" + params['id']);
      this.pgService.getbyid(this.id).subscribe((data) => {
        this.Forms.patchValue(data);
        //console.log(this.Forms.value);
      });
    })
  }
   
  async FormSubmit() {
    const formValue = this.Forms.value;
    console.log(formValue);
    await this.pgService.update(this.id, formValue).subscribe(() => {
      console.log("Update req successfull");
      this.snackBar.open('Data Updated Successfully', "Remove", {
        duration: 5000, verticalPosition: 'top', panelClass: ['blue-snackbar']
      });
      this._router.navigate(['/userlist']);
    },
      error => {
        console.log("error Update", error);
        this.snackBar.open('Update Unsuccessfull', "Remove", {
          duration: 6000, verticalPosition: 'top', panelClass: ['red-snackbar']
        });
      }
    );
  }



}
