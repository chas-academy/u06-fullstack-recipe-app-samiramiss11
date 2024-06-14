<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RecipeController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|


// Login user
Route::post('login', [AuthController::class, 'login']);
// Register user
Route::post('register', [AuthController::class, 'register']);

// If logged in...
Route::group(['middleware' => 'auth:sanctum'], function() {
    // Logout user
    Route::post('logout', [AuthController::class, 'logout']);
    // Get specific user details
    Route::get('getuser/{id}', [AuthController::class, 'getUser']);
    
    // TODO: CRUD for recipe lists
});*/

// Login user
Route::post('login', [AuthController::class, 'login']);
// Register user
Route::post('register', [AuthController::class, 'register']);

// If logged in...
Route::middleware(['auth:sanctum'])->group(function () {
    // Logout user
    Route::post('logout', [AuthController::class, 'logout']);
    // for userprofilr 
    Route::get('userprofile', [AuthController::class, 'getUserProfile']); // Ensure this route is defined
    // Get specific user details
    Route::get('getuser/{id}', [AuthController::class, 'getUser']);

    // Routes for user profile functionality
    Route::get('user-info', [Controller::class, 'getUserInfo']);
    Route::post('update-password', [Controller::class, 'updatePassword']);



    // TODO: CRUD for recipe lists
    
    // Routes for managing recipes
    Route::get('recipes', [RecipeController::class, 'index']); // Get all recipes
    Route::post('recipes', [RecipeController::class, 'store']); // Create a new recipe
    Route::get('recipes/{id}', [RecipeController::class, 'show']); // Get a specific recipe
    Route::put('recipes/{id}', [RecipeController::class, 'update']); // Update a recipe
    Route::delete('recipes/{id}', [RecipeController::class, 'destroy']); // Delete a recipe

  
});
