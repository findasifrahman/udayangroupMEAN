import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { SharedmodulesModule } from '../../commonmodule/sharedmodule/sharedmodules.module';
import { SharedComponentmoduleModule } from '../../sharedComponentmodules/shared-componentmodule.module';

import { DirectivesModule } from '../../directives/directives.module';
import { OurserviceComponent } from '../ourservice/ourservice.component';
import { ViewproductComponent } from '../viewproduct/viewproduct.component';
import { ClientsComponent } from '../clients/clients.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component';

@NgModule({
  declarations: [HomeComponent, OurserviceComponent, ViewproductComponent, ClientsComponent, 
    AboutusComponent, ContactusComponent, ProductdetailComponent],
  imports: [
    CommonModule,
    SharedComponentmoduleModule,
    DirectivesModule,
    SharedmodulesModule 
  ]
})
export class UsermoduleModule { }
