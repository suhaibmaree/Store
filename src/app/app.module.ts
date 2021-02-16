import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {SellerService} from './shared/services/seller.service';
import {AuthService} from './auth/auth.service';
import {BuyerService} from './shared/services/buyer.service';
import {ItemService} from './shared/services/item.service';
import {HttpService} from './shared/services/http.service';

// Firebase services + environment module
import {environment} from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import {AuthModule} from './auth/auth-module';
import {HomeModule} from './component/home/home-module';
import {ItemCardModule} from './component/card/item-card-module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AuthModule,
    HomeModule,
    ItemCardModule,
  ],
  providers: [ItemService, SellerService, BuyerService, AuthService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
