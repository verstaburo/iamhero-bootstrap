/*eslint-disable*/
import { throttle } from 'throttle-debounce';

export default () => {

  var BigTextWizard = {
    init: function() {
      $('.responsive-font').bigtext({
        maxfontsize: 53,
        minfontsize: 14,
        childSelector: '> div'
      });
    },
    _init: function() {
      BigTextWizard.init();
      BigTextWizard.initEditable.call($('.responsive-font').find('> div'));
    },
    initEditable: function() {
      return this.attr({
          contenteditable: true,
          spellcheck: false
        })
        .unbind('keypress keyup')
        .bind('keypress', function(event) {
          var $t = $(this);
          if (event.which == 13) {
            var element;

            if (!event.shiftKey) {
              element = $t.nextAll().eq(0);
              if (!element.length) {
                element = BigTextWizard.initEditable.call($('<div/>')).appendTo($t.parent());
              }
            } else {
              element = $t.prevAll().eq(0);
            }
            return false;
          }
        }).bind('keyup', throttle(250, function() {
          var $t = $(this);

          $t.parent().bigtext({
            maxfontsize: 50,
            minfontsize: 24,
            childSelector: '> div'
          });
        }));
    },
  };

  BigTextWizard._init();

  window.initBigtext = BigTextWizard._init;
};
