import {NgModule} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {HomeComponent} from './home.component';

// primeng
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from 'primeng/api';
import {HomeRoutingModule} from './home-routing-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from '../profile/profile.component';
import {HomeAuthGuard} from '../../shared/guard/home-auth-guard';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddItemComponent} from '../add-item/add-item.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    AddItemComponent,
  ],
  imports: [
    MenubarModule,
    ButtonModule,
    SharedModule,
    HomeRoutingModule,
    FormsModule,
    CommonModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    DropdownModule,
    InputNumberModule
  ],
  providers: [HomeAuthGuard],
})

export class HomeModule {

}
