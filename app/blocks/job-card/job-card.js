export default () => { /*eslint-disable*/
  $(document).on('click', '.job-card__media-item', function() {
    if ($('.job-card__media-video-control').length) {
      $(this).hide();
    }
  });
};
