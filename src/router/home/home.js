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
        // requiresAuth: true,//是否需要授权登录
      },
    },
  ],
};

export default homeRoutes;
