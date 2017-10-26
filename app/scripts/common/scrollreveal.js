/*eslint-disable*/
export default () => {

  if(!$('.sr-animate').length) {
    return
  }

  window.sr = ScrollReveal({
    distance: '55px',
    viewFactor: 0.5,
  });

  sr.reveal('.sr-animate');
};
