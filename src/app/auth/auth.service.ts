import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Buyer} from '../model/buyer';
import {BuyerService} from '../services/buyer.service';
import {SellerService} from '../services/seller.service';
import {User} from '../model/user';

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
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));

        this.afAuth.idToken.subscribe(async value => this.token = value);
        localStorage.setItem('token', JSON.stringify(this.token));

        JSON.parse(localStorage.getItem('token'));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        localStorage.setItem('token', null);

        JSON.parse(localStorage.getItem('user'));
        JSON.parse(localStorage.getItem('token'));
      }
    });
  }

  // Sign in with email/password
  signIn(email, password): any {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        this.ngZone.run(() => {
          this.router.navigate(['/']);
          this.SetUserData(result.user);
          this.setToken();
        });
        // this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  signUp(email, password, firstName: any, lastName: any, address: any, type: any): any {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // this.SetUserData(result.user);
        const id = this.afs.createId();
        switch (type) {
          case 'Buyer': {
            this.buyerService.storeBuyer(new Buyer(id, firstName, lastName, type, [], []));
            break;
          }
          case 'Seller': {
            // @ts-ignore
            this.sellerService.storeSeller(new Seller(id, firstName, lastName, type, []));
            break;
          }
        }
        this.ngZone.run(() => {
          this.router.navigate(['/']);
          this.SetUserData(result.user);
          this.setToken();
        });
        console.log(result);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign out
  SignOut(): any {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null);
  }

  getToken(): string {
    const token = JSON.parse(localStorage.getItem('token'));
    return token;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  signOut(): any {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/signin']);
      this.token = '';
    });
  }


  /* Setting up user data when sign in with username/password,
 sign up with username/password and sign in with social auth
 provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user): any {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      userType: user.userType,
      userId: user.userId,
      address: user.address
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  setToken(): any {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc('token');
    this.afAuth.idToken.subscribe(async value => this.token = value);
    return userRef.set(this.token, {
      merge: true
    });
  }
}
