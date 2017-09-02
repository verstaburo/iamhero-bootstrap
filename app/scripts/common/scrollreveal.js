/*eslint-disable*/
export default () => {
  window.sr = ScrollReveal({
    distance: '55px',
    viewFactor: 0.5,
  });

  if(!$('.sr-animate').length) {
    return
  }

  sr.reveal('.sr-animate');
};
