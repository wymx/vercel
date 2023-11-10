import { defineAsyncComponent } from 'vue'; //异步组挂载器
const userRoutes = {
  path: '/user',
  component: defineAsyncComponent(() => import('@/pages/user/index.vue')),
  children: [
    {
      path: '/user',
      name: '会员首页',
      component: defineAsyncComponent(() => import('@/pages/user/user/user.vue')),
      meta: {
        requiresAuth: true,
      },
    },
  ],
};

export default userRoutes;
