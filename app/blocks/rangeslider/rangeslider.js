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

  function valueOutput() {
    var value = $(this).val();
    var output = $(this).parents('.rangeslider-wrap').find('.rangeslider-wrap__output');
    if (output.length) {
      output.html(value + '%');
    }

    var outputSalary = $(this).parents('.rangeslider-wrap').find('.rangeslider-wrap__output-salary');
    if (outputSalary.length) {
      outputSalary.html(value + ' $/h');
    }

    var outputCustom = $(this).parents('.rangeslider-wrap').find('.rangeslider-wrap__output-custom');
    if (outputCustom.length) {
      outputCustom.html(value);
      var handlerPosition = outputCustom.siblings('.rangeslider').find('.rangeslider__handle').css('left');
      outputCustom.css('left', handlerPosition);
    }
  }

  $selector.each(valueOutput);

  $(document).on('input', 'input[type="range"]', valueOutput);
};
