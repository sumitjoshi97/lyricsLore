import {TweenMax, Power2} from 'gsap';

const duration = 0.6;

export default {
    show(target) {
        return TweenMax.fromTo(target, duration, {
            opacity: 0,
            y: -10
          }, {
            opacity: 1,
            y: 0,
            ease: Power2.easeOut
        })
    },
    
    stagger(target) {
        return TweenMax.staggerFromTo(target, duration, {
            cycle: {
                x: [-50, 50],
                opacity: 0
            }
        }, {
            cycle: {
                x: [0, 0],
                opacity: 1
            },
            ease: Power2.easeOut
        })
    }
}