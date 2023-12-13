import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// If you are using any plugins, like router or store, import them here
// import router from './router';
// import store from './store';

// Create the Vue application
const app = createApp(App);

app.use(router);

// Use plugins by calling the `use` method on the app instance
// app.use(router);
// app.use(store);

// Mount the app to the DOM
app.mount('#app');