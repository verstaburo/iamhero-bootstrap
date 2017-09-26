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
import newsSlider from '../components/news-slider/news-slider';
import heroSlider from '../components/hero-slider/hero-slider';
import fitText from './common/fitText';
import header from '../components/header/header';
import toTop from '../blocks/to-top/to-top';
import jsProgress from '../blocks/js-progress/js-progress';
import activityMeter from '../blocks/activity-meter/activity-meter';
import messages from '../components/messages/messages';
// import jobCard from '../blocks/job-card/job-card';
import fullBtn from './common/fullBtn';

/* eslint-disable*/
$(() => {
  objectFitImages();
  svg4everybody();
  header();
  toTop();
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
  newsSlider();
  heroSlider();
  fitText();
  jsProgress();
  activityMeter();
  messages();
  // jobCard();
  fullBtn();
});
