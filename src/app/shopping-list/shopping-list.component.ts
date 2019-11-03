import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ // an oberservable yielding data ..
    ingredients: Ingredient[] // .. in  the format of the data in our store
  }>;

  constructor(
    private slService: ShoppingListService,
    private store: Store<{ // injected store as generic type.
      // maps the root state prop we defined in appModule to what that reducer manages (a list of ingredients)
      shoppingList: { ingredients: Ingredient[] }
    }>
  ) {
  }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

}
