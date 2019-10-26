import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: false}) slForm: NgForm;
  private startEditSub: Subscription;
  private editMode = false;
  private editedItemIndex: number;
  private editedItem: Ingredient;

  constructor(
    private shoppingListService: ShoppingListService
  ) {
  }

  ngOnInit() {
    this.startEditSub = this.shoppingListService.$startedEditing.subscribe(
      this.onNewItemEdit()
    );
  }

  private onNewItemEdit() {
    return (index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.slForm.setValue(this.editedItem);
    };
  }

  onAddItem(form: NgForm) {
    const { name, amount} = form.value;
    const newIngredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.startEditSub.unsubscribe();
  }

}
