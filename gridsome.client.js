import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faEnvelope, faCheckCircle, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = true;
library.add(faPhoneAlt, faEnvelope, faWhatsapp, faCheckCircle, faCopyright);

export default function (Vue) {
    Vue.component('font-awesome', FontAwesomeIcon)
};