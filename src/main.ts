import { createApp } from 'vue';
import App from './App.vue';
import { VueFire } from 'vuefire';
import { firebaseApp } from './api';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(VueFire, { firebaseApp });

app.mount('.app__container');
