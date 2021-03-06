export default () => {
  // eslint-disable-next-line
  const heroSlider = new Swiper('.hero-slider', {
    nextButton: '.slider__control_next',
    prevButton: '.slider__control_prev',
    slidesPerView: 4,
    spaceBetween: 35,
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 1,
      },
    },
  });
};
