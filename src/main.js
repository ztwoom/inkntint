// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faEnvelope, faCheckCircle, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = true;
library.add(faPhoneAlt, faEnvelope, faWhatsapp, faCheckCircle, faCopyright);
import '@fortawesome/fontawesome-svg-core/styles.css';

import './assets/main.css';
import 'typeface-lato';
import InkContainer from '~/components/InkContainer.vue';
import InkGrid from '~/components/InkGrid.vue';

export default function (Vue, { router, head, isClient }) {
  head.script.push({
    src: 'https://unpkg.com/spiritjs/dist/spirit.min.js',
    body: true
  })
  head.script.push({
    src: './spirit.js',
    body: true
  })
  // Set default layout as a global component
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.component('InkContainer', InkContainer)
  Vue.component('InkGrid', InkGrid)
}
