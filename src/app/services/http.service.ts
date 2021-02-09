import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient, public afAuth: AngularFireAuth) {
  }

  putHttp(path: string, object: any): any{
    const token = localStorage.getItem('token');
    const fullPath = environment.firebase.databaseURL + path + token;
    return this.httpClient.post<any>(fullPath, object);
  }

  getHttp(path: string): any{
    const token = localStorage.getItem('token');
    const fullPath = environment.firebase.databaseURL + path + token;
    return this.httpClient.get<any>(fullPath);
  }
}
