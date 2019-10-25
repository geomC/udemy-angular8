import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private intervalSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // store the Subscription returned by subscribe() so we end the subscription in onDestroy()
    this.intervalSubscription = interval(1000)
      .subscribe( (count: number) => {
          console.log(`new count: ${count}`);
      });
  }

  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }

}
