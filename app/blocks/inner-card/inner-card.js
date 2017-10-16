/*eslint-disable*/

export default () => {
  $(document).on('click', '.js-card-more', function () {
    $(this).parents('.inner-card').addClass('inner-card_expanded');
    $(this).hide();
    $(this).siblings('.js-card-less').show();
  });

  $(document).on('click', '.js-card-less', function () {
    $(this).parents('.inner-card').removeClass('inner-card_expanded');
    $(this).hide();
    $(this).siblings('.js-card-more').show();
  });

  $(document).on('click', '.js-card-buy', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).parents('.inner-card').toggleClass('active');
    $(this).toggleClass('active');
    $(this).siblings('.js-card-buy-target').toggle();
  });
};
