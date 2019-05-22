import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductgrouplistComponent } from './products/productgrouplist/productgrouplist.component';
import { ProductgroupcreateComponent } from './products/productgroupcreate/productgroupcreate.component';
import { ProductgroupeditComponent } from './products/productgroupedit/productgroupedit.component';
import { SharedmodulesModule } from '../commonmodule/sharedmodule/sharedmodules.module';
import { SharedComponentmoduleModule } from '../sharedComponentmodules/shared-componentmodule.module';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { producgroupmodels } from '../models/productgroupmodels';
@NgModule({
  declarations: [ProductgrouplistComponent, ProductgroupcreateComponent, ProductgroupeditComponent],
  imports: [
    CommonModule,SharedmodulesModule,SharedComponentmoduleModule,FormsModule,
    ReactiveFormsModule,producgroupmodels,HttpClientModule
  ],
  exports:[ProductgrouplistComponent, ProductgroupcreateComponent, ProductgroupeditComponent]
})
export class AdminmoduleModule { }
