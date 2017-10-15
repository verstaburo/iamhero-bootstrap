export default () => { /*eslint-disable*/
  $(document).on('click', '.js-vacancy', function (e) {
    e.preventDefault();
    $('.page__overlay').fadeIn();
  });

  $(document).on('click', '.js-vacancy-close', function (e) {
    e.preventDefault();
    $('.page__overlay').fadeOut();
  });
};
