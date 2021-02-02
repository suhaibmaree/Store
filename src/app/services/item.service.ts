import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '../model/item';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
  }

  storeItems(items: Item[]): void{
     this.http.put<any>(environment.firebase.databaseURL + '/data/items.json', items).
     subscribe(
       (data) => console.log(data),
       (error) => console.log(error)
     );
  }
}
