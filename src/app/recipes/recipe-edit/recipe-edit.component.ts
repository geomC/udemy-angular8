import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
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

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'descriptiom': new FormControl(recipeDescription)
    });
  }
}
