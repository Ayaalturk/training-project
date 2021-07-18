import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.module';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  recipe:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){

    this.recipeService.recipeSelected.next(this.recipe);
  }
}