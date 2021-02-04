import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ItemService} from './services/item.service';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './component/header/header.component';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from 'primeng/api';
import {SlideMenuModule} from 'primeng/slidemenu';
import {environment} from '../environments/environment';
import {SellerService} from './services/seller.service';
import {AuthService} from './auth/auth.service';
import {BuyerService} from './services/buyer.service';


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
    ToolbarModule,
    ButtonModule,
    SharedModule,
    SlideMenuModule,
    AngularFireModule.initializeApp({
      authDomain: environment.firebase.authDomain,
      apiKey: environment.firebase.apiKey,
      projectId: environment.firebase.projectId
    }),
    AngularFireAuthModule
  ],
  providers: [ItemService, SellerService, BuyerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
