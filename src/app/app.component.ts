import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    // each animation has a trigger
    trigger(
      'divState', // a certain name that we can place and the dom and that will trigger an animation there
      [ // a set of animations
        state('normal', style({// style spec for state 1
          'background-color': 'red',
          transform: 'translateX(0)'
        })),
        state('highlighted', style({ // style for state2
            backgroundColor: 'blue',
            'transform': 'translateX(100px)'
          })
        ),
        transition(
          'normal => highlighted', // the direction
            animate(300) // takes number of miliseconds
        )
      ]
    )
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';

  onAdd(item) {
    this.list.push(item);
  }

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' :  'normal';
  }
}
