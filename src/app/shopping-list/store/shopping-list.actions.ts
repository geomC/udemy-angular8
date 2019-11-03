import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT; // readonly tells other scripts to never override that value
  payload: Ingredient; // to use a payload property is just a convention. The Action interface only states a type property
}
