import ScrollReveal from 'scrollreveal';
/*eslint-disable*/
export default () => {
  window.sr = ScrollReveal({
    origin: 'bottom',
    distance: '55px',
    opacity: 0.5,
  });

  sr.reveal('.sr-skill', 100);

  sr.reveal('.sr-lang', 100);

  sr.reveal('.sr-service', 100);

  sr.reveal('.sr-case', 100);
};
