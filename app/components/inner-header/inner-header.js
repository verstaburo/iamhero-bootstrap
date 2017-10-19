/*eslint-disable*/
export default () => {

  $(document).on('click', '.inner-header__col_dropdown', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).siblings($(this)).removeClass('active');
    $(this).parents('.inner-header').find('.inner-header__search').removeClass('active');
    $(this).toggleClass('active');
  });

  $(document).on('click', '.inner-header__search-btn', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).siblings('.inner-header__notify-wrap').find('.inner-header__col_dropdown').removeClass('active');
    $(this).siblings('.inner-header__search').toggleClass('active');
  })

  $(document).on('click', '.inner-header__burger', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.inner-sidebar').toggleClass('active');
  })

  $(document).on('click', function () {
    $('.inner-header__col_dropdown').removeClass('active');
  })
};
