import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedmodulesModule } from '../commonmodule/sharedmodule/sharedmodules.module';
import { SocialcontactcardComponent } from './socialcontactcard/socialcontactcard.component';
import { ThreecolmatgridComponent } from './threecolmatgrid/threecolmatgrid.component';
@NgModule({
  declarations: [NavbarComponent, FooterComponent, SocialcontactcardComponent, ThreecolmatgridComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedmodulesModule
  ],
  exports:[NavbarComponent,FooterComponent,SocialcontactcardComponent,ThreecolmatgridComponent]
})
export class SharedComponentmoduleModule { }
