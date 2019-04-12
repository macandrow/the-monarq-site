import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
    stagger,
    sequence
  } from '@angular/animations';

// export const routerTransition = trigger('routerTransition', [
//   transition('* <=> *', [
//     query(':enter, :leave', style({ position: 'fixed', width:'100%'}), { optional: true }),
//     query(':enter', [style({ opacity:0, transform: 'translateX(100%)'})],{ optional: true }),
//   ])
// ])

// export const routerTransition = trigger('routerTransition', [
//   transition('* <=> *', [
//     query(':enter, :leave', style({ position: 'fixed', width:'100%' }),{ optional: true }),
//     query(':enter', style({ transform: 'translateX(100%)' }),{ optional: true }),
//     sequence([
//       //query(':leave', animateChild(), { optional: true }), 
//       group([
//         query(':leave', [
//           style({ transform: 'translateX(0%)' }),
//           animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', 
//             style({ transform: 'translateX(-100%)' }))
//         ], { optional: true }),
//         query(':enter', [
//           style({ transform: 'translateX(100%)' }),
//           animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', 
//             style({ transform: 'translateX(0%)' })),
//         ], { optional: true }),
//       ]),
//       query(':enter', animateChild(), { optional: true }),
//     ])
//   ])
// ])

// export const routerTransition = trigger('routerTransition', [
//   transition(':enter, * => 0, * => -1', []),
//   transition(':increment', [
//     query(':enter', [
//       style({ opacity: 0, width: '0px' }),
//       stagger(50, [
//         animate('300ms ease-out', style({ opacity: 1, width: '*' })),
//       ]),
//     ], { optional: true })
//   ]),
//   transition(':decrement', [
//     query(':leave', [
//       stagger(50, [
//         animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
//       ]),
//     ])
//   ])
// ])

//this works no footer!!!
// export const routerTransition = trigger('routerTransition', [
//   transition(':enter', [
//     query('footer', style({ opacity: 0 }), { optional: true }),
//     query('footer', stagger(300, [
//       style({ transform: 'translateY(100px)' }),
//       animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
//     ]), { optional: true }),
//   ]),
//   transition(':leave', [
//     query('footer', stagger(300, [
//       style({ transform: 'translateY(0px)', opacity: 1 }),
//       animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
//     ]), { optional: true }),        
//   ]),
//   transition('* <=> *', [
//   group([
//           query(':enter',  [
//             style({ opacity: 0,}),
//             //animateChild(),
//             //query('.copyright', style({ background: 'pink' }), { optional: true }), 
//             animate(
//               '2s cubic-bezier(0.7, 0, 0.3, 1)', keyframes([
//                 //style({ transform: 'translateX(0%)', opacity: 1 })
//                 style({	opacity: 0, '-webkit-transform': 'scale(0.9)', transform:' scale(0.9)'}),
//                 style({	opacity: 1, '-webkit-transform': 'scale(1)', transform:' scale(1)'})
//               ])
//             )
//           ], { optional: true }),
//           query(':leave', [
//             style({ opacity: 1 }),
//             //animateChild(),
//             animate(
//               '0.5s cubic-bezier(0.7, 0, 0.3, 1)', style({ opacity: 0, })
//             )
//           ], { optional: true }),
//         ]),
//       ])
// ]);


// enter -> sequence footer op out, body fade in, footer fade in
// exit body fade outerHeight, footer fade out
  

//this works no footer!!!
// export const routerTransition = trigger('routerTransition', [
//   transition('* <=> *', [
//     query(':enter, :leave', style({ position: 'fixed', width:'100%' }), { optional: true }),
//     query(':enter',  [
//       sequence([
//         query('h1',[
//           style({opacity:0}),
//           animate(
//             '2s cubic-bezier(0.7, 0, 0.3, 1)', keyframes([
//               //style({ transform: 'translateX(0%)', opacity: 1 })
//               style({	opacity: 0,  transform: 'translateY(2%)' }),
//               style({	opacity: 1,  transform: 'translateY(0%)' })
//             ])
//           )
//         ],{ optional: true }),
//         animateChild(),
//         // style({ opacity: 0,}),
//         // animate(
//         //   '2s cubic-bezier(0.7, 0, 0.3, 1)', keyframes([
//         //     //style({ transform: 'translateX(0%)', opacity: 1 })
//         //     style({	opacity: 0,  transform: 'translateY(2%)' }),
//         //     style({	opacity: 1,  transform: 'translateY(0%)' })
//         //   ])
//         // )
//       ])
//     ],{ optional: true })
//   ]),
// ])


// //this works no footer!!!
export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' }), { optional: true }),
    //query('footer', style({ opacity: 0 }), { optional: true }), 
    sequence([
      group([
        query(':enter',  [
          style({ opacity: 0,}),
          //animateChild(),
          //query('.copyright', style({ background: 'pink' }), { optional: true }), 
          animate(
            '2s cubic-bezier(0.7, 0, 0.3, 1)', keyframes([
              //style({ transform: 'translateX(0%)', opacity: 1 })
              style({	opacity: 0,  transform: 'translateY(2%)' }),
              style({	opacity: 1,  transform: 'translateY(0%)' })
            ])
          )
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1 }),
          //animateChild(),
          animate(
            '0.5s cubic-bezier(0.7, 0, 0.3, 1)', style({ opacity: 0 })
          )
        ], { optional: true }),
      ]),
    ])
  ]),
])


  


// //this works no footer!!!
// export const routerTransition = trigger('routerTransition', [
//   transition('* <=> *', [
//     query(':enter, :leave', style({ position: 'fixed', width:'100%' }), { optional: true }),
//     //query('footer', style({ opacity: 0 }), { optional: true }), 
//     sequence([
//       group([
//         query(':enter',  [
//           style({ opacity: 0,}),
//           //animateChild(),
//           //query('.copyright', style({ background: 'pink' }), { optional: true }), 
//           animate(
//             '2s cubic-bezier(0.7, 0, 0.3, 1)', keyframes([
//               //style({ transform: 'translateX(0%)', opacity: 1 })
//               style({	opacity: 0, '-webkit-transform': 'scale(0.9)', transform:' scale(0.9)'}),
//               style({	opacity: 1, '-webkit-transform': 'scale(1)', transform:' scale(1)'})
//             ])
//           )
//         ], { optional: true }),
//         query(':leave', [
//           style({ opacity: 1 }),
//           //animateChild(),
//           animate(
//             '0.5s cubic-bezier(0.7, 0, 0.3, 1)', style({ opacity: 0, })
//           )
//         ], { optional: true }),
//       ]),
//     ])
//   ]),
// ])

      // query(':enter, :leave', [
      //   animateChild()
      // ],{ optional: true })
      // group([
      //   query(':enter', [
      //     query('.copyright', style({ background: 'pink'}), { optional: true }), 
          //animate('600ms ease', style({ opacity: 1, transform: 'scale(1)' })),
        //], { optional: true }),
        // query(':leave', [
        //   query('footer', style({ opacity: 1 }), { optional: true }), 
        //   animate('600ms ease', style({ opacity: 0, transform: 'scale(0)' })),
        // ])
     // ])

////close

// export const routerTransition = trigger('routerTransition', [

//   transition('* <=> *', [
//     // query(':enter, :leave',style({position: 'fixed', width:'100%'},), { optional: true }),
//     // query(':enter', [style({ 
//     //   opacity:0, 
//     //   //transform: ' scale(1)',

//     // }),
//     //   // query('contributor', [
//     //   //   style({ opacity:0, transform: 'scale(0)'})
//     //   // ])
//     // ],{ optional: true }),

//     query(':leave', [
//       // query('.image', [
//       //   stagger(50, [
//       //     animate('500ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateY(-50px)' }))
//       //   ])
//       // ]),
//       animate('0.5s', style({ 
//         opacity:1, 
//         //transform: 'scale(0)' 
//       }))
//     ], { optional: true }),
//     query(':enter', [
//       style({ opacity: 0 }),
//       animate('0.5s', style({ opacity: 1 }))
//     ], { optional: true })
//     // group([
//     //   query(':enter', [
//     //     animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
//     //   ], { optional: true }),
//       // query(':enter contributor', [
//       //   stagger(200, [
//       //     animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
//       //   ])
//       // ])
//     //])
//   ])
// ])

  //   transition('* <=> *', [
  //     query(':enter, :leave', style({ position: 'fixed', width:'100%' })
  //       , { optional: true }),
  //     group([
  //       query(':enter', [
  //         style({ transform: 'translateX(100%)' }),
  //         animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: 0 }))
  //       ], { optional: true }),
  //       query(':leave', [
  //         style({ transform: 'translateX(0%)' }),
  //         animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)',  opacity: 1 }))
  //       ], { optional: true }),
  //     ])
  //   ])
  // ])