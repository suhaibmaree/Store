import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
