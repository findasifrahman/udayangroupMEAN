import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './usermodules/home/home.component';
import {OurserviceComponent} from './usermodules/ourservice/ourservice.component';
const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full' },
  { path:'services', component: OurserviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
