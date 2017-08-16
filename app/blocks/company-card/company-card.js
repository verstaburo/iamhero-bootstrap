/*eslint-disable*/

export default () => {
  $('.js-company-more').click(function () {
    $(this).parents('.company-card').addClass('company-card_expanded');
    $(this).hide();
    $(this).siblings('.js-company-less').show();
  });

  $('.js-company-less').click(function () {
    $(this).parents('.company-card').removeClass('company-card_expanded');
    $(this).hide();
    $(this).siblings('.js-company-more').show();
  });
};
