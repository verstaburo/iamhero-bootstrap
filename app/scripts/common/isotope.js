/*eslint-disable*/
export default () => {
  const el = document.querySelector('.isotope');

  if (!el) {
    return;
  }

  const iso = new Isotope(el, {
    itemSelector: '.isotope-item',
    layoutMode: 'masonry',
  });

  // Cases-filter

  const filtersElem = document.querySelector('.plate__head-filters');

  filtersElem.addEventListener('click', function (event) {

    if (!filtersElem) {
      return;
    }

    var selectMobile = document.querySelector('.js-case-filter');

    selectMobile.onchange = function () {
      iso.arrange({
        filter: selectMobile.value,
      });
    }

    const filters = filtersElem.children;

    for (let i = 0; i < filters.length; i++) {
      filters[i].classList.remove('active');
    }

    event.target.classList.add('active');

    var filterValue = event.target.getAttribute('data-filter');

    if(!filterValue) {
      return;
    }

    iso.arrange({
      filter: filterValue,
    });
  });
};
