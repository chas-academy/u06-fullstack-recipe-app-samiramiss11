/*import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../interfaces/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { SaverecipeComponent } from '../saverecipe/saverecipe.component';
import { ActivatedRoute } from '@angular/router';
import { Router, Navigation  } from '@angular/router';

/**



@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [FormsModule, CommonModule, MatTabsModule,SaverecipeComponent],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent   {
  // loggedInUser: any;

  

 
   // constructor(private router: Router) {}

  // ngOnInit(): void {
  //   const navigation = this.router.getCurrentNavigation();
  //   if (navigation && navigation.extras.state) {
  //     this.loggedInUser = navigation.extras.state['user'];
  //   }
  // }
}

//   user: User;
//   loggedIn: boolean = false;

//   constructor(private auth: AuthService) {
//     this.user = {
//       id: -1,
//       name: "",
//       email: ""
//     };
    
//   }

//   logout(): void {
//     this.auth.logout(); // Call logout method from AuthService
//     this.loggedIn = false;
//   } */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../interfaces/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SaverecipeComponent } from '../saverecipe/saverecipe.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [FormsModule, CommonModule, MatTabsModule, SaverecipeComponent],
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  currentUser: User = { id: 0, name: '', email: '', created_at: '' };  
 // router: any;

constructor(private authService: AuthService, private router: Router) {
  const name = localStorage.getItem('name') || '';
  const email = localStorage.getItem('email') || '';
  this.currentUser = { id: 0, name, email, created_at: '' };
}
 
  // Add a method to handle logout
  /*logout(): void {
    this.authService.logout().subscribe(() => {
      console.log('Logged out successfully');
    }, (error: any) => {  // Explicitly type the error parameter
      console.error('Error during logout', error);
    });
  }
}

logout(): void {
  this.authService.logout().subscribe(() => {
    console.log('Logged out successfully');
    this.router.navigate(['/login']);  // Redirect to home page
  }, (error: any) => {
    console.error('Error during logout', error);
  });
}*/
ngOnInit(): void {/*
  this.authService.getUserProfile().subscribe((user: User) => {
    this.currentUser = user;
  }, (error: any) => {
    console.error('Error fetching user profile', error);
    if (error.status === 401) {
      this.router.navigate(['/login']);
    }
  });*/    this.authService.getUserProfile().subscribe((user: User) => {
      this.currentUser = user;
    }, (error: any) => {
      console.error('Error fetching user profile', error);
    });
}

logout(): void {
  this.authService.logout();
  this.router.navigate(['/signin-signup']);
}
}
