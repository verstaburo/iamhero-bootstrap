export default () => {
  /* eslint-disable */
  $('.checkbox, .checkbox-inline').each(function () {
    const box = $('<span></span>').addClass('checkbox-box');
    $(this).find('label').append(box);
  });
};
