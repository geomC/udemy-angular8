import { TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent // the component to test
      ]
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement // the element exposed to us for testing purposes
      .componentInstance;
    expect(app).toBeTruthy(); // does it exist
  });

  it('should should use the username from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement // the element exposed to us for testing purposes
      .componentInstance;
    // run change detection to update the template after the service is injected
    fixture.detectChanges();
    let userService = fixture.debugElement.injector.get(UserService)
    expect(userService.user.name).toEqual(app.user.name);
  });
});
