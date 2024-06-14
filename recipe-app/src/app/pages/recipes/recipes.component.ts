import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { PopularRecipesService } from '../../shared/services/popular-recipes.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RecipedetailService } from '../../shared/services/recipedetail.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  popularRecipes: any[] = [];
  filteredRecipes: any[] = [];
  isOpen: boolean = false;
  areAllChecked: boolean = false;

  // Combined options for meal types and allergens
  filterOptions = [
    { label: 'Gluten', value: 'Gluten', checked: false, type: 'allergen' },
    { label: 'Dairy', value: 'Dairy', checked: false, type: 'allergen' },
    { label: 'Nuts', value: 'Nuts', checked: false, type: 'allergen' }
  ];

  constructor(
    private router: Router,
    private popularRecipesService: PopularRecipesService,
    private recipedetailService: RecipedetailService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.fetchPopularRecipes();
  }

  fetchPopularRecipes(): void {
    this.popularRecipesService.getPopularRecipes().subscribe({
      next: (data: any) => {
        console.log('API Response:', data.results); // Log the API response to inspect its structure
        this.popularRecipes = data.results;
        this.filteredRecipes = data.results;
      },
      error: (error: any) => {
        console.error('Error fetching popular recipes:', error);
      }
    });
  }

  fetchPopularRecipesWithIntolerances(intolerances: string[]): void {
    this.popularRecipesService.getPopularRecipesWithIntolerances(intolerances).subscribe({
      next: (data: any) => {
        console.log('API Response with Intolerances:', data.results); // Log the API response to inspect its structure
        this.popularRecipes = data.results;
        this.filteredRecipes = data.results;
      },
      error: (error: any) => {
        console.error('Error fetching popular recipes with intolerances:', error);
      }
    });
  }

  saveRecipe(recipe: any): void {
    console.log('Recipe saved:', recipe.title);
    // Implement save functionality here later
  }

  navigateToRecipedetail(recipe: any): void {
    this.recipedetailService.selectedRecipe = recipe;
    this.router.navigate(['/recipedetail']);
  }

  onCheckBox() {
    this.updateStatus();
  }

  updateStatus() {
    // Separate selected meal types and allergens
    const selectedMealTypes = this.filterOptions.filter(option => option.checked && option.type === 'mealType').map(option => option.value.toLowerCase());
    const selectedAllergens = this.filterOptions.filter(option => option.checked && option.type === 'allergen').map(option => option.value.toLowerCase());

    // Fetch recipes with intolerances if any allergen is selected
    if (selectedAllergens.length > 0) {
      this.fetchPopularRecipesWithIntolerances(selectedAllergens);
    } else {
      // Filter recipes based on selected options
      this.filteredRecipes = this.popularRecipes.filter(recipe => {
        const recipeMealTypes = recipe.dishTypes?.map((type: string) => type.toLowerCase()) || [];
        const matchesMealType = selectedMealTypes.length ? selectedMealTypes.some(type => recipeMealTypes.includes(type)) : true;
        return matchesMealType;
      });

      console.log('Filtered Recipes:', this.filteredRecipes);
    }
  }



  /*toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, 'on');
      document.addEventListener('click', this.documentClickListener);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'on');
      document.removeEventListener('click', this.documentClickListener);
    }
  }

  documentClickListener = (event: MouseEvent) => {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.toggleOpen();
    }
  }*/
}

