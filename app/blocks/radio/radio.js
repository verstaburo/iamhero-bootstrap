export default () => { /*eslint-disable*/

  const radio = $('.radio'),
    radioInline = $('.radio-inline');

  if (!radio && !radioInline) {
    return;
  }

  radio.each(function() {
    const box = $('<span class="radio-box"></span>');

    if ($(this).find($('.radio-box')).length) {
      return;
    }

    $(this).find('label').append(box);
  });

  radioInline.each(function() {
    const box = $('<span class="radio-box"></span>');

    if ($(this).find($('.radio-box')).length) {
      return;
    }

    $(this).append(box);
  });
};
