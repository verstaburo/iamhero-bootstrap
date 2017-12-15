export default () => {
  const $ = window.$;

  $(document).on('click', '.js-video-play', function (e) {
    e.preventDefault();

    const placeholder = $(this).siblings('.js-video-placeholder');

    $(this).fadeOut();

    const video = placeholder.find('video');
    const iframe = placeholder.find('iframe');

    if (video.length) {
      video[0].play();
    } else if (iframe.length) {
      iframe[0].src += '?autoplay=1';
    } else {
      console.log("Can't find video in placeholder");
    }
  });
};
