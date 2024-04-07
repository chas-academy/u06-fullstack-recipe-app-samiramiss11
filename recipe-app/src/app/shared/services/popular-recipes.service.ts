// popular-recipes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopularRecipesService {

  private apiKey = '343e72948cf947dc85870ebbb3c8ceac';
private apiUrl = 'https://api.spoonacular.com/recipes/random?number=16&sort=popularity&apiKey=343e72948cf947dc85870ebbb3c8ceac';

  constructor(private http: HttpClient) { }

  getPopularRecipes(): Observable<any> {
    const url = `${this.apiUrl}&number=16&sort=popularity`;
    return this.http.get(url);
  }
}
