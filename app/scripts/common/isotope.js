/*eslint-disable*/
import Isotope from 'isotope-layout';


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

    var filterValue = event.target.getAttribute('data-filter');

    if (!filterValue) {
      return;
    }

    iso.arrange({
      filter: filterValue,
    });
  });
};
