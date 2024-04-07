import { Component, OnInit } from '@angular/core';
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

 */

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
//   }

