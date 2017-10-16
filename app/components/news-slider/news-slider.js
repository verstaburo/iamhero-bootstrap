export default () => {
  // eslint-disable-next-line
  const newsSlider = new Swiper('.news-slider', {
    nextButton: '.slider__control_next',
    prevButton: '.slider__control_prev',
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      1280: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });
};
