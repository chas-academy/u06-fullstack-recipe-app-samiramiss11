<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;

class RecipeController extends Controller
{
    // Method to fetch all recipes
    public function index()
    {
        $recipes = Recipe::all();
        return response()->json($recipes);
    }

    // Method to fetch a single recipe by ID
    public function show($id)
    {
        $recipe = Recipe::find($id);
        return response()->json($recipe);
    }

    // Method to create a new recipe
    public function store(Request $request)
    {
        $recipe = Recipe::create($request->all());
        return response()->json($recipe, 201);
    }

    // Method to update an existing recipe
    public function update(Request $request, $id)
    {
        $recipe = Recipe::findOrFail($id);
        $recipe->update($request->all());
        return response()->json($recipe, 200);
    }

    // Method to delete a recipe
    public function destroy($id)
    {
        Recipe::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
