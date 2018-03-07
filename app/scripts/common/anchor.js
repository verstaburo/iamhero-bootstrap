export default function anchor() {
  const $ = window.$;

  $(document).on('click', '.js-anchor', function (e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length > 0) {
      $('body, html').stop().animate({
        scrollTop: target.offset().top + 1,
      }, 1500, 'swing');
    }
  });
}
