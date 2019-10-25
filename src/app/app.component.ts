import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subscriptionTypes = [
    'Basic',
    'Advanced',
    'Pro'
  ];

  formStatePrint;

  defaultSubscriptionType = this.subscriptionTypes[1];

  submit(f: NgForm) {
    const formState = f.value;
    this.formStatePrint = JSON.stringify(formState, null, `\t`);
    console.log(`FORM STATE: ${ this.formStatePrint}`);
    f.reset();
  }
}
