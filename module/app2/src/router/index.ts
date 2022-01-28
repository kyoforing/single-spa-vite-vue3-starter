import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PageOne from 'src/views/PageOne.vue';
import PageTwo from 'src/views/PageTwo.vue';

const routes: RouteRecordRaw[] = [
  { path: '/app2', component: PageOne },
  { path: '/app2/page2', component: PageTwo }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
