import { throttle } from 'throttle-debounce';

export default () => { /*eslint-disable*/
  $('.countdown').TimeCircles({
    circle_bg_color: 'rgba(255,255,255,.5)',
    bg_width: 0.65,
    time: {
      Days: {
        color: '#fff',
      },
      Hours: {
        color: '#fff',
      },
      Minutes: {
        color: '#fff',
        text: 'Min',
      },
      Seconds: {
        color: '#fff',
        text: 'Sec',
      },
    },
    fg_width: 0.05,
  });

  function countdownRebuild() {
    $('.countdown').TimeCircles().rebuild();
  }

  $(window).on('resize', throttle(300, countdownRebuild));
};
