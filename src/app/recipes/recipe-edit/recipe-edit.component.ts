import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      ({id}: Params) => {
        this.id = +id;
        this.editMode = id != null; // null or noUndefined();

        // update form on route enter
        this.initForm();
      }
    );
  }

  clearForm() {

  }

  submitForm() {

  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        recipe.ingredients.forEach(
          ing => {
            const formGroup = new FormGroup({
              'name': new FormControl(ing.name),
              'amount': new FormControl(ing.amount)
            });
            recipeIngredients.push(formGroup);
          });
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'recipeIngredients': recipeIngredients
    });
  }
}
