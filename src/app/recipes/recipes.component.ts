import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  
})
export class RecipesComponent implements OnInit {
  recipes = [];
  selectedRecipe:Recipe;

  constructor(private reciprservice:RecipeService) { }

  ngOnInit(): void {
    this.reciprservice.recipeSelected
    .subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe = recipe;

      }
     

      

    );
  }
  onAddToShoppingList(){}
}
