import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static: true}) signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = [
    'male',
    'female',
    'diverse'
  ];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.setValue({ // a js object ! exactly shaped like the form payload !
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: this.genders[0],
    });
  }

  onSubmit(form: NgForm) {
    console.log(this.signupForm);
  }
}
