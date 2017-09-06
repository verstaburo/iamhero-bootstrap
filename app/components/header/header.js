export default() => {
  /*eslint-disable*/
  $(document).on('click', '.header__burger', function () {
    $(this).toggleClass('active');
    $('.sidebar-wrap').toggleClass('active');
  });
};
