import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe.service';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from '../userprofile/userprofile.component';

@Component({
  selector: 'app-saverecipe',
  standalone: true,
  imports: [CommonModule,UserprofileComponent ],
  templateUrl: './saverecipe.component.html',
  styleUrl: './saverecipe.component.css'
})
export class SaverecipeComponent implements OnInit {
  savedRecipes: any[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // Fetch saved recipes from the service when the component initializes
    this.getSavedRecipes();
  }

  getSavedRecipes(): void {
    // Assuming your service has a method to fetch saved recipes
    this.recipeService.getSavedRecipes()
      .subscribe((data: any) => {
        this.savedRecipes = data; // Assuming data is an array of saved recipes
      },
      (error) => {
        console.error('Error fetching saved recipes:', error);
      }
    );
}

  deleteRecipe(recipeId: string): void {
    // Call the service method to delete the recipe
    this.recipeService.deleteSavedRecipe(recipeId)
      .subscribe(() => {
        // If successful, remove the deleted recipe from the savedRecipes array
        this.savedRecipes = this.savedRecipes.filter(recipe => recipe.id !== recipeId);
      });
  }
}