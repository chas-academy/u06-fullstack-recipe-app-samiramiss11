import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../shared/services/recipe.service';
import { RecipemoreService } from '../../shared/services/recipemore.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, HttpClientModule,FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchQuery: string = '';
  searchResults: any[] = []; 
  errorMessage: string = '';
  selectedRecipe: any= {};

constructor(
    private router: Router,
    private recipeService: RecipeService,
    private recipemoreService: RecipemoreService,
    
    ) {}
 search(): void {
    if (this.searchQuery.trim() !== '') {
      this.recipeService.searchRecipes(this.searchQuery)
        .subscribe(
          (data: any) => {
            console.log('API Response Data:', data); // Log the API response data
            this.searchResults = data.hits;
          },
          (error: HttpErrorResponse) => {
            this.errorMessage = 'An error occurred while fetching recipes. Please try again later.';
            console.error('An error occurred:', error);
          });
    }
  }
     
saveRecipe(recipe: any): void {
  console.log('Recipe saved:', recipe.title);
  // i will Implement save functionality here later, just save uniq id for recipe not all recipe data or make component and write ur logic there and link that where u want have save
}

navigateToRecipesearch(recipe: any): void {
  // Mock instructions
  recipe.recipe.instructions = "1. Preheat the oven to 350°F.\n2. Mix ingredients.\n3. Bake for 25 minutes.";
  this.recipemoreService.selectedRecipe = recipe;
  this.router.navigate(['/recipesearch']);
}

isExpanded: boolean = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
