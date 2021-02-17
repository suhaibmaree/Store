import {Injectable} from '@angular/core';
import {Item} from '../model/item';
import 'rxjs';
import {AppSharedConst} from '../app-shared-const';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private path = AppSharedConst.ITEMS_DB_PATH;
  itemsRef: AngularFireList<Item> = null;

  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list(this.path);
  }

  getAll(): AngularFireList<Item> {
    return this.itemsRef;
  }

  create(item: Item): any {
    return this.itemsRef.push(item);
  }

  update(key: string, value: any): Promise<void> {
    return this.itemsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.itemsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.itemsRef.remove();
  }
}
