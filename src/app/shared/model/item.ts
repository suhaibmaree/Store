import {FormControl} from '@angular/forms';

export class Item {
  imgPath: string;
  title: string;
  rate: number;
  price: number;
  description: string;
  id: string;
  sellerId: string;
  itemsInStock: number;
  category: string;

  constructor(imgPath: string, title: string, rate: number, price: number,
              description: string, id: string, sellerId: string,
              category: string, itemsInStock: number) {
    this.imgPath = imgPath;
    this.title = title;
    this.rate = rate;
    this.price = price;
    this.description = description;
    this.id = id;
    this.sellerId = sellerId;
    this.itemsInStock = itemsInStock;
    this.category = category;
  }
}
