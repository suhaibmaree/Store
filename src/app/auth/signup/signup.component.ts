import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AppSharedConst} from '../../shared/app-shared-const';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {

  }

  onSignup(form: NgForm): void {
    const firstName = form.value.first_name;
    const lastName = form.value.last_name;
    const address = form.value.address;
    const type = form.value.type;
    const email = form.value.email;
    const password = form.value.password;
    console.log(form.value);
    this.authService.signUp(email, password, firstName, lastName, address, type);
  }
}
