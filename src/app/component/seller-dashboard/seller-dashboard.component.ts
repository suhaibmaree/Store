import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Seller} from '../../shared/model/seller';
import {AppSharedConst} from '../../shared/app-shared-const';
import {Item} from '../../shared/model/item';
import {ItemService} from '../../shared/services/item.service';
import {SellerService} from '../../shared/services/seller.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  displayAddItem: boolean;
  form: FormGroup;
  seller: Seller;
  categories = [
    { label: 'Accessories', value: 'Accessories' },
    { label: 'Fitness', value: 'Fitness' },
    { label: 'Clothing', value: 'Clothing' },
    { label: 'Electronics', value: 'Electronics' },
  ];
  selectedCategory: string;
  price: number;
  itemsInStock: number;
  description: string;
  cover: string;
  title: string;

  constructor(public itemService: ItemService, public sellerService: SellerService, private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null),
      cover: new FormControl(null),
      price: new FormControl(null),
      description: new FormControl(null),
      category: new FormControl(null),
      itemsInStock: new FormControl(null)

    });
    this.price = 0;
    this.itemsInStock = 0;
  }

  addItem(): void {
    this.displayAddItem = false;
    const imagePath = this.form.value.cover;
    const title = this.form.value.title;
    const rate = 3;
    const price = this.form.value.price;
    const description = this.form.value.description;
    const category = this.form.value.category;
    const itemsInStock = this.form.value.itemsInStock;
    const id = this.afs.createId();

    this.seller = JSON.parse(localStorage.getItem(AppSharedConst.USER));
    const sellerId = this.seller.userId;
    const item = new Item(imagePath, title, rate, price, description, id, sellerId, category, itemsInStock);
    this.itemService.create(item);
    this.seller.items.push(id);

    localStorage.removeItem(AppSharedConst.USER);
    localStorage.setItem(AppSharedConst.USER, JSON.stringify(this.seller));
    const key = localStorage.getItem(AppSharedConst.USER_KEY);
    this.sellerService.update(key, this.seller);

    this.title = '';
    this.cover = '';
    this.price = 0;
    this.description = '';
    this.selectedCategory = '';
    this.itemsInStock = 0;
  }

  showSddItem(): void {
    this.displayAddItem = true;
  }
}
