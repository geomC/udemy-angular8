import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.recipe.ingredients.map(
      this.shoppingListService.addIngredient
        .bind(this.shoppingListService) // make sure service method has the correct scope
    );
  }
}
