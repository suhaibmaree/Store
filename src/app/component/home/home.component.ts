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

  items = [
    new Item(1, 'First Item', '', 'This is a dummy description for the first item', 1),
    new Item(2, 'Second Item', '', 'This is a dummy description for the second item', 2),
    new Item(3, 'Third Item', '', 'This is a dummy description for the third item', 3),
  ];

  // sellers = [new Seller(1, 'Suhaib', 'seller', [1])];
  // buyers = [new Buyer(1, 'Sajie', 'buyer', [3, 2], [1, 2])];

  constructor(private itemService: ItemService,
              private buyerService: BuyerService,
              private sellerService: SellerService) {
    this.email = localStorage.getItem(AppSharedConst.EMAIL);

  }

  ngOnInit(): void {
  }

  onSave(): void {
    this.itemService.storeItems(this.items);
    // this.sellerService.storeSellers(this.sellers);
    // this.buyerService.storeBuyers(this.buyers);
  }

  onGet(): void {
    // this.itemService.getItems()
    //   .subscribe(
    //     (items: any[]) => console.log(items),
    //     (error) => console.log(error)
    //   );

    // this.buyerService.getBuyers();
    this.sellerService.getSellers();
  }
}
