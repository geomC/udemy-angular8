import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

export function shoppingListReducer(
  state = initialState,
  {type, payload}: ShoppingListActions.ShoppingListActions
) {
  switch (type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, payload]
      };
      break;
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...(payload as Ingredient[])]
      };
      break;
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[(payload as { index: number, ingredient: Ingredient }).index];
      // workaround. not sure why but I need to deal with tsc complaining about props not found on the union type.
      // no time to look into this now.
      const pl = payload as { index: number, ingredient: Ingredient };
      const updatedIngredient = {
        ...ingredient,
        ...pl.ingredient
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[pl.index] = updatedIngredient;
      return {
        ...state,
        ingredients: updatedIngredients
      };
      break;
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ing, index) => index !== (payload as { index: number, ingredient: Ingredient }).index)
      };
      break;
    default:
      return state;
  }
}
