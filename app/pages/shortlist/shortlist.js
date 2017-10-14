export default () => { /*eslint-disable*/
  $(document).on('click', '.js-pick', function () {
    $('.page__overlay').fadeIn();
    $('.inner-card').addClass('inner-card_pick');
  });

  $(document).on('click', '.js-pick-dismiss', function () {
    $('.page__overlay').fadeOut();
    $('.side-modal, .side-modal__toggler').removeClass('active');
    $('.inner-card').removeClass('inner-card_pick');
  });
};
