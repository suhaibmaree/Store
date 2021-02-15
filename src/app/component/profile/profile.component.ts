import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/model/user';
import {AppSharedConst} from '../../shared/app-shared-const';
import {NgForm} from '@angular/forms';
import {SellerService} from '../../shared/services/seller.service';
import {BuyerService} from '../../shared/services/buyer.service';
import {AngularFireList} from '@angular/fire/database';
import {Seller} from '../../shared/model/seller';
import {Buyer} from '../../shared/model/buyer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  displayEditProfile = false;
  address: string;
  private userKey: string;
  constructor(public sellerService: SellerService, public buyerService: BuyerService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem(AppSharedConst.USER));
    this.userKey = localStorage.getItem(AppSharedConst.USER_KEY);
    this.address = this.user.address;
  }

  showEditDialog(): void {
    this.displayEditProfile = true;
  }

  editAddress(): void {
    this.displayEditProfile = false;
    this.user.address = this.address;

    switch (this.user.userType) {
      case 'buyer': {
        this.buyerService.update(this.userKey, this.user);
        break;
      }
      case 'seller': {
        this.sellerService.update(this.userKey, this.user);
        break;
      }
    }
    localStorage.setItem(AppSharedConst.USER, JSON.stringify(this.user));
  }

}
