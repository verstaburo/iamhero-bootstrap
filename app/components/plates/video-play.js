/*eslint-disable*/

export default () => {
  $('.play-video').click(function () {
    $(this).parents('.plate__video-placeholder_overlay').fadeOut();
  });
};
