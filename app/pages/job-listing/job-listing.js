export default () => { /*eslint-disable*/
  const map = $('.job-listing__map');
  if (!map.length) {
    return;
  }

  function toggleMap() {
    if ($(window).width() < 1600) {
      map.removeClass('active');
      map.find('.side-modal__toggler').removeClass('active');
    } else {
      map.addClass('active');
      map.find('.side-modal__toggler').addClass('active');
    }
  }

  $(window).on('resize', toggleMap);
};
