import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    const token = localStorage.getItem('token');
    if (token !== null){
      this.router.navigate(['/home']);
    }

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSignIn(): void {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.authService.signIn(email, password);
  }

  checkPassword(form: FormGroup): any {
    if (form.get('password') != null){
      if (form.get('password').value.length >= 6) {
        return {passwordValid: true};
      }
    }
    return null;
  }
}
