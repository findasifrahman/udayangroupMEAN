import { NgModule } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';

export interface productmodels {
  groupName: string,
}
@NgModule({
  imports: [ReactiveFormsModule, FormsModule],
  exports:[]
})
export class producgroupmodels {
  modelForms: FormGroup = this.formBuilder.group({
    groupname: ["", Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

}
