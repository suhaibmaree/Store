import {NgModule} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {HomeComponent} from './home.component';

// primeng
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from 'primeng/api';
import {HomeRoutingModule} from './home-routing-module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    MenubarModule,
    ButtonModule,
    SharedModule,
    HomeRoutingModule
  ]
})

export class HomeModule{

}
