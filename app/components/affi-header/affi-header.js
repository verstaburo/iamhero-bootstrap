export default () => {
  const $ = window.$;
  const w = $(window);
  const header = $('.affi-header__fixed');

  if (!header.length) {
    return;
  }

  w.on('scroll', () => {
    if (w.scrollTop() > 51) {
      header.addClass('active');
    } else {
      header.removeClass('active');
    }
  });
};
