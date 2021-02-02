import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Buyer} from '../model/buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http: HttpClient) { }

  storeBuyers(buyers: Buyer[]): void{
     this.http.put<any>(environment.firebase.databaseURL + '/data/buyers.json', buyers).
    subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
