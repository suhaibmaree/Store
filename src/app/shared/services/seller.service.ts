import {Injectable} from '@angular/core';
import {Seller} from '../model/seller';
import {HttpService} from './http.service';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Buyer} from '../model/buyer';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private path = '/data/users/sellers';
  sellersRef: AngularFireList<Seller> = null;

  constructor( private http: HttpService, private db: AngularFireDatabase) {
    this.sellersRef = db.list(this.path);
  }

  storeSeller(seller: Seller): void {
    this.http.post(this.path + '.json', seller)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
  }

  getSellers(): any {
    return this.http.get(this.path + '.json')
      .subscribe(
        (data) => {
          console.log(data);
          return data;
        },
        (error) => console.log(error)
      );
  }

  getAll(): any {
    return this.sellersRef;
  }

  create(seller: Seller): any {
    return this.sellersRef.push(seller);
  }

  update(key: string, value: any): Promise<void> {
    return this.sellersRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.sellersRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.sellersRef.remove();
  }
}
