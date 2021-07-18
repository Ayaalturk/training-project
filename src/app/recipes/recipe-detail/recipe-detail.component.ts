import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService:RecipeService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
}
onDEletRecipe(){
  this.recipeService.deleteRecipe(this.id);
  this.router.navigate(['/recipes']);

}
}