export default () => {
  // eslint-disable-next-line
  const heroSlider = new Swiper('.hero-slider', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
    },
  });
};
