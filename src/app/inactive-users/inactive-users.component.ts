import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UsersServiceService} from '../shared/users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  constructor(
    private usersService: UsersServiceService
  ) {}

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
