import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  searchRecipes(): void {
    // Navigate to the recipes search page with the search query as a parameter
    this.router.navigate(['/pages/recipesearch'], { queryParams: { q: this.searchQuery } });
  }
}
