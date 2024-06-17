// src/app/shared/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError  } from 'rxjs/operators';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'https://u06-fullstack-recipe-app-samiramiss11.onrender.com';
    private httpOptions={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
  

    constructor(private http: HttpClient, private router: Router) { 
      const token = localStorage.getItem('authToken');
      if (token) {
          this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'Bearer ' + token);
      }
    }

    register(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, data);
    }

    login(data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, data).pipe(
            map((response: any) => {
                localStorage.setItem('authToken', response.token);
                localStorage.setItem('email', response.user.email)
                localStorage.setItem('name', response.user.name)
                this.httpOptions.headers= this.httpOptions.headers.set('Authorization', "Bearer "+ response.token)
                return response;


              }),
              catchError(this.handleError)
          );
      }
  
logout(): void {
  localStorage.removeItem('authToken');
  localStorage.removeItem('email');
  localStorage.removeItem('name');
  this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
  this.router.navigate(['/signin-signup']);
}

    isLoggedIn(): boolean {
        return !!localStorage.getItem('authToken');
    }

    getUserProfile(): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/userprofile`, this.httpOptions ).pipe(
          catchError(this.handleError)
        );
    }
    private handleError(error: any) {
      console.error('An error occurred:', error);
      return throwError(() => new Error('Something went wrong, please try again later.'));
  }

}
   
