import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HeaderComponent} from './component/header/header.component';

import {SellerService} from './services/seller.service';
import {AuthService} from './auth/auth.service';
import {BuyerService} from './services/buyer.service';
import {ItemService} from './services/item.service';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {AuthGuardService} from './auth/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      authDomain: environment.firebase.authDomain,
      apiKey: environment.firebase.apiKey,
      projectId: environment.firebase.projectId
    }),
    AngularFireAuthModule
  ],
  providers: [ItemService, SellerService, BuyerService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
