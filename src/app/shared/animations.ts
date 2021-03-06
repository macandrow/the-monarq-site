import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
    keyframes,
    stagger,
    sequence
  } from '@angular/animations';

// //this works no footer!!! scale
const optional = { optional: true };

export const routerTransition =
  trigger('routerTransition', [
    transition('aboutPage <=> homePage, 404Page => *, * => 404Page',[
      query(':enter, :leave', style({ position: 'fixed', width:'100%' }),optional),
      sequence([
        group([
          query(':enter',  [
            style({ opacity: 0,}),
            //animateChild(),
            //query('.copyright', style({ background: 'pink' }),optional), 
            animate(
              '2s cubic-bezier(0.7, 0, 0.3, 1)', keyframes([
                //style({ transform: 'translateX(0%)', opacity: 1 })
                style({	opacity: 0,  transform: 'translateY(2%)' }),
                style({	opacity: 1,  transform: 'translateY(0%)' })
              ])
            )
          ], optional),
          query(':leave', [
            style({ opacity: 1 }),
            //animateChild(),
            animate(
              '0.5s cubic-bezier(0.7, 0, 0.3, 1)', style({ opacity: 0, })
            )
          ],optional),
        ]),
      ])
    ] ),
    transition('* => galleryTitlePage', [
      group([
        query(':leave', style({ position: 'fixed', width:'100%' }), optional),
      
        query(':leave', [
        style({ opacity: 1 }),
        animate('0.5s ease-in-out', style({ opacity: 0}))
        ], optional),
    
        query('.gallery-wrapper header *, ul.gallery, footer, .backToTop', style({ opacity: 0 })
        , optional),
    
        query(':enter .gallery-wrapper header *, ul.gallery, .btn_holder, footer', stagger(100, [
        style({ transform: 'translateY(100px)' }),
        animate('1s cubic-bezier(0.7, 0, 0.3, 1)', style({ transform: 'translateY(0px)', opacity: 1 })),
        ]), optional),
      ]),
    ]),
    transition('galleryTitlePage => *', [
      group([
        query(':leave .gallery-wrapper header *, .slide_thumbs, .btn_holder, footer', stagger(10, [
          style({ transform: 'translateY(0px)', opacity: 1 }),
          animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
        ]), optional),  
        query(':enter',  [
          style({ opacity: 0,position: 'fixed', width:'100%'}),
          //animateChild(),
          //query('.copyright', style({ background: 'pink' }),optional), 
          animate(
            '2s cubic-bezier(0.7, 0, 0.3, 1)', keyframes([
              //style({ transform: 'translateX(0%)', opacity: 1 })
              style({	opacity: 0,  transform: 'translateY(2%)' }),
              style({	opacity: 1,  transform: 'translateY(0%)' })
            ])
          )
        ],optional),      
      ])
    ]),
])  
// this works locally but not in prod
// import {
//   trigger,
//   transition,
//   style,
//   query,
//   group,
//   animate,
//   keyframes,
//   stagger,
//   sequence
// } from '@angular/animations';

// // //this works no footer!!! scale
// export const routerTransition = trigger('routerTransition', [
// transition('aboutPage <=> homePage', pageTransition() ),
// transition('* => galleryTitlePage', stepper()),
// transition('galleryTitlePage => *', galleryAway()),
// transition('* => 404Page', pageTransition()),
// transition('404Page => *', pageTransition()),
// ])  

// export function pageTransition() {
// const optional = { optional: true };
// return[
//   query(':enter, :leave', style({ position: 'fixed', width:'100%' }), optional),
//   //query('footer', style({ opacity: 0 }), { optional: true }), 
//   sequence([
//     group([
//       query(':enter',  [
//         style({ opacity: 0,}),
//         //animateChild(),
//         //query('.copyright', style({ background: 'pink' }), { optional: true }), 
//         animate(
//           '2s cubic-bezier(0.7, 0, 0.3, 1)', keyframes([
//             //style({ transform: 'translateX(0%)', opacity: 1 })
//             style({	opacity: 0,  transform: 'translateY(2%)' }),
//             style({	opacity: 1,  transform: 'translateY(0%)' })
//           ])
//         )
//       ],optional),
//       query(':leave', [
//         style({ opacity: 1 }),
//         //animateChild(),
//         animate(
//           '0.5s cubic-bezier(0.7, 0, 0.3, 1)', style({ opacity: 0, })
//         )
//       ], optional),
//     ]),
//   ])
// ];
// }

// export function stepper(){
// const optional = { optional: true };
// return[
//   group([
//     query(':leave', style({ position: 'fixed', width:'100%' }), optional),
  
//     query(':leave', [
//     style({ opacity: 1 }),
//     animate('0.5s ease-in-out', style({ opacity: 0}))
//     ], optional),

//     query('.gallery-wrapper header *, ul.gallery, footer, .backToTop', style({ opacity: 0 })
//     , optional),

//     query(':enter .gallery-wrapper header *, ul.gallery, footer, .backToTop', stagger(100, [
//     style({ transform: 'translateY(100px)' }),
//     animate('1s cubic-bezier(0.7, 0, 0.3, 1)', style({ transform: 'translateY(0px)', opacity: 1 })),
//     ]), optional),
//   ]),
// ]
// }

// export function galleryAway(){
// const optional = { optional: true };
// return[
//   //transition(':leave', [
//   group([
//     query(':leave .gallery-wrapper header *, .slide_thumbs, footer, .backToTop', stagger(10, [
//       style({ transform: 'translateY(0px)', opacity: 1 }),
//       animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
//     ]), optional),  
//     query(':enter',  [
//       style({ opacity: 0,position: 'fixed', width:'100%'}),
//       //animateChild(),
//       //query('.copyright', style({ background: 'pink' }), { optional: true }), 
//       animate(
//         '2s cubic-bezier(0.7, 0, 0.3, 1)', keyframes([
//           //style({ transform: 'translateX(0%)', opacity: 1 })
//           style({	opacity: 0,  transform: 'translateY(2%)' }),
//           style({	opacity: 1,  transform: 'translateY(0%)' })
//         ])
//       )
//     ],optional),      
//   ])
// ]
// }