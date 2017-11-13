export default () => {
  /*eslint-disable*/
  $('.js-progress').each(function() {
    const value = $(this).find('.js-progress__control').val();
    const bar = +$(this).find('.js-progress__value').attr('stroke-dasharray') * (1 - (0.01 * +value));
    $(this).find('.js-progress__output').text(value + '%')
    $(this).find('.js-progress__value').attr('stroke-dashoffset', bar);
  });
};
