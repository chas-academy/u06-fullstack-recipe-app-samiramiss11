import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiKey = 'fa62decadce58994cdced086f9f1dca4';
  private apiUrl = 'https://api.edamam.com/api/recipes/v2';
  private apiId = '2d309018';
    selectedRecipe: any;

  constructor(private http: HttpClient) {}

  searchRecipes(query: string): Observable<any> {
    const url = `${this.apiUrl}?type=public&q=${query}&app_id=${this.apiId}&app_key=${this.apiKey}&include_description=true`;
    return this.http.get(url);
  }

  saveRecipe(recipe: any): Observable<any> {
    // Implement saving recipe to the backend API here
    return this.http.post<any>('api/save-recipe', recipe);
  }

  getSavedRecipes(): Observable<any> {
    // Implement fetching saved recipes from the backend API
    return this.http.get<any>('api/get-saved-recipes');
  }

  deleteSavedRecipe(recipeId: string): Observable<any> {
    // Implement deleting a saved recipe from the backend API
    return this.http.delete<any>(`api/delete-saved-recipe/${recipeId}`);
  }
}
