import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

// Add the imported icon(s) to the library
library.add(faSquareGithub, faLinkedin);

const app = createApp(App);

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
