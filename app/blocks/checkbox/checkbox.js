export default () => {
  /* eslint-disable */
  const checkbox = $('.checkbox'),
    checkboxInline = $('.checkbox-inline');

  if (!checkbox && !checkboxInline) {
    return;
  }

  checkbox.each(function() {
    const box = $('<span class="checkbox-box"></span>');

    if ($(this).find($('.checkbox-box')).length) {
      return;
    }

    $(this).find('label').append(box);
  });

  checkboxInline.each(function() {
    const box = $('<span class="checkbox-box"></span>');

    if ($(this).find($('.checkbox-box')).length) {
      return;
    }

    $(this).append(box);
  });
};
