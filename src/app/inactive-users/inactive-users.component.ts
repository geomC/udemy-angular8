import {Component} from '@angular/core';
import {UsersService} from '../shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  constructor(
    private usersService: UsersService
  ) {
  }

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
