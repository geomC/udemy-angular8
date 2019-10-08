import {Component, EventEmitter, Output} from '@angular/core';

export enum NavCat {
  RECIPES = 'RECIPES',
  SHOPPING_LIST = 'SHOPPING_LIST'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output()
  navigate = new EventEmitter<NavCat>();

  useRecipes() {
    this.navigate.emit(NavCat.RECIPES);
  }

  useShoppingList() {
    this.navigate.emit(NavCat.SHOPPING_LIST);

  }
}
