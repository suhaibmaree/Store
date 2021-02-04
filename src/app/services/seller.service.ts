import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Seller} from '../model/seller';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  storeSellers(sellers: Seller[]): void {
    const token = this.authService.getToken();
    this.http.put<any>(environment.firebase.databaseURL + '/data/sellers.json?auth=' + token, sellers).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  getSellers(): void {
    const token = this.authService.getToken();
    this.http.get(environment.firebase.databaseURL + '/data/sellers.json?auth=' + token)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }

}
