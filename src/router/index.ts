import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Clipboard from '../views/Clipboard.vue';
import LoopStudios from '../views/LoopStudios.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/clipboard',
      name: 'clipboard',
      component: Clipboard,
    },
    {
      path: '/loop-studios',
      name: 'loop-studios',
      component: LoopStudios,
    },
  ],
});

export default router
