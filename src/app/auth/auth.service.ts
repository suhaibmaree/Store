import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Buyer} from '../model/buyer';
import {BuyerService} from '../services/buyer.service';
import {SellerService} from '../services/seller.service';
import {Seller} from '../model/seller';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  private token = '';

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public buyerService: BuyerService,
    public sellerService: SellerService
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.idToken.subscribe(value => {
      if (value) {
        this.token = value;
        localStorage.setItem('token', JSON.stringify(this.token));
        JSON.parse(localStorage.getItem('token'));
      } else {
        localStorage.setItem('token', null);
        JSON.parse(localStorage.getItem('token'));
      }
    });
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Sign in with email/password
  signIn(email, password): any {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        // this.SetUserData(result.user);
        this.setToken('', '', '', '', false);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  signUp(email, password, firstName: any, lastName: any, address: any, type: any): any {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // this.SetUserData(result.user);
        this.setToken(firstName, lastName, address, type, true);
        console.log(result);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return (token !== null);
  }

  getToken(): string {
    const token = JSON.parse(localStorage.getItem('token'));
    return token;
  }

  setToken(firstName: any, lastName: any, address: any, type: any, addUser: boolean): any {
    this.afAuth.idToken.subscribe(value => {
      this.token = value;
      localStorage.setItem('token', value);
      if (addUser){
        this.addUser(firstName, lastName, address, type);
      }
      this.router.navigate(['/home']);
    });
  }

  private addUser(firstName: any, lastName: any, address: any, type: any): any {
    const id = this.afs.createId();
    switch (type) {
      case 'Buyer': {
        this.buyerService.storeBuyer(new Buyer(id, firstName, lastName, type, address, [], []));
        break;
      }
      case 'Seller': {
        this.sellerService.storeSeller(new Seller(id, firstName, lastName, address, type, []));
        break;
      }
    }
  }

  signOut(): any {
    this.router.navigate(['/']);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.token = '';
    return this.afAuth.signOut();
  }
}
