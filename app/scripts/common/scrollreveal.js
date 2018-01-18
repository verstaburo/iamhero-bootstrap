/*eslint-disable*/
export default () => {

  if (!$('.sr-animate').length) {
    return
  }

  window.sr = ScrollReveal({
    distance: '55px',
    viewFactor: 0.5,
  });

  sr.reveal('.sr-animate');

  const mockup1 = {
    delay: 100,
    distance: '-400px',
    easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)',
    scale: 1,
    mobile: true,
    duration: 1000,
    viewFactor: 0.1,
  };
  const mockup2 = {
    delay: 400,
    distance: '-400px',
    easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)',
    scale: 1,
    mobile: true,
    duration: 1000,
    viewFactor: 0.1,
  };
  const mockup3 = {
    delay: 600,
    distance: '-400px',
    easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)',
    scale: 1,
    mobile: true,
    duration: 1000,
    viewFactor: 0.1,
  };
  const mockup4 = {
    delay: 800,
    distance: '-400px',
    easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)',
    scale: 1,
    mobile: true,
    duration: 1000,
    viewFactor: 0.1,
  };
  const mockup5 = {
    delay: 1000,
    distance: '-400px',
    easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)',
    scale: 1,
    mobile: true,
    duration: 1000,
    viewFactor: 0.1,
  };
  const animateLeft = {
    origin: 'left',
    distance: '50px',
    viewFactor: 0.2,
    duration: 1000,
  };

  sr.reveal('.mockup-1', mockup1);
  sr.reveal('.mockup-2', mockup2);
  sr.reveal('.mockup-3', mockup3);
  sr.reveal('.mockup-4', mockup4);
  sr.reveal('.mockup-5', mockup5);
  sr.reveal('.sr-animate-left', animateLeft);
};
