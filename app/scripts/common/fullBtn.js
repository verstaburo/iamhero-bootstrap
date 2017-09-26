import { debounce } from 'throttle-debounce';

export default () => {
  /*eslint-disable*/

  function fullButton() {
    const el = $('.page__summary-btn');

    if (!el) {
      return;
    }

    if ($(window).width() < 1279) {
      if (el.attr('style')) {
        el.removeAttr('style');
      }
      return;
    }

    const offset = ($(window).width() - el.parents('.container').outerWidth()) / 2;
    el.css('width', el.outerWidth() + offset);
  }

  fullButton();

  $(window).resize(debounce(200, false, fullButton));
};
