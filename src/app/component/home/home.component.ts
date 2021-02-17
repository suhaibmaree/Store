import {Component, OnInit} from '@angular/core';
import {Item} from '../../shared/model/item';
import {ItemService} from '../../shared/services/item.service';
import {SellerService} from '../../shared/services/seller.service';
import {BuyerService} from '../../shared/services/buyer.service';
import {AppSharedConst} from '../../shared/app-shared-const';
import {User} from '../../shared/model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private email: string;
  private user: User;

  constructor(private router: Router) {
    this.email = localStorage.getItem(AppSharedConst.EMAIL);
    this.user = JSON.parse(localStorage.getItem(AppSharedConst.USER));
    if (this.user.userType === AppSharedConst.SELLER){
      this.router.navigate(['/home/seller-dashboard']);
    }
  }

  ngOnInit(): void {
  }

}
