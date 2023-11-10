import homeRoutes from './home/home';
import userRoutes from './user/user';
import { defineAsyncComponent } from 'vue'; //异步组挂载器
const routes = [
  {
    path: '/login',
    component: defineAsyncComponent(() => import('@/pages/login.vue')),
  },
  userRoutes,
  homeRoutes,
]; //end

export default routes;
