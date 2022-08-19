import './libraries/polyfills';

import alertInit from './blocks/alert';
import documentInit from './blocks/document';

document.addEventListener('DOMContentLoaded', () => {
  mobileDetect();

  if (document.querySelector('.alert__close-btn')) {
    console.log('init Alert Success');
    alertInit();
  }
  documentInit();
});
