import {Component} from '@angular/core';
import {NavCat} from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipesShown = true;
  shoppingListShown = true;

  onNavigate($event: NavCat) {
    this.recipesShown = $event === NavCat.RECIPES;
    this.shoppingListShown = $event === NavCat.SHOPPING_LIST;
  }
}
