import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  rating: number;
  price: string;
  description: string;
  title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Item Card';
    this.rating = 3;
    this.price = '5';
    this.description = 'This is a dummy description';
  }

  addToCart(): void {

  }

  addToWishList(): void {
  }
}
