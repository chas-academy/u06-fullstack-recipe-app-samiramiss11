import { Routes } from '@angular/router';

// import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninSignupComponent } from './pages/signin-signup/signin-signup.component';
// import { RecipesearchComponent } from './pages/recipesearch/recipesearch.component';
import { RecipedetailComponent } from './pages/recipedetail/recipedetail.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AuthGuard } from './guards/auth.guard';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipefilterComponent } from './pages/recipefilter/recipefilter.component';
import { SaverecipeComponent } from './pages/saverecipe/saverecipe.component';
import { RecipesearchComponent } from './pages/recipesearch/recipesearch.component';
// import { LayoutComponent } from './pages/layout/layout.component';


export const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signin-signup', component: SigninSignupComponent },
  { path: 'recipedetail/:id', component: RecipedetailComponent },
  { path: 'recipedetail', component: RecipedetailComponent },
  { path: 'recipes', component: RecipesComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'Recipefilter', component: RecipefilterComponent},
  { path: 'Saverecipe', component: SaverecipeComponent},
  { path: 'recipesearch', component: RecipesearchComponent},
  { path: 'userprofile', component: UserprofileComponent, canActivate: [AuthGuard] },
  // { path: 'layout', component: LayoutComponent }
  // i will Add more routes here as i needed
];
