import {Injectable} from '@angular/core';
import {Buyer} from '../model/buyer';
import {HttpService} from './http.service';


@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  private path = '/data/buyers.json?auth=';

  constructor( private http: HttpService) {
  }

  storeBuyer(buyer: Buyer): void {
    this.http.putHttp(this.path, buyer);
  }

  getBuyers(): any {
    return this.http.getHttp(this.path);
  }
}
