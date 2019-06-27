// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

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
  Vue.component('InkContainer', InkContainer)
  Vue.component('InkGrid', InkGrid)
}
