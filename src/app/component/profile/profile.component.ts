import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/model/user';
import {AppSharedConst} from '../../shared/app-shared-const';
import {NgForm} from '@angular/forms';
import {SellerService} from '../../shared/services/seller.service';
import {BuyerService} from '../../shared/services/buyer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  displayEditProfile = false;
  address: string;
  constructor(public sellerService: SellerService, public buyerService: BuyerService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem(AppSharedConst.USER));
    this.address = this.user.address;
  }

  showEditDialog(): void {
    this.displayEditProfile = true;
  }

  editAddress(): void {
    this.displayEditProfile = false;

  }
}
