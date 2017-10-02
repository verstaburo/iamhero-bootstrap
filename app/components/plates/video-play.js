/*eslint-disable*/

export default () => {
  $(document).on('click', '.js-video-play', function(e) {
    e.preventDefault();

    var mediaElement = $(this).siblings('.plate__video-placeholder').find('.plate__video');

    $(this).fadeOut();

    if (mediaElement.prop('tagName') === 'IFRAME') {
      mediaElement[0].src += '&autoplay=1';
    } else if (mediaElement.prop('tagName') === 'VIDEO') {
      mediaElement.play();
    } else {
      console.log("Can't find video in placeholder");
    }
  });
};
