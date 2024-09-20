import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Clipboard from '../views/Clipboard.vue';
import LoopStudio from '../views/LoopStudio.vue';

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
      path: '/loop-studio',
      name: 'loop-studio',
      component: LoopStudio,
    },
  ],
});

export default router
