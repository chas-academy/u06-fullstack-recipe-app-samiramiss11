

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { Logindetails } from '../../interfaces/logindetails';
import { Registerdetails } from '../../interfaces/registerdetails';

@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [CommonModule,AsyncPipe,HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.css'
})
export class SigninSignupComponent {
  logindetails: Logindetails = { email: '', password: '' };
  registerdetails: Registerdetails = { name: '', email: '', password: '' };
  loggedIn$: Observable<boolean>;

  constructor(private auth: AuthService) { 
    this.loggedIn$ = this.auth.loggedIn$;
  }

  login() {
    this.auth.loginUser(this.logindetails);
  }

  logout() {
    this.auth.logOut();
  }

  onSubmitLogin() {
    console.log(this.logindetails);
    this.auth.loginUser(this.logindetails);
  }

  onSubmitRegister() {
    console.log(this.registerdetails);
    this.auth.register(this.registerdetails);
  }

  isLoggedIn(): boolean {
    // Return true if the user is logged in, false otherwise
    // You can implement this based on your AuthService logic
    return this.auth.getLoginStatus();
  }

  onSubmit() {
    // Add your logout logic here
    console.log("Logging out...");
    this.logout();
  }
}