import {Component, OnInit} from '@angular/core';
import {Item} from '../../shared/model/item';
import {ItemService} from '../../shared/services/item.service';
import {SellerService} from '../../shared/services/seller.service';
import {BuyerService} from '../../shared/services/buyer.service';
import {AppSharedConst} from '../../shared/app-shared-const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private email: string;

  constructor() {
    this.email = localStorage.getItem(AppSharedConst.EMAIL);
  }

  ngOnInit(): void {
  }

}
