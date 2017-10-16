export default () => {
  /*eslint-disable*/
  var ctxEl = document.getElementById("activityChart");

  if(!ctxEl) {
    return;
  }

  var ctx = ctxEl.getContext('2d');

  let i = 1;
  const labelsData = [];
  for (i = 1; i <= 30; i++) {
    labelsData.push(i);
  }

  const dataSet = [48, 56, 66, 54, 36, 30, 56, 60, 60, 51, 51, 56];

  var customTooltips = function(tooltip) {
    $(this._chart.canvas).css("cursor", "pointer");

    var positionY = this._chart.canvas.offsetTop;
    var positionX = this._chart.canvas.offsetLeft;

    $(".chartjs-tooltip").css({
      opacity: 0,
    });

    if (!tooltip || !tooltip.opacity) {
      return;
    }

    if (tooltip.dataPoints.length > 0) {
      tooltip.dataPoints.forEach(function(dataPoint) {
        var content = dataPoint.yLabel;
        var $tooltip = $("#tooltip-" + dataPoint.datasetIndex);

        $tooltip.html(content);
        $tooltip.css({
          opacity: 1,
          top: positionY + dataPoint.y + "px",
          left: positionX + dataPoint.x + "px",
        });
      });
    }
  };

  var activityChart = new Chart(ctx, {
    type: 'bar',
    data: {

      labels: labelsData,

      datasets: [{
        data: dataSet,
        backgroundColor: 'rgba(255, 255, 255, .28)',
        borderColor: 'rgba(255, 255, 255, .5)',
        hoverBackgroundColor: '#fff',
        hoverBorderColor: '#fff',
        borderWidth: 1,
        borderSkipped: 'bottom',
      }],
    },

    options: {
      responsive: true,

      title: {
        display: false,
      },

      legend: {
        display: false,
      },

      tooltips: {
        enabled: false,
        mode: 'index',
        intersect: false,
        custom: customTooltips,
      },

      scales: {

        xAxes: [{
          barThickness: '6',

          barPercentage: '0',

          categoryPercentage: '0',

          gridLines: {
            display: false,
            color: 'rgba(255,255,255,.28)',
          },

          ticks: {
            fontColor: '#fff',
            fontSize: '9',
            fontFamily: 'Open Sans, sans-serif',
          },
        }],

        yAxes: [{
          gridLines: {
            display: false,
            color: '#fff',
          },
          ticks: {
            display: false,
            beginAtZero: true,
          },
        }],
      },
    },
  });
};
