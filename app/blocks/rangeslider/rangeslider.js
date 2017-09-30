// import { debounce } from 'throttle-debounce';

export default () => {
  /*eslint-disable*/
  var $selector = $('input[type="range"]');

  if(!$selector.length) {
    return;
  }

  $selector.rangeslider({
    polyfill: false,
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider_disabled',
    horizontalClass: 'rangeslider_horizontal',
    verticalClass: 'rangeslider_vertical',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',
  });

  function valueOutput(el) {
    var value = el.val();
    var output = el.parents('.rangeslider-wrap').find('.rangeslider-wrap__output');
    if (output.length) {
      output.html(value + '%');
    }
    var outputCustom = el.parents('.rangeslider-wrap').find('.rangeslider-wrap__output-custom');
    if (outputCustom.length) {
      outputCustom.html(value);
      var handlerPosition = outputCustom.siblings('.rangeslider').find('.rangeslider__handle').css('left');
      outputCustom.css('left', handlerPosition);
    }

    var outputCustomPercent = el.parents('.rangeslider-wrap').find('.rangeslider-wrap__output-custom-percent');
    if (outputCustomPercent.length) {
      var outputCustomPercentLabel = outputCustomPercent.siblings('.rangeslider-wrap__label');

      outputCustomPercent.html(value + '%');

      function outputCustomRecalc() {
        var handlerPosition = outputCustomPercent.siblings('.rangeslider').find('.rangeslider__handle').css('left');

        if(parseInt(handlerPosition, 10) < outputCustomPercentLabel.outerWidth() + 15) {
          outputCustomPercent.removeClass('moveable');
        } else {
          outputCustomPercent.addClass('moveable');
          outputCustomPercent.css('left', handlerPosition);
        }
      }

      outputCustomRecalc();

      $(window).on('resize', outputCustomRecalc);
    }
  }

  $selector.each(function() {
    valueOutput($(this));
  })

  $selector.on('input', function() {
    valueOutput($(this));
  });
};
