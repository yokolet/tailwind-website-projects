import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Clipboard from '../views/Clipboard.vue';
import LoopStudios from '../views/LoopStudios.vue';
import Shortly from '../views/Shortly.vue';
import TestimonialGrid from '../views/TestimonialGrid.vue';
import Fylo from '../views/Fylo.vue';
import BookmarkManager from '../views/BookmarkManager.vue';

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
    {
      path: '/shortly',
      name: 'shortly',
      component: Shortly,
    },
    {
      path: '/testimonial-grid',
      name: 'testimonial-grid',
      component: TestimonialGrid,
    },
    {
      path: '/fylo',
      name: 'fylo',
      component: Fylo,
    },
    {
      path: '/bookmark-manager',
      name: 'bookmark-manager',
      component: BookmarkManager,
    },
  ],
});

export default router
