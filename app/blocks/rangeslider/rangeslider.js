export default () => {
  /*eslint-disable*/
  var $document = $(document);
  var $selector = $('input[type="range"]');

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
    var output = el.parents('.rangeslider-wrap').find('.rangeslider-wrap__output');
    var value = el.val();
    output.html(value+'%');
  }

  valueOutput($selector);

  $selector.on('input', function () {
    valueOutput($(this));
  });
};
