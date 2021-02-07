import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuardService} from './auth/auth-guard.service';

const routes: Routes = [
  // {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent, canActivate: [AuthGuardService] },
  {path: 'signin', component: SigninComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
