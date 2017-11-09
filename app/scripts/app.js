import rangeSlider from '../blocks/rangeslider/rangeslider';
import switchToggle from '../blocks/switch/switch';
import videoPlay from '../components/plates/video-play';
import isotope from './common/isotope';
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
import activityChart from '../blocks/activity-chart/activity-chart';
import messages from '../components/messages/messages';
import checkbox from '../blocks/checkbox/checkbox';
import radio from '../blocks/radio/radio';
import sideModal from '../blocks/side-modal/side-modal';
import jobListing from '../pages/job-listing/job-listing';
import shortlist from '../pages/shortlist/shortlist';
import suggestedJobs from '../pages/suggested-jobs/suggested-jobs';
import magnificPopup from './common/magnificPopup';
import tooltip from './common/tooltip';
import countdown from '../blocks/countdown/countdown';

/* eslint-disable*/
$(() => {
  objectFitImages();
  svg4everybody();
  header();
  toTop();
  rangeSlider();
  window.initRangeSlider = rangeSlider;
  switchToggle();
  window.initSwitch = switchToggle;
  videoPlay();
  isotope();
  window.initIsotope = isotope;
  stickyNavbar();
  scrollRevealInit();
  upload();
  innerCard();
  companyVideo();
  map();
  innerHeader();
  select();
  window.initSelect = select;
  newsSlider();
  heroSlider();
  fitText();
  jsProgress();
  activityChart();
  messages();
  checkbox();
  window.checkboxInit = checkbox;
  radio();
  window.radioInit = radio;
  sideModal();
  jobListing();
  shortlist();
  suggestedJobs();
  magnificPopup();
  window.initPopup = magnificPopup;
  tooltip();
  window.initTooltip = tooltip;
  countdown();
});
