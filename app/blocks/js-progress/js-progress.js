export default () => {
  /*eslint-disable*/
  $('.js-progress').each(function() {
    const value = item.find('.js-progress__control').val();
    const bar = +item.find('.js-progress__value').attr('stroke-dasharray') * (1 - (0.01 * +value));
    item.find('.js-progress__output').text(value + '%')
    item.find('.js-progress__value').attr('stroke-dashoffset', bar);
  });
};
