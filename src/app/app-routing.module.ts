import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './usermodules/home/home.component';
import {OurserviceComponent} from './usermodules/ourservice/ourservice.component';
import { ProductgroupcreateComponent } from './adminmodules/productsgroup/productgroupcreate/productgroupcreate.component';
import { ProductgrouplistComponent } from './adminmodules/productsgroup/productgrouplist/productgrouplist.component';
import { ProductgroupeditComponent } from './adminmodules/productsgroup/productgroupedit/productgroupedit.component';

import { ProductcreateComponent } from './adminmodules/products/productcreate/productcreate.component';
import { ProductlistComponent } from './adminmodules/products/productlist/productlist.component';
import { ProducteditComponent } from './adminmodules/products/productedit/productedit.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full' },
  { path:'services', component: OurserviceComponent},
  { path:'productgroupcreate', component: ProductgroupcreateComponent},
  { path: 'productgrouplist', component: ProductgrouplistComponent},
  { path: 'productgroupupdate/:id', component: ProductgroupeditComponent},

  { path: 'productcreate', component: ProductcreateComponent},
  { path: 'productlist', component: ProductlistComponent},
  { path: 'productupdate/:id', component: ProducteditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
