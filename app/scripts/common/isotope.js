/*eslint-disable*/
export default () => {
  const grid = $('.isotope');
  const mobileFilterClass = '.js-case-filter-mobile';
  const filterClass = '.js-case-filter';

  if (!grid.length) {
    return;
  }

  grid.isotope({
    itemSelector: '.isotope-item',
    layoutMode: 'masonry',
  });

  $(document).on('change', mobileFilterClass, function() {
    grid.isotope({
      filter: $(mobileFilterClass).val()
    });
  });

  $(document).on('click', filterClass, function() {
    $(filterClass).removeClass('active');
    $(this).addClass('active');

    grid.isotope({
      filter: $(this).attr('data-filter')
    });
  });
};
