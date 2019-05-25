import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './usermodules/home/home.component';
import {OurserviceComponent} from './usermodules/ourservice/ourservice.component';
import { ViewproductComponent } from './usermodules/viewproduct/viewproduct.component';

import { ProductgroupcreateComponent } from './adminmodules/productsgroup/productgroupcreate/productgroupcreate.component';
import { ProductgrouplistComponent } from './adminmodules/productsgroup/productgrouplist/productgrouplist.component';
import { ProductgroupeditComponent } from './adminmodules/productsgroup/productgroupedit/productgroupedit.component';

import { ProductcreateComponent } from './adminmodules/products/productcreate/productcreate.component';
import { ProductlistComponent } from './adminmodules/products/productlist/productlist.component';
import { ProducteditComponent } from './adminmodules/products/productedit/productedit.component';

import { ClientsComponent } from './usermodules/clients/clients.component';
import { AboutusComponent } from './usermodules/aboutus/aboutus.component';
import { ContactusComponent } from './usermodules/contactus/contactus.component';
import { ProductdetailComponent } from './usermodules/productdetail/productdetail.component';

import { LoginComponent } from './adminmodules/login/login.component';

import { JwtModule } from '@auth0/angular-jwt';
const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full' },
  { path:'services', component: OurserviceComponent},
  { path:'viewproduct', component: ViewproductComponent},
  { path:'clients', component: ClientsComponent},
  { path:'aboutus', component: AboutusComponent},
  { path:'contactus', component: ContactusComponent},
  { path: 'productdetail/:id', component: ProductdetailComponent},

  { path:'productgroupcreate', component: ProductgroupcreateComponent},
  { path: 'productgrouplist', component: ProductgrouplistComponent},
  { path: 'productgroupupdate/:id', component: ProductgroupeditComponent},

  { path: 'productcreate', component: ProductcreateComponent},
  { path: 'productlist', component: ProductlistComponent},
  { path: 'productupdate/:id', component: ProducteditComponent},

  { path: 'admin', component: LoginComponent},
];
export function mytokenGetter() {
  //return this.logservice.getUserLogStatus();
  return localStorage.getItem('jwt');
}
@NgModule({
  imports: [RouterModule.forRoot(routes),
    JwtModule.forRoot({/* automatically assign bearer token with every http request service*/
      config: {
        tokenGetter: mytokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: []
      }
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
