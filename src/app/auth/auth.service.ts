import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  private token: string;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public router: Router,
  ) {}

  // Sign in with email/password
  signIn(email, password): any {
   firebase.auth().signInWithEmailAndPassword(email, password)
     .then(
       (response) => {
         firebase.auth().currentUser.getIdToken()
           .then((token: string) => this.token = token);
         console.log(response);
         this.router.navigate(['/']);
       }
     )
     .catch((error) => {
       console.log(error);
       window.alert(error.message);
    });
  }

  // Sign up with email/password
  signUp(email, password): any {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response) => {
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => this.token = token);
          console.log(response);
          this.router.navigate(['/']);
        }
      )
      .catch((error) => {
        console.log(error);
        window.alert(error.message);
      });
  }

  // Sign out
  SignOut(): any {
   firebase.auth().signOut();
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  getToken(): any{
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => this.token = token);
    return this.token;
  }

}
