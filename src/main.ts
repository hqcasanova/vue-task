import { createApp } from 'vue';
import App from './App.vue';
import { VueFire } from 'vuefire';
import { firebaseApp, fireAppCheck } from './api';
import router from './router';
import './tailwind.css';

const app = createApp(App);

app.use(router);
app.use(VueFire, {
  firebaseApp,
  modules: [fireAppCheck],
});

app.mount('#app');
