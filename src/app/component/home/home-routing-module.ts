import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {HomeAuthGuard} from '../../shared/guard/home-auth-guard';
import {ProfileComponent} from '../profile/profile.component';
import {CardComponent} from '../card/card.component';
import {AddItemComponent} from '../add-item/add-item.component';
import {SellerDashboardComponent} from '../seller-dashboard/seller-dashboard.component';

const homeRouts: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'card', component: CardComponent},
      {path: 'add-item', component: AddItemComponent},
      {path: 'seller-dashboard', component: SellerDashboardComponent}
    ],
    canActivate: [HomeAuthGuard]
  },
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
