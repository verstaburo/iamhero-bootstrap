/*eslint-disable*/

export default () => {
  $(document).on('click', '.js-card-more', function () {
    $(this).parents('.inner-card').addClass('inner-card_expanded');
    $(this).parents('.inner-card').find('.inner-card__expand-content').fadeIn();
    $(this).hide();
    $(this).siblings('.js-card-less').show();
  });

  $(document).on('click', '.js-card-less', function () {
    $(this).parents('.inner-card').removeClass('inner-card_expanded');
    $(this).parents('.inner-card').find('.inner-card__expand-content').fadeOut();
    $(this).hide();
    $(this).siblings('.js-card-more').show();
  });
};
