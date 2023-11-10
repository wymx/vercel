import { defineAsyncComponent } from 'vue'; //异步组挂载器
const homeRoutes = {
  path: '/',
  component: defineAsyncComponent(() => import('@/pages/home/index.vue')),
  children: [
    {
      path: '/',
      component: defineAsyncComponent(() => import('@/pages/home/home/home.vue')),
      meta: {
        isHome: true,
      },
    },
    {
      path: '/home/searchList',
      component: defineAsyncComponent(() => import('@/pages/home/searchList/searchList.vue')),
      meta: {
        // requiresAuth: true,
      },
    }
  ],
};

export default homeRoutes;
