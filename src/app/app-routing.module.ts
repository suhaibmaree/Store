import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';

const routes: Routes = [
  // {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent },
  {path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
