import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import rangeSliderInit from '../blocks/rangeslider/rangeslider';
import switchInit from '../blocks/switch/switch';
import videoPlay from '../components/plates/video-play';

// eslint-disable-next-line
$(() => {
  objectFitImages();
  svg4everybody();
  rangeSliderInit();
  switchInit();
  videoPlay();
});
