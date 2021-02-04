import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Buyer} from '../model/buyer';
import firebase from 'firebase';
import {AuthService} from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  storeBuyers(buyers: Buyer[]): void {
    const token = this.authService.getToken();
    this.http.put<any>(environment.firebase.databaseURL + '/data/buyers.json?auth=' + token, buyers).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  getBuyers(): void {
    const token = this.authService.getToken();
    this.http.get(environment.firebase.databaseURL + '/data/buyers.json?auth=' + token)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }
}
