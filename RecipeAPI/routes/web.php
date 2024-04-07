<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\RecipeController;

// Route::middleware(['auth'])->group(function () {
//     // Route to show the form for creating a new recipe
//     Route::get('/recipes/create', [RecipeController::class, 'create'])->name('recipes.create');

//     // Route to store a newly created recipe in the database
//     Route::post('/recipes', [RecipeController::class, 'store'])->name('recipes.store');

//     // Route to show the details of a specific recipe
//     Route::get('/recipes/{recipe}', [RecipeController::class, 'show'])->name('recipes.show');

//     // Route to show the form for editing a recipe
//     Route::get('/recipes/{recipe}/edit', [RecipeController::class, 'edit'])->name('recipes.edit');

//     // Route to update the specified recipe in the database
//     Route::put('/recipes/{recipe}', [RecipeController::class, 'update'])->name('recipes.update');

//     // Route to delete a recipe from the database
//     Route::delete('/recipes/{recipe}', [RecipeController::class, 'destroy'])->name('recipes.destroy');
// });

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Inga web-routes behövs i det här projektet.
|
*/




Route::get('/', function () {
    return view('welcome');
});
