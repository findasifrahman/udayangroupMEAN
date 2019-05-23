import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { __await } from 'tslib';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { productmodelsform,productmodels } from '../../../models/productmodels';
import { ProductgroupService } from '../../productsgroup/productgroup.service';
@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {
  filenameinput3: string = "Image 3";
  filenameinput2: string = "Image 2";
  filenameinput1: string = "Image 1";
  filenameinput4: string = "Image 4";
  _file3id: string = null;
  _file2id: string = null;
  _file1id: string = null;
  _file4id: string = null;

  id: any;
  Forms: FormGroup;
  selectFormControl = new FormControl('', Validators.required);
  groups: any = [];
  constructor(private pservice:ProductsService,private snackBar: MatSnackBar,private pgService:ProductgroupService,
    private formBuilder: FormBuilder, private router: Router,private productModels:productmodelsform,
    public _router: Router,private route: ActivatedRoute) { }
  compareThem(o1, o2): boolean{
      console.log('compare with');
      return o1.name === o2.name;
  }
  defval:any;
  ngOnInit() {
    this.Forms = this.productModels.modelForms;
    this.pgService.getAll().subscribe((posts) => {
      //console.log(posts);
      this.groups = posts as any;
      //console.log(this.groups);
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("update id--" + params['id']);
      this.pservice.getbyid(this.id).subscribe((data) => {
        this.Forms.patchValue(data);
        //this.selectFormControl = new FormControl(data["productgroup"], Validators.required);
        this.defval = data["productgroup"];
        console.log(data["productgroup"]);
      });
    })
  }

  async FormSubmit() {
    const formValue = this.Forms.value;
    console.log(formValue);
    await this.pservice.update(this.id, formValue).subscribe(() => {
      console.log("Update req successfull");
      this.snackBar.open('Data Updated Successfully', "Remove", {
        duration: 5000, verticalPosition: 'top', panelClass: ['blue-snackbar']
      });
      this._router.navigate(['/productlist']);
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
