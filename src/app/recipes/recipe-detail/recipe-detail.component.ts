import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  private recipeId: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      ({id}) => {
        this.recipe = this.recipeService.getRecipe(+id);
        this.recipeId = +id;
      }
    );
  }

  addToShoppingList() {
    this.recipe.ingredients.map(
      this.shoppingListService.addIngredient
        .bind(this.shoppingListService) // make sure service method has the correct scope
    );
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['..']);
  }
}
