import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import firebase from 'firebase';
import {BuyerService} from '../services/buyer.service';
import {SellerService} from '../services/seller.service';
import {Buyer} from '../model/buyer';
import {Seller} from '../model/seller';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  private token = '';

  constructor(
    private afs: AngularFirestore,   // Inject Firestore service
    private router: Router,
    private buyerService: BuyerService,
    private sellerService: SellerService
  ) {

  }

  // Sign in with email/password
  signIn(email, password): any {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => {
              this.token = token;
              localStorage.setItem('token', token);
            });
          console.log(response);
          this.router.navigate(['/home']);
        }
      )
      .catch((error) => {
        console.log(error);
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  signUp(email, password, firstName: any, lastName: any, address: any, type: any): any {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response) => {
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => {
              this.token = token;
              localStorage.setItem('token', token);

              const id = this.afs.createId();
              switch (type) {
                case 'buyer': {
                  this.buyerService.storeBuyer(new Buyer(id, firstName, lastName, type, address, [], []));
                  break;
                }
                case 'seller': {
                  this.sellerService.storeSeller(new Seller(id, firstName, lastName, type, address, []));
                  break;
                }
              }
            });
          console.log(response);
          this.router.navigate(['/home']);
        }
      )
      .catch((error) => {
        console.log(error);
        window.alert(error.message);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = localStorage.getItem('token');
    return user !== null;
  }

  getToken(): string {
    if (this.token != null) {
      firebase.auth().currentUser.getIdToken()
        .then((token: string) => {
          this.token = token;
          localStorage.setItem('token', token);
        });
      return this.token;
    }
    return '';
  }

  isAuthenticated(): boolean {
    return this.token !== '';
  }

  // Sign out
  signOut(): any {
    firebase.auth().signOut();
    this.token = '';
    localStorage.setItem('token', null);
    this.router.navigate(['/signin']);
  }
}
