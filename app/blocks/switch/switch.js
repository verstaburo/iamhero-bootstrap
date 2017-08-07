/*eslint-disable */
export default () => {
  $('.switch__item').click(function () {
    $(this).siblings('.switch__item').removeClass('active');
    $(this).addClass('active');
    $(this).siblings('input').val($(this).find('.switch__text').text());
  });
};
