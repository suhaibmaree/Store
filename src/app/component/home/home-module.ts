import {NgModule} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {HomeComponent} from './home.component';

// primeng
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from 'primeng/api';
import {HomeRoutingModule} from './home-routing-module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from '../profile/profile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    MenubarModule,
    ButtonModule,
    SharedModule,
    HomeRoutingModule,
    FormsModule,
    CommonModule
  ]
})

export class HomeModule{

}
