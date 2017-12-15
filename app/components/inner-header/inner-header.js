/*eslint-disable*/
export default () => {

  $(document).on('click', '.inner-header__col_dropdown', function () {
    $(this).siblings($(this)).removeClass('active');
    $(this).parents('.inner-header').find('.inner-header__search').removeClass('active');
    $(this).toggleClass('active');
  });

  $(document).on('click', '.inner-header__search-btn', function () {
    $(this).siblings('.inner-header__search').toggleClass('active');
  });

  $(document).on('click', '.inner-header__burger', function () {
    $('.inner-header__burger').toggleClass('active');
    if ($('.inner-sidebar').length) {
      $('.inner-sidebar').toggleClass('active');
    }
  });
};
