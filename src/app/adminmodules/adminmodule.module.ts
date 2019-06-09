import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ProductgrouplistComponent } from './productsgroup/productgrouplist/productgrouplist.component';
import { ProductgroupcreateComponent } from './productsgroup/productgroupcreate/productgroupcreate.component';
import { ProductgroupeditComponent } from './productsgroup/productgroupedit/productgroupedit.component';
import { SharedmodulesModule } from '../commonmodule/sharedmodule/sharedmodules.module';
import { SharedComponentmoduleModule } from '../sharedComponentmodules/shared-componentmodule.module';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductcreateComponent } from './products/productcreate/productcreate.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { ProducteditComponent } from './products/productedit/productedit.component';
import { ProductdetailComponent } from './products/productdetail/productdetail.component';

//import { FileUploadComponent } from '../sharedComponentmodules/file-upload/file-upload.component';

import { producgroupmodels } from '../models/productgroupmodels';
import { productmodelsform } from '../models/productmodels';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout/logout.component';




const routes: Routes = [

  { path: 'productlist', component: ProductlistComponent },
  { path: 'productcreate', component: ProductcreateComponent },
  { path: 'productupdate/:id', component: ProducteditComponent },

  { path: 'productgroupcreate', component: ProductgroupcreateComponent },
  { path: 'productgrouplist', component: ProductgrouplistComponent },
  { path: 'productgroupupdate/:id', component: ProductgroupeditComponent },

  { path: 'login', component : LoginComponent},
  { path: 'logout', component : LogoutComponent},
];

@NgModule({
  declarations: [ProductgrouplistComponent, ProductgroupcreateComponent, ProductgroupeditComponent,
    ProductcreateComponent,ProductlistComponent,ProducteditComponent,ProductdetailComponent,
    LoginComponent, LogoutComponent
  ],
  imports: [
    CommonModule,SharedmodulesModule,SharedComponentmoduleModule,FormsModule,RouterModule.forChild(routes),
    ReactiveFormsModule,producgroupmodels,HttpClientModule,productmodelsform
  ],
  exports:[ProductgrouplistComponent, ProductgroupcreateComponent, ProductgroupeditComponent,
    ProductcreateComponent,ProductlistComponent,ProducteditComponent,ProductdetailComponent,
    LoginComponent, LogoutComponent
  ]
})
export class AdminmoduleModule { }
