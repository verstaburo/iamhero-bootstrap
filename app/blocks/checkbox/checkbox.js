export default () => {
  /* eslint-disable */
  $('.checkbox').each(function () {
    const box = $('<span></span>').addClass('checkbox-box');
    $(this).find('label').append(box);
  });

  $('.checkbox-inline').each(function () {
    const box = $('<span></span>').addClass('checkbox-box');
    $(this).append(box);
  });
};
