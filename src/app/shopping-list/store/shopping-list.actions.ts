import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT; // readonly tells other scripts to never override that value

  constructor(
    public payload: Ingredient // to use a payload property is just a convention. The Action interface only states a type property
  ) {
  }
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;
  constructor(
    public payload: Ingredient[]
  ) {
  }
}

// export a union type --> a type that combines the props of the stated types
export type ShoppingListActions = AddIngredient | AddIngredients;
