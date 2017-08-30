/*eslint-disable*/

export default () => {
  $(document).on('click', '.plate__video-placeholder', function (e) {
    $(this).fadeOut();
    $(this).siblings('.plate__video')[0].src += '&autoplay=1';
  });
};
