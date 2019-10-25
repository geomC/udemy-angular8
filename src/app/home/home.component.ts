import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private intervalSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const customObservable = new Observable(observer => { // part that is interested in stream updates/errors/completion
      let count = 0;
      setInterval(() => {
        observer.next(count); // emit a value
        count++;

        if (count === 4) {
          observer.complete();
        }

      }, 1000);
    });


    this.intervalSubscription = customObservable.pipe(
      filter(data => data > 0)
      , map((data) => { // current emitted data
        return `Round: ${(data as string) + 1}`;
      })
    ).subscribe({
      next: console.log.bind(console),
      error: console.error.bind(console),
      complete: () => console.log('DONE COUNTING')
    });
  }
}
