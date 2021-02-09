import {Component, OnInit} from '@angular/core';
import {Item} from './model/item';
import {ItemService} from './services/item.service';
import {SellerService} from './services/seller.service';
import {BuyerService} from './services/buyer.service';
import {Seller} from './model/seller';
import {Buyer} from './model/buyer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Store';
  constructor() {
  }

  ngOnInit(): void {
  }
}
