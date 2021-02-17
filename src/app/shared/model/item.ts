import {FormControl} from '@angular/forms';

export class Item {
  imgPath: string;
  title: string;
  rate: number;
  price: number;
  description: string;
  id: string;
  sellerId: string;

  constructor(imgPath: string, title: string, rate: number, price: number, description: string, id: string, sellerId: string) {
    this.imgPath = imgPath;
    this.title = title;
    this.rate = rate;
    this.price = price;
    this.description = description;
    this.id = id;
    this.sellerId = sellerId;
  }
}
