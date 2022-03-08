import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { CardComponent } from './shared/card/card.component';
import { IphoneComponent } from './iphone/iphone.component';
import { AccessorizesComponent } from './accessorizes/accessorizes.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { IphoneListComponent } from './iphone/iphone-list/iphone-list.component';
import { AccessorizeListComponent } from './accessorizes/accessorize-list/accessorize-list.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { AuthComponent } from './auth/auth.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    IphoneComponent,
    AccessorizesComponent,
    AdminPanelComponent,
    IphoneListComponent,
    AccessorizeListComponent,
    SignUpComponent,
    SingInComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
