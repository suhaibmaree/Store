import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private token: string;
  constructor(private httpClient: HttpClient, public afAuth: AngularFireAuth) {
  }

  putHttp(path: string, object: any): any{
    const fullPath = environment.firebase.databaseURL + path + this.token;
    return this.httpClient.put<any>(fullPath, object);
  }

  getHttp(path: string): any{
    const fullPath = environment.firebase.databaseURL + path + this.token;
    return this.httpClient.get<any>(fullPath);
  }
}
