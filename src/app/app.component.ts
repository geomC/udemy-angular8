import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators as V } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  projectsForm: FormGroup;

  private projectStates = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectsForm = new FormGroup({
      'name': new FormControl(null, V.required),
      'email': new FormControl(null, [V.required, V.email]),
      'status': new FormControl(this.projectStates[0],[V.required, V.email])
    });
  }


}
