import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female', 'diverse'];

  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null), // wrapped in strings so it does not get mangled during minifcation
      'email': new FormControl(null),
      'gender': new FormControl(this.genders[1])
    });
  }


}
