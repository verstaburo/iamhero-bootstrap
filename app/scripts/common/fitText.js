/*eslint-disable*/
import { throttle } from 'throttle-debounce';
export default () => {
  // txt is the text to measure, font is the full CSS font declaration,
  // e.g. "bold 12px Verdana"
  function measureText(txt, font) {
    var id = 'text-width-tester',
      $tag = $('#' + id);
    if (!$tag.length) {
      $tag = $('<span id="' + id + '" style="display:none;font:' + font + ';">' + txt + '</span>');
      $('body').append($tag);
    } else {
      $tag.css({
        font: font
      }).html(txt);
    }
    return {
      width: $tag.width(),
      height: $tag.height()
    }
  }

  window.shrinkToFill = function() {
    var input = $('.responsive-font');

    if (!input.length) {
      return;
    }

    var fontSize = 53,
      fontWeight = 100,
      fontFamily = 'Museo Sans, sans-serif';
    input.each(function() {
      var $input = $(this),
        txt = $input.val() || $input.text(),
        maxWidth = $input.parent().width(), // add some padding
        font = fontWeight + " " + fontSize + "px " + fontFamily;
      // see how big the text is at the default size
      var textWidth = measureText(txt, font).width;
      if (textWidth > maxWidth) {
        // if it's too big, calculate a new font size
        // the extra .9 here makes up for some over-measures
        fontSize = fontSize * maxWidth / textWidth;
        font = fontWeight + " " + fontSize + "px " + fontFamily;
        // and set the style on the input
        $input.css({
          font: font
        });
      } else {
        // in case the font size has been set small and
        // the text was then deleted
        $input.css({
          font: font
        });
      }
    });
  }

  shrinkToFill();

  $(document).on('input', '.responsive-font', throttle(150, shrinkToFill));
};
