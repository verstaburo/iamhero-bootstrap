/* eslint-disable*/
import rangeSliderInit from '../blocks/rangeslider/rangeslider';
import switchInit from '../blocks/switch/switch';
import videoPlay from '../components/plates/video-play';
import isotopeInit from './common/isotope';
import stickyNavbar from '../blocks/sidebar-menu/sidebar-menu';
import scrollRevealInit from './common/scrollreveal';
import upload from '../blocks/upload/upload';
import innerCard from '../blocks/inner-card/inner-card';
import companyVideo from '../blocks/company-video/company-video';
import map from '../blocks/map/map';
import innerHeader from '../components/inner-header/inner-header';
import select from '../blocks/select/select';

$(() => {
  objectFitImages();
  svg4everybody();
  rangeSliderInit();
  switchInit();
  videoPlay();
  isotopeInit();
  stickyNavbar();
  scrollRevealInit();
  upload();
  innerCard();
  companyVideo();
  map();
  innerHeader();
  select();
});
