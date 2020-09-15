import {
  trigger,
  transition,
  style,
  animate,
  sequence,
  query,
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          width: '100%',
          opacity: 0,
          transform: 'translateY(-100px)',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '0.7s ease-in-out',
          style({
            opacity: 1,
            transform: 'translateY(0)',
          })
        ),
      ],
      { optional: true }
    ),
  ]),
]);
