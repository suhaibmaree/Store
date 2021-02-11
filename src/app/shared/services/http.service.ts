import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AppSharedConst} from '../app-shared-const';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  post(path: string, object: any): any{
    const token = AppSharedConst.AUTH + localStorage.getItem(AppSharedConst.TOKEN);
    const fullPath = environment.firebase.databaseURL + path + token;
    return this.httpClient.post<any>(fullPath, object);
  }

  get(path: string): any{
    const token = AppSharedConst.AUTH + localStorage.getItem(AppSharedConst.TOKEN);
    const fullPath = environment.firebase.databaseURL + path + token;
    return this.httpClient.get<any>(fullPath);
  }
}
