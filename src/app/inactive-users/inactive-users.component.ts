import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
