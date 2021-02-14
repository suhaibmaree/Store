import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {HomeAuthGuard} from '../../shared/guard/home-auth-guard';
import {ProfileComponent} from '../profile/profile.component';

const homeRouts: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [{path: 'profile', component: ProfileComponent}],
    canActivate: [HomeAuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRouts)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {

}
