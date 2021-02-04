import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Seller} from '../model/seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  storeSellers(sellers: Seller[]): void{
     this.http.put<any>(environment.firebase.databaseURL + '/data/sellers.json', sellers).
    subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  getSellers(): void{
    this.http.get(environment.firebase.databaseURL + '/data/sellers.json')
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }

}
