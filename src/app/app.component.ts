import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators as V } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  projectsForm: FormGroup;

  projectStates = ['Stable', 'Critical', 'Finished'];

  forbiddenProjectName = 'Test';

  restrictProjectName(control: FormControl): { [s: string]: boolean } {
    return control.value === this.forbiddenProjectName && {
      'projectNameRestricted': true
    }; // if validation is successfull (name is not forbidden) return undefined
  }

  ngOnInit() {
    this.projectsForm = new FormGroup({
      'name': new FormControl(null, [V.required, this.restrictProjectName.bind(this)]),
      'email': new FormControl(null, [V.required, V.email]),
      'status': new FormControl(this.projectStates[0])
    });

    // debugging
    this.projectsForm.statusChanges.subscribe(console.log.bind(console));
    this.projectsForm.valueChanges.subscribe(console.log.bind(console));

  }


  submit() {
    console.log(this.projectsForm);
  }
}
