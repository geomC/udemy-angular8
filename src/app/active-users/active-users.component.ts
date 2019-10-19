import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UsersServiceService} from '../shared/users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  constructor(
    private usersService: UsersServiceService
  ) {}

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
