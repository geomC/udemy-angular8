import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  private signupForm: FormGroup;

  forbiddenUsernames = ['Chris', 'Anna'];

  validateUserName(control: FormControl): {[s: string]: boolean} { // func returns ab object where each value is a boolean
    if (this.forbiddenUsernames.includes(control.value)) {
      return {'nameIsForbidden': true};
    }
    // if invalid return null or undefined here
  }

  get hobbieControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({ // nested FormGroup
        'username': new FormControl(null,
          [Validators.required, this.validateUserName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl(this.genders[1]),
      'hobbies': new FormArray([])
    });
  }


  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray) // type casting necessary
      .push(control);
  }
}
