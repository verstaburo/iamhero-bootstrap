/*eslint-disable */
export default () => {
  $(document).on('click', '.switch__item', function () {
    $(this).siblings('.switch__item').removeClass('active');
    $(this).addClass('active');
    $(this).siblings('input').val($(this).find('.switch__text').text());
  });
};
