import {Injectable} from '@angular/core';
import {Seller} from '../model/seller';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private path = '/data/sellers.json?auth=';

  constructor( private httpInterceptorService: HttpService) {
  }

  storeSeller(seller: Seller): void {
    this.httpInterceptorService.putHttp(this.path, seller);
  }

  getSellers(): any {
    return this.httpInterceptorService.getHttp(this.path);
  }
}
