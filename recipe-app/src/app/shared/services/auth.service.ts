import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router'; //?
import { Logindetails } from '../../interfaces/logindetails';
import { User } from '../../interfaces/user';


interface ResultData {
  token: string
}


interface Registerdetails {
  name: "",
    email: "",
    password: ""
  
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false); 
  loggedIn$ = this.loggedIn.asObservable();

  private baseUrl = 'https://u06-fullstack-recipe-app-samiramiss11.onrender.com/api/';

  private httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient, private router: Router) { }

  getLoginStatus(){
    return this.loggedIn.value;
  }
  private updateLoginState(loginState: boolean) {
    this.loggedIn.next(loginState);
  }

  loginUser(logindetails: Logindetails){
    //an HTTP POST request to the specified URL (this.baseUrl + 'login') with the provided loginDetails data as the request body.
    this.http.post<any>(this.baseUrl+'login', logindetails, this.httpOptions).pipe( //Pipi allows to chain RxJS operators to operate on the observable stream returned by the post method.

      catchError(this.handleError)).subscribe(result => {
        console.log(result);
       
        this.updateLoginState(true); //Updates application's state that user is logged in.
       
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer " + result.token);
        this.router.navigate(['/']) //Navigates user to the specified route, which is the root route 
      })
  }

  register(form: any) {
    this.http.post<any>(this.baseUrl + 'register', form, this.httpOptions).pipe(
      catchError(this.handleError)
    ).subscribe(res => {
      console.log(res);
      console.log(res.token);
      this.updateLoginState(true)
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer " + res.token); // + result.token //should this line be here?
      
      this.router.navigate(['/']);
    });
  }

  logOut(){
    this.http.post<any>(this.baseUrl+'logout', {}, this.httpOptions).pipe(
      catchError(this.handleError)).subscribe(result => {
        console.log(result);
        this.updateLoginState(false);
        this.httpOptions.headers = this.httpOptions.headers.delete('Authorization'); //
      })
  }


  getUser2(): Observable<User[]> {
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', "Bearer "); // + token??
    return this.http.get<User[]>(this.baseUrl+'getuser/2', this.httpOptions);
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 404) {
     
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something happened, try again later.'));
  }

}