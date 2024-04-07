import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopularRecipesService } from '../../shared/services/popular-recipes.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RecipedetailService } from '../../shared/services/recipedetail.service';

@Component({
  selector: 'app-recipedetail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './recipedetail.component.html',
  styleUrl: './recipedetail.component.css'
})
export class RecipedetailComponent implements OnInit {
  recipe: any;
  selectedRecipe: any;

  constructor(private recipedetailService: RecipedetailService) { }

  ngOnInit(): void {
    this.selectedRecipe = this.recipedetailService.selectedRecipe;
    console.log('Selected Recipe:', this.selectedRecipe);
  }

  saveRecipe(recipe: any): void {
    console.log('Recipe saved:', recipe.title);
    // Implement save functionality here
  }
}