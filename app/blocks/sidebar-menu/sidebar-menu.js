export default () => {
  /*eslint-disable*/

  $('.sidebar-menu').stick_in_parent({
    offset_top: 50,
    parent: '.row',
    spacer: false,
    inner_scrolling: false
  });
};
