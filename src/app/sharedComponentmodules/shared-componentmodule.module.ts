import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedmodulesModule } from '../commonmodule/sharedmodule/sharedmodules.module';
import { SocialcontactcardComponent } from './socialcontactcard/socialcontactcard.component';
import { ThreecolmatgridComponent } from './threecolmatgrid/threecolmatgrid.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
@NgModule({
  declarations: [NavbarComponent, FooterComponent, SocialcontactcardComponent,
     ThreecolmatgridComponent, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedmodulesModule
  ],
  entryComponents:[ConfirmationDialogComponent],
  exports:[NavbarComponent,FooterComponent,SocialcontactcardComponent,ThreecolmatgridComponent,ConfirmationDialogComponent]
})
export class SharedComponentmoduleModule { }
