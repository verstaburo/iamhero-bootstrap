export default () => {
  /*eslint-disable*/
  $(document).on('input', '.messages__input-area', function () {
    if (!$(this).text().length) {
      $(this).siblings('.messages__placeholder').fadeIn();
    } else {
      $(this).siblings('.messages__placeholder').fadeOut();
    }
  });
};
