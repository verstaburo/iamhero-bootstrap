export default () => { /*eslint-disable*/
  $('.radio, .radio-inline').each(function () {
    const box = $('<span></span>').addClass('radio-box');
    $(this).find('label').append(box);
  });
};
