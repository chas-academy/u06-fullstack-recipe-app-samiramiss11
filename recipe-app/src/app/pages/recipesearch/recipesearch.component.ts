import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from '../../shared/services/recipe.service';
import { RecipemoreService } from '../../shared/services/recipemore.service';

@Component({
  selector: 'app-recipesearch',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './recipesearch.component.html',
  styleUrl: './recipesearch.component.css'
})
export class RecipesearchComponent implements OnInit {
  recipe: any;
  selectedRecipe: any;

  constructor(
    private recipemoreService: RecipemoreService,
    /*private recipeService: RecipeService,*/
    ) { }

  ngOnInit(): void {
    this.selectedRecipe = this.recipemoreService.selectedRecipe;
    console.log('Selected Recipe:', this.selectedRecipe);
  }
  saveRecipe(recipe: any): void {
    console.log('Recipe saved:', recipe.recipe.label);
    // Implement save functionality here
  }
}