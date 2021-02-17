import {Injectable} from '@angular/core';
import {Buyer} from '../model/buyer';
import {HttpService} from './http.service';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AppSharedConst} from '../app-shared-const';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  private path = AppSharedConst.BUYERS_DB_PATH;
  buyersRef: AngularFireList<Buyer> = null;

  constructor(private http: HttpService, private db: AngularFireDatabase) {
    this.buyersRef = db.list(this.path);

  }

  storeBuyer(buyer: Buyer): void {
    this.http.post(this.path + AppSharedConst.JSON, buyer)
      .subscribe(
        (data) => {
          console.log(data);
          return data;
        },
        (error) => console.log(error)
      );
  }

  getBuyers(): any {
    return this.http.get(this.path + AppSharedConst.JSON)
      .subscribe(
        (data) => {
          console.log(data);
          return data;
        },
        (error) => console.log(error)
      );
  }

  getAll(): AngularFireList<Buyer> {
    return this.buyersRef;
  }

  create(buyer: Buyer): any {
    return this.buyersRef.push(buyer);
  }

  update(key: string, value: any): Promise<void> {
    return this.buyersRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.buyersRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.buyersRef.remove();
  }

}
