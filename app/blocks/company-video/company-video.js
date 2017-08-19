/*eslint-disable*/

export default () => {
  $('.company-video__controls').click(function () {
    $(this).fadeOut();
    $(this).siblings('.company-video__item')[0].src += '&autoplay=1';
  });
};
