import {NgModule} from '@angular/core';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing-module';
import {SignInAuthGuard} from '../shared/guard/signin-auth-guard';


@NgModule({
  declarations:[
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule
  ],
  providers: [SignInAuthGuard],
})

export class AuthModule{
}
