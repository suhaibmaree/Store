import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './component/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
