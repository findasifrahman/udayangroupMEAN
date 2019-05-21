import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { SharedmodulesModule } from '../../commonmodule/sharedmodule/sharedmodules.module';
import { SharedComponentmoduleModule } from '../../sharedComponentmodules/shared-componentmodule.module';

import { DirectivesModule } from '../../directives/directives.module';
import { OurserviceComponent } from '../ourservice/ourservice.component';

@NgModule({
  declarations: [HomeComponent, OurserviceComponent],
  imports: [
    CommonModule,
    SharedComponentmoduleModule,
    DirectivesModule,
    SharedmodulesModule 
  ]
})
export class UsermoduleModule { }
