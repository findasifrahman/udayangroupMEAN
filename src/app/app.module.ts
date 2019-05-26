import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//
import {SharedmodulesModule} from './commonmodule/sharedmodule/sharedmodules.module'

//
import { UsermoduleModule } from './usermodules/usermodule/usermodule.module';
import { SharedComponentmoduleModule  } from './sharedComponentmodules/shared-componentmodule.module';
//import { AdminmoduleModule } from './adminmodules/adminmodule.module';
//
import { AdminlayoutComponent } from './otherLayouts/adminlayout/adminlayout.component';
import { UserviewlayoutComponent } from './otherLayouts/userviewlayout/userviewlayout.component';
@NgModule({
  declarations: [
    AppComponent,AdminlayoutComponent,UserviewlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedmodulesModule,
    UsermoduleModule,
    SharedComponentmoduleModule,
    BrowserAnimationsModule,
    HttpClientModule
    //AdminmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
