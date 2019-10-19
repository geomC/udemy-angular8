import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counts = {
    activeToInactive: 0,
    inactiveToActive: 0
  };

  countActiveToInactive() {
    ++this.counts.activeToInactive;
    this.logCount();
  }

  countInactiveToActive() {
    ++this.counts.inactiveToActive;
    this.logCount();
  }

  logCount() {
    console.log('Current count: ' + JSON.stringify(this.counts, null, '\t'));
  }
}
