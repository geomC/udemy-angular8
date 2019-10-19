import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
