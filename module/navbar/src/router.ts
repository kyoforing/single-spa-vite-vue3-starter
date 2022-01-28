import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Welcome from 'src/WelcomePage.vue';

const routes: RouteRecordRaw[] = [{ path: '/', component: Welcome }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
