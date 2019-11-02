import { async, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

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
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the username if the user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement // the element exposed to us for testing purposes
      .componentInstance;
    app.isLoggedIn = true;
    // run change detection to update the template after the service is injected
    fixture.detectChanges();
    let compiledTemplate = fixture.debugElement.nativeElement;
    expect(compiledTemplate.querySelector('p').textContent).toContain(app.user.name);
  });

  it('should display the username if the user is not logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement // the element exposed to us for testing purposes
      .componentInstance;
    // run change detection to update the template after the service is injected
    fixture.detectChanges();
    let compiledTemplate = fixture.debugElement.nativeElement;
    expect(compiledTemplate.querySelector('p')).toBeFalsy();
  });

  it('should fetch data successfully', async(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement // the element exposed to us for testing purposes
      .componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails') // run this async ..
      .and.returnValue(Promise.resolve('Data')); // .. but mock the return data
    fixture.detectChanges();
    fixture.whenStable().then(() =>
      expect(app.data).toBe('Data')
    );
  }));


});