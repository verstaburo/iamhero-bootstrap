/*eslint-disable*/

export default () => {
  $('.play-video').click(function (e) {
    const overlay = $(this).parents('.plate__video-placeholder_overlay');
    overlay.fadeOut();
    overlay.siblings('.plate__video')[0].src += "&autoplay=1";
  });
};
