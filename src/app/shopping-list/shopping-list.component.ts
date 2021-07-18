import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from './shoping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients:Ingredient[] ;
  private igChangeSub:Subscription

  constructor(private slService:ShopingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub =  this.slService.ingredientsChanged.subscribe(
       (ingredients:Ingredient[]) =>{
        this.ingredients = this.ingredients;

      }
    );
  }
  ngOnDestroy(){
    this.igChangeSub.unsubscribe();

  }

}