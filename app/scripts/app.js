import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import rangeSliderInit from '../blocks/rangeslider/rangeslider';
import switchInit from '../blocks/switch/switch';

// eslint-disable-next-line
$(() => {
  objectFitImages();
  svg4everybody();
  rangeSliderInit();
  switchInit();
});
