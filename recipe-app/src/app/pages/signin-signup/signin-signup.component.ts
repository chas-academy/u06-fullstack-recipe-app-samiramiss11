

/*import { Component } from '@angular/core';
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
}*/

// src/app/pages/signin-signup/signin-signup.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-signin-signup',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './signin-signup.component.html',
    styleUrls: ['./signin-signup.component.css'],
})
export class SigninSignupComponent {
    registerdetails = { name: '', email: '', password: '' };
    logindetails = { email: '', password: '' };
 // router: any;

    constructor(private authService: AuthService, private router: Router) { }

    onSubmitRegister() {
        this.authService.register(this.registerdetails).subscribe(response => {
            console.log('Registered successfully', response);
        }, error => {
            console.error('Registration error', error);
        });
    }

   /* onSubmitLogin() {
      console.log("test")
       this.authService.login(this.logindetails).subscribe(response => {
            console.log('Logged in successfully', response);
            this.router.navigate(['/userprofile']);  // Navigate to user profile on successful login
        }, error => {
            console.error('Login error', error);
        });
      
    } */
        onSubmitLogin() {
          this.authService.login(this.logindetails).subscribe(user => {
            console.log('Logged in successfully', user);
            this.router.navigate(['/userprofile'], { state: { user: user } });
          }, (error: any) => {
            console.error('Login error', error);
          });
        }

    /*onSubmitLogout() {
        this.authService.logout().subscribe(response => {
            console.log('Logged out successfully', response);
            this.router.navigate(['/login']);
        }, error => {
            console.error('Logout error', error);
        });
    }


    onSubmit() {
      this.onSubmitLogout();
    }
  */
    isLoggedIn() {
      return this.authService.isLoggedIn();
    }
  }