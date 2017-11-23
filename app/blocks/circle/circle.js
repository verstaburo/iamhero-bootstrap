export default () => { /*eslint-disable*/
  const circle = $('.circle');
  const lazyCircle = $('.circle-lazy');

  if(!circle.length && !lazyCircle.length) {
    return;
  }

  let inited = false;

  circle.circleProgress({
    fill: '#ffc425',
    emptyFill: '#e1e9ec',
    startAngle: -Math.PI / 2,
    thickness: 10,
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('span').text(Math.round(100 * stepValue) + '%');
  });

  lazyCircle.appear({
    force_process: true,
  });

  lazyCircle.on('appear', function() {
    if (!inited) {
      lazyCircle.circleProgress({
        fill: '#ffc425',
        emptyFill: '#e1e9ec',
        startAngle: -Math.PI / 2,
      }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('span').text(Math.round(100 * stepValue) + '%');
      });
      inited = true;
    }
  });
};
