export default () => { /*eslint-disable*/
  $(document).on('click', '[data-side]', function () {
    const target = $(this).attr('[data-side]');
    target.addClass('active');
    target.find('.side-modal__toggler').addClass('active');
  });

  $(document).on('click', '.side-modal__toggler', function () {
    $(this).toggleClass('active');
    $(this).parents('.side-modal').toggleClass('active');
  });
};
