export default () => { /*eslint-disable*/
  $('.radio').each(function () {
    const box = $('<span></span>').addClass('radio-box');
    $(this).find('label').append(box);
  });

  $('.radio-inline').each(function () {
    const box = $('<span></span>').addClass('radio-box');
    $(this).append(box);
  });
};
