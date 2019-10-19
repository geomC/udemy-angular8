import {Component, EventEmitter, OnInit} from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(
    private shoppingListService: ShoppingListService
  ) {
    this.shoppingListService.$ingredientsChanged.subscribe(
      (ingrdnts: Ingredient[]) => this.ingredients = ingrdnts
    );
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
