import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: { id: number, name: string };

  constructor(
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe(
      (({id}) => this.user = {
        id,
        name: this.fetchNameForId(id)
      })
    );
  }

  fetchNameForId(idInRoute: number): string {
    return 'username';
  }

}
