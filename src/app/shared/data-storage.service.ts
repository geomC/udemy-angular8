import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  FIREBASE_ENDPOINT_URL = 'https://ng-course-recipebook-adb30.firebaseio.com/';

  constructor(
    private http: HttpClientModule
  ) {
  }

  saveRecipe(recipe: Recipe) {
    // TODO implement
  }
}
