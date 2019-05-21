import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//
import {SharedmodulesModule} from './commonmodule/sharedmodule/sharedmodules.module'

//
import { UsermoduleModule } from './usermodules/usermodule/usermodule.module';
import { SharedComponentmoduleModule  } from './sharedComponentmodules/shared-componentmodule.module';

//

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedmodulesModule,
    UsermoduleModule,
    SharedComponentmoduleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
