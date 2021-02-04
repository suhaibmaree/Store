import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '../model/item';
import {environment} from '../../environments/environment';
import 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  storeItems(items: Item[]): void {
    this.http.put<any>(environment.firebase.databaseURL + '/data/items.json', items).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  getItems(): any {
    // return this.http.get<Item[]>(environment.firebase.databaseURL + '/data/items.json', {observe: 'events', responseType: 'json'})
    return this.http.get<Item[]>(environment.firebase.databaseURL + '/data/items.json')
      .pipe(map(
        (items) => {
          // if i need to modify the response before subscribe to it
          return items;
        }
      ));
  }
}
