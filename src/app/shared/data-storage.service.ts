import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  FIREBASE_ENDPOINT_URL = 'https://ng-course-recipebook-adb30.firebaseio.com/' +
    'recipes.json'; // we can dynamically set up new endpoints with firebase. this has not been defined in the backend

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) {
  }

  storeRecipes() {
      const recipes = this.recipeService.getRecipes();
      this.http.put( // firebase treats a PUT request so that all data is overridden
        this.FIREBASE_ENDPOINT_URL,
        recipes
      ).subscribe( // otherwise the request is not fired. subscription is usually done in components to update the UI
        res => console.log(res)
      );
  }
}
