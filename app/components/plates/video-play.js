/*eslint-disable*/

export default () => {
  $(document).on('click', '.js-video-play', function(e) {
    e.preventDefault();

    var mediaElement = $(this).siblings('.js-video-placeholder').children();

    $(this).fadeOut();

    if (mediaElement.prop('tagName') === 'IFRAME') {
      mediaElement[0].src += '?autoplay=1';
    } else if (mediaElement.prop('tagName') === 'VIDEO') {
      mediaElement[0].play();
    } else {
      console.log("Can't find video in placeholder");
    }
  });
};
