import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {noUndefined} from '@angular/compiler/src/util';
import { FormGroup } from '@angular/forms';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipeForm = new FormGroup()


    this.route.params.subscribe(
      ({ id }: Params) => {
        this.id = +id;
        this.editMode = id != null; // null or noUndefined();
      }
    );
  }

  clearForm() {

  }

  submitForm() {

  }
}
