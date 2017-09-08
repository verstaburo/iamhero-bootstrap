export default() => {
  /*eslint-disable*/
  $(document).on('click', '.header__burger', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.sidebar-wrap').toggleClass('active');
  });
};
