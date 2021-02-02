import {Component} from '@angular/core';
import {Item} from './model/item';
import {ItemService} from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Store';
  items = [
    [1, 'First Item', '', 'This is a dummy description for the first item', 1],
    [2, 'Second Item', '', 'This is a dummy description for the second item', 2],
    [3, 'Third Item', '', 'This is a dummy description for the third item', 3],
  ];

  sellers = [new Seller(1, 'Suhaib', 'seller', [1])];
  buyers = [new Buyer(1, 'Sajie', 'buyer', [3, 2], [1, 2])];

  constructor(private itemService: ItemService) {
  }


  onSave(): void {

    this.itemService.storeItem(this.items).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
