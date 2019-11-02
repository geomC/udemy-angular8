import { TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

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
});
