import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {SignInAuthGuard} from '../shared/guard/signin-auth-guard';

const authRoutes: Routes = [
  {path: 'signin', component: SigninComponent, canActivate: [SignInAuthGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [SignInAuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}
