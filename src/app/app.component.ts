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

  get hobbieControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({ // nested FormGroup
        'username': new FormControl(null,
          Validators.required), // dont call the validation method! It gets called by NG whenever the input updates.
        'email': new FormControl(null, [Validators.required, Validators.email]), // a list of funcs can be passed
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
