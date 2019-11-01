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
    ),
    trigger(
      'wildState', // a certain name that we can place and the dom and that will trigger an animation there
      [ // a set of animations
        state('normal', style({// style spec for state 1
          'background-color': 'red',
          transform: 'translateX(0) scale(1)'
        })),
        state('highlighted', style({ // style for state2
            backgroundColor: 'blue',
            'transform': 'translateX(100px) scale(1)'
          })
        ),
        state('shrunken', style({ // style for state2
            backgroundColor: 'green',
            'transform': 'translateX(0) scale(0.5)'
          })
        ),
        transition('normal => highlighted', animate(300)),
        transition('highlighted => normal', animate(800)),
        // from shrunken to any state or from any state to shrunken
        transition('shrunken <=> *', [
          // starting phase
          style({
            backgroundColor: 'orange', // this is set immediately
            borderRadius: '0'
          }),
          // animation frame 1
          animate(1000, style({
            borderRadius: '50px'
          })),
          // animation frame 2
          animate(500) // no props passed. this removes the border radius
        ])
      ]
    ),
    trigger(
      'list1',
      [
        // how should it look like when it IS in the dom
        state('in', // in is only a dummy name it is not used in the template.
          style({opacity: 1, transform: 'translateX(0)'})
        ),
        // how should it look like when it is added to the dom
        transition('void => *', [ // void tells NG "when this element is not been added to the dom yet OR when it has been removed"
            style({opacity: 0, transform: 'translateX(-100px)'}), // this style is added right in the beginning
            animate(300)
          ] // take some time to apply the final style
        ),
        transition('* => void', [
            animate(300),
            style({opacity: 0, transform: 'translateX(100px)'})
          ]
        )
      ]
    )
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';
  wildState = 'normal';

  onAdd(item) {
    this.list.push(item);
  }

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
    this.wildState = this.wildState === 'normal' ? 'highlighted' : 'normal';

  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onDelete(index: number) {
    this.list.splice(index, 1);
  }
}
