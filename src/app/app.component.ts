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
  private submitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    gender: '',
    answer: '',
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form // kind of a container for the form
      .patchValue({userData: {
        username: suggestedName
        }});
  }

  onSubmit(form: NgForm) {
    // some async logic ..
    this.submitted = true;

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secretQuestion;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
