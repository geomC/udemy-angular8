import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

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

export class Updateingredient implements Action {
  readonly type = UPDATE_INGREDIENT;

  constructor(
    public payload: { index: number, ingredient: Ingredient }
  ) {
  }
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;

  constructor(
    public payload: number
  ) {
  }
}

// export a union type --> a type that combines the props of the stated types
export type ShoppingListActions = AddIngredient |
  AddIngredients |
  Updateingredient |
  DeleteIngredient;
