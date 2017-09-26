import { debounce } from 'throttle-debounce';
/*eslint-disable*/
export default () => {
  const el = $('.js-sidebar');

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
    if (!topMenu.length) {
      return;
    }

    var lastId,
      topMenuHeight = topMenu.outerHeight(),
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
        offsetTop = href === "#" ? 0 : $(window).width()>1280 ? $(href).offset().top - 100 : $(href).offset().top - 57;
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

  $(document).on('click', '.sidebar-menu__item', function() {
    if ($(window).width() < 1280) {
      $('.sidebar-wrap, .header__burger').removeClass('active');
    }
  });
};
