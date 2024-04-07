import { Component, OnInit } from '@angular/core';
import { PopularRecipesService } from '../../shared/services/popular-recipes.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RecipedetailService } from '../../shared/services/recipedetail.service';
import { RecipefilterComponent } from '../recipefilter/recipefilter.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipefilterComponent, CommonModule, HttpClientModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  popularRecipes: any[] = [];

  constructor(
    private router: Router, // Inject Router
    private popularRecipesService: PopularRecipesService,
    private recipedetailService: RecipedetailService,
    
    
  ) { }

  ngOnInit(): void {
    this.popularRecipesService.getPopularRecipes().subscribe({
      next: (data: any) => {
        this.popularRecipes = data.recipes;
      },
      error: (error) => {
        console.error('Error fetching popular recipes:', error);
      }
    });
  }
  saveRecipe(recipe: any): void {
    console.log('Recipe saved:', recipe.title);
    // i will Implement save functionality here later
  }
  navigateToRecipedetail(recipe: any): void {
    this.recipedetailService.selectedRecipe = recipe;
    this.router.navigate(['/recipedetail']);
  }
}