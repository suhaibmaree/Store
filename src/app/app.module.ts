import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AuthGuardService} from './auth/auth-guard.service';
import {HttpService} from './services/http.service';
import { HomeComponent } from './component/home/home.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

// primeng
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [ItemService, SellerService, BuyerService, AuthService, AuthGuardService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
