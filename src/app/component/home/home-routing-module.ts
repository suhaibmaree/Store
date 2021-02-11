import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const homeRouts: Routes = [
  {path: 'home', component: HomeComponent},
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
