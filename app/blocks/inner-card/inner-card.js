/*eslint-disable*/

export default () => {
  $('.js-card-more').click(function () {
    $(this).parents('.inner-card').addClass('inner-card_expanded');
    $(this).hide();
    $(this).siblings('.js-card-less').show();
  });

  $('.js-card-less').click(function () {
    $(this).parents('.inner-card').removeClass('inner-card_expanded');
    $(this).hide();
    $(this).siblings('.js-card-more').show();
  });
};
