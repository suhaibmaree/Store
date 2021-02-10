import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {
  }

  putHttp(path: string, object: any): any{
    const token = '?auth=' + localStorage.getItem('token');
    const fullPath = environment.firebase.databaseURL + path + token;
    return this.httpClient.post<any>(fullPath, object);
  }

  getHttp(path: string): any{
    const token = '?auth=' + localStorage.getItem('token');
    const fullPath = environment.firebase.databaseURL + path + token;
    return this.httpClient.get<any>(fullPath);
  }
}
