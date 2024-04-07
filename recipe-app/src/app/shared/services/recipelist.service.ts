import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipelistService {
  constructor(private http: HttpClient) { }

  createRecipeList(listData: any): Observable<any> {
    // Make HTTP request to the backend API to create a new recipe list
    return this.http.post<any>('api/recipe-lists', listData);
  }

  getRecipeLists(userId: string): Observable<any> {
    // Make HTTP request to the backend API to retrieve user's recipe lists
    return this.http.get<any>(`api/users/${userId}/recipe-lists`);
  }

  updateRecipeList(listId: string, listData: any): Observable<any> {
    // Make HTTP request to the backend API to update an existing recipe list
    return this.http.put<any>(`api/recipe-lists/${listId}`, listData);
  }

  deleteRecipeList(listId: string): Observable<any> {
    // Make HTTP request to the backend API to delete an existing recipe list
    return this.http.delete<any>(`api/recipe-lists/${listId}`);
  }
}
