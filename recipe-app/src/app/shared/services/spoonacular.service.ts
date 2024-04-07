// //Interacts with the Spoonacular API to fetch recipe data. 
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SpoonacularService {

//   private apiKey = '343e72948cf947dc85870ebbb3c8ceac';
//   private apiUrl = 'https://api.spoonacular.com/recipes';

//   constructor(private http: HttpClient) { }

//   getPopularRecipes(): Observable<any> {
//     const url = `${this.apiUrl}/complexSearch?apiKey=${this.apiKey}&number=16&sort=popularity`;
//     return this.http.get(url);
//   }
// }