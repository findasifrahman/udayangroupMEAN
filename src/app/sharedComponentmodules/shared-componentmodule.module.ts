import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedmodulesModule } from '../commonmodule/sharedmodule/sharedmodules.module';
import { SocialcontactcardComponent } from './socialcontactcard/socialcontactcard.component';
import { ThreecolmatgridComponent } from './threecolmatgrid/threecolmatgrid.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { FileSelectDirective } from 'ng2-file-upload';
import { ProductviewcardComponent } from './productviewcard/productviewcard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MattreeComponent } from './mattree/mattree.component';
@NgModule({
  declarations: [NavbarComponent, FooterComponent, SocialcontactcardComponent,
     ThreecolmatgridComponent, ConfirmationDialogComponent, FileUploadComponent,
     FileSelectDirective,
     ProductviewcardComponent,
     SidenavComponent,
     MattreeComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedmodulesModule
  ],
  entryComponents:[ConfirmationDialogComponent],
  exports:[NavbarComponent,FooterComponent,SocialcontactcardComponent,ThreecolmatgridComponent,
    ConfirmationDialogComponent,FileUploadComponent,ProductviewcardComponent,SidenavComponent,
    MattreeComponent]
})
export class SharedComponentmoduleModule { }
