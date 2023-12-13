import { createRouter, createWebHistory } from 'vue-router';
import ProductPage from '../components/ProductPage.vue';
import App from '../App.vue'; // Assume you have a home page

const routes = [
  { path: '/', component: App },
  { path: '/product/:id', component: ProductPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;