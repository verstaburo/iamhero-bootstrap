// import 'sticky-kit/dist/sticky-kit';
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import rangeSliderInit from '../blocks/rangeslider/rangeslider';
import switchInit from '../blocks/switch/switch';
import videoPlay from '../components/plates/video-play';
import isotopeInit from './common/isotope';
import buttonDropdown from '../blocks/button-dropdown/button-dropdown';
import stickyNavbar from '../blocks/sidebar-menu/sidebar-menu';
import scrollRevealInit from './common/scrollreveal';

// eslint-disable-next-line
$(() => {
  objectFitImages();
  svg4everybody();
  rangeSliderInit();
  switchInit();
  videoPlay();
  isotopeInit();
  buttonDropdown();
  stickyNavbar();
  scrollRevealInit();
});
