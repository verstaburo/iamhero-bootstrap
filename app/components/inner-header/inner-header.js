/*eslint-disable*/
export default () => {
  $('.inner-header__col_dropdown').click(function () {
    $(this).siblings($(this)).removeClass('active');
    $(this).toggleClass('active');
  });

  $('.inner-header__search-btn').click(function () {
    $(this).siblings('.inner-header__search').toggleClass('active');
  });
};
