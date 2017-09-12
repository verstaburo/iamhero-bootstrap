export default () => {
  let i = 1;
  const labelsData = [];
// eslint-disable-next-line
  for (i = 1; i <= 30; i++) {
    labelsData.push(i);
  }

  const data = {
    labels: labelsData,
    series: [
      [48, 56, 66, 54, 36, 30, 56, 60, 60, 51, 51, 56],
    ],
  };

  const options = {
    low: 0,
    onlyInteger: true,
  };
// eslint-disable-next-line
  new Chartist.Bar('.activity-meter', data, options);
};
