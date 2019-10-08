import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output()
  ingredientCreated = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static: false})
  nameInput: ElementRef;

  @ViewChild('amountInput', {static: false})
  amountInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const name = this.nameInput.nativeElement.value;
    const amount = +this.amountInput.nativeElement.value;
    this.ingredientCreated.emit(new Ingredient(name, amount));

  }
}
