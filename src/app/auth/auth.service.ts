import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import firebase from 'firebase';
import {BuyerService} from '../shared/services/buyer.service';
import {SellerService} from '../shared/services/seller.service';
import {Buyer} from '../shared/model/buyer';
import {Seller} from '../shared/model/seller';
import {AppSharedConst} from '../shared/app-shared-const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
    localStorage.setItem(AppSharedConst.EMAIL, email);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => {
              this.token = token;
              localStorage.setItem(AppSharedConst.TOKEN, token);
              this.router.navigate([AppSharedConst.HOME_PATH]);
            });
          console.log(response);
        }
      )
      .catch((error) => {
        window.alert(error.message);
        console.log(error);
        localStorage.removeItem(AppSharedConst.EMAIL);
      });
  }

  // Sign up with email/password
  signUp(email, password, firstName, lastName, address, type): any {
    localStorage.setItem('email', email);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response) => {
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => {
              this.token = token;
              localStorage.setItem(AppSharedConst.TOKEN, token);

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
              this.router.navigate([AppSharedConst.HOME_PATH]);
            });
          console.log(response);
        }
      )
      .catch((error) => {
        console.log(error);
        window.alert(error.message);
        localStorage.removeItem(AppSharedConst.EMAIL);
      });
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    const token = localStorage.getItem(AppSharedConst.TOKEN);
    return token !== null;
  }

  getToken(): string {
    if (this.token != null) {
      firebase.auth().currentUser.getIdToken()
        .then((token: string) => {
          this.token = token;
          localStorage.setItem(AppSharedConst.TOKEN, token);
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
    localStorage.removeItem(AppSharedConst.TOKEN);
    localStorage.removeItem(AppSharedConst.EMAIL);
    localStorage.removeItem(AppSharedConst.USER);
    localStorage.removeItem(AppSharedConst.USER_KEY);
    this.router.navigate([AppSharedConst.SIGN_IN_PATH]);
    this.token = '';
    firebase.auth().signOut();
  }
}
