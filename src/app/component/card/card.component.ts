import { Component, OnInit } from '@angular/core';
import {Item} from '../../shared/model/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  rating: number;
  price: number;
  description: string;
  title: string;
  item: Item;

  constructor() { }

  ngOnInit(): void {
    this.title = this.item.title;
    this.rating = this.item.rate;
    this.price = this.item.price;
    this.description = this.item.description;
  }

  addToCart(): void {

  }

  addToWishList(): void {
  }
}
