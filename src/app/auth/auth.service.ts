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
    localStorage.setItem('email', email);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => {
              this.token = token;
              localStorage.setItem('token', token);
              this.router.navigate(['/home']);
            });
          console.log(response);
        }
      )
      .catch((error) => {
        window.alert(error.message);
        console.log(error);
        localStorage.removeItem('email');
      });
  }

  // Sign up with email/password
  signUp(email, password, firstName: any, lastName: any, address: any, type: any): any {
    localStorage.setItem('email', email);
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
                  this.buyerService.storeBuyer(new Buyer(id, firstName, lastName, type, address, email, [], []));
                  break;
                }
                case 'seller': {
                  this.sellerService.storeSeller(new Seller(id, firstName, lastName, type, address, email, []));
                  break;
                }
              }
              this.router.navigate(['/home']);
            });
          console.log(response);
        }
      )
      .catch((error) => {
        console.log(error);
        window.alert(error.message);
        localStorage.removeItem('email');
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
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
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['/signin']);
    this.token = '';
    firebase.auth().signOut();
  }
}
