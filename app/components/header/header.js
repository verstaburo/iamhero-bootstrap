export default () => {
  /*eslint-disable*/
  $(document).on('click', '.header__burger', function(e) {
    e.preventDefault();
    if ($('.header__nav-mobile').hasClass('active')) {
      $('.header__nav-mobile').removeClass('active');
    }
    $(this).toggleClass('active');
    $('.sidebar-wrap').toggleClass('active');
  });

  $(document).on('click', '.header__user-menu', function(e) {
    e.preventDefault();
    if ($('.header__burger').hasClass('active')) {
      $('.sidebar-wrap').removeClass('active');
      $('.header__burger').removeClass('active');
    }
    $('.header__nav-mobile').toggleClass('active');
  });
};
