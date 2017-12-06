import { debounce } from 'throttle-debounce';

export default () => {
  /*eslint-disable*/

  function swipeInit() {
    $(".aside-filter__toggler").swipe({
      swipeStatus: function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
        const sidebar = $(this).parent();

        if (direction === 'right') {
          sidebar.addClass('opened');
        }

        if (direction === 'left') {
          sidebar.removeClass('opened');
        }
      },
      threshold: 50,
      fingers: 'all',
    });
  }

  swipeInit();

  $(window).on('resize', debounce('250', swipeInit))
};
