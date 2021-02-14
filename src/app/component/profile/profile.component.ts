import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/model/user';
import {AppSharedConst} from '../../shared/app-shared-const';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem(AppSharedConst.USER));
  }

}
