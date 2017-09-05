export default () => {
  // eslint-disable-next-line
  const newsSlider = new Swiper('.news-slider', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
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
