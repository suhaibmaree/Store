import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '../model/item';
import {environment} from '../../environments/environment';
import 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  storeItems(items: Item[]): void {
    const token = this.authService.getToken();
    this.http.put<any>(environment.firebase.databaseURL + '/data/items.json?auth=' + token, items).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  getItems(): any {
    const token = this.authService.getToken();
    return this.http.get<Item[]>(environment.firebase.databaseURL + '/data/items.json?auth=' + token)
      .pipe(map(
        (items) => {
          // if i need to modify the response before subscribe to it
          return items;
        }
      ));
  }
}
