import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators as V } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

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

  get ingredientControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
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
    const formValues = this.recipeForm.value;
    // const recipe = new Recipe(
    //   formValues['name'],
    //   formValues['description'],
    //   formValues['imagePath'],
    //   formValues['ingredients']
    // ); we dont need this! the object stored by the form should be a valid recipe!
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, formValues as Recipe);
    } else {
      this.recipeService.addRecipe(formValues as Recipe);
    }
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(new FormGroup({
      'name': new FormControl(null, V.required),
      'amount': new FormControl(1, [
        V.required,
        V.min(1)
      ])
    }));
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
              'name': new FormControl(ing.name, V.required),
              'amount': new FormControl(ing.amount, [
                V.required,
                V.min(1)
              ])
            });
            recipeIngredients.push(formGroup);
          });
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, V.required),
      'imagePath': new FormControl(recipeImagePath, V.required),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }
}
