import 'sticky-kit/dist/sticky-kit';
import { debounce } from 'throttle-debounce';
/*eslint-disable*/

export default () => {
  const el = $('.sidebar-wrap');

  const stickyInit = () => {

    if ($(window).width() < 1280 || !el.length) {
      el.trigger('sticky_kit:detach');
      return;
    }

    // el.trigger('sticky_kit:detach');
    el.stick_in_parent({
      offset_top: 100,
      parent: '.row',
    });
  };

  stickyInit();
  $(window).resize(debounce(200, false, stickyInit));

  const scrollSpyInit = () => {
    // Cache selectors
    var topMenu = $(".sidebar-menu");
    if ($(window).width() < 1280 || !topMenu.length) {
      return;
    }

    var lastId,
      topMenuHeight = topMenu.outerHeight() + 15,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
          return item;
        }
      });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e) {
      var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
      $('html, body').stop().animate({
        scrollTop: offsetTop
      }, 500);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function() {
      // Get container scroll position
      var fromTop = $(this).scrollTop() + topMenuHeight;

      // Get id of current scroll item
      var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
          return this;
      });
      // Get the id of the current element
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";

      if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
          .parent().removeClass("active")
          .end().filter("[href='#" + id + "']").parent().addClass("active");
      }
    });
  };

  scrollSpyInit();
  $(window).resize(debounce(300, false, scrollSpyInit));
};
