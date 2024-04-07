<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    // Define the table associated with the model
    protected $table = 'recipes';

    // Define the attributes that are mass assignable
    protected $fillable = [
        'title', 'description', 'ingredients', 'instructions', 'image_url', // Add more fields as needed
    ];

    // Add any custom methods or relationships here
}
