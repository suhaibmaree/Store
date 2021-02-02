import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '../model/item';



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  storeItem(items: Item[]): any{
    return this.http.put<any>('https://store-exalt-default-rtdb.europe-west1.firebasedatabase.app/data/items.json', items);
  }
}
