import {Injectable} from '@angular/core';
import {Seller} from '../model/seller';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private path = '/data/sellers.json';

  constructor( private http: HttpService) {
  }

  storeSeller(seller: Seller): void {
    this.http.putHttp(this.path, seller)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
  }

  getSellers(): any {
    return this.http.getHttp(this.path)
      .subscribe(
        (data) => {
          console.log(data);
          return data;
        },
        (error) => console.log(error)
      );
  }
}
