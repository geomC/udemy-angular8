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
  }

  countInactiveToActive() {
    ++this.counts.inactiveToActive;
  }
}
