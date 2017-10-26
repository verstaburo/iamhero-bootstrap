export default () => {
  /*eslint-disable*/
  const btnClass = '.to-top',
    w = $(window);

  w.on('scroll', function() {
    if (w.scrollTop() - w.innerHeight() > 0) {
      $(btnClass).addClass('active');
    } else {
      $(btnClass).removeClass('active');
    }
  });

  $(document).on('click', btnClass, function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 600, 'swing');
  });
};
