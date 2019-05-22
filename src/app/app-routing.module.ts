import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './usermodules/home/home.component';
import {OurserviceComponent} from './usermodules/ourservice/ourservice.component';
import { ProductgroupcreateComponent } from './adminmodules/products/productgroupcreate/productgroupcreate.component';
import { ProductgrouplistComponent } from './adminmodules/products/productgrouplist/productgrouplist.component';
import { ProductgroupeditComponent } from './adminmodules/products/productgroupedit/productgroupedit.component';
const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full' },
  { path:'services', component: OurserviceComponent},
  { path:'productgroupcreate', component: ProductgroupcreateComponent},
  { path: 'productgrouplist', component: ProductgrouplistComponent},
  { path: 'productgroupupdate/:id', component: ProductgroupeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
