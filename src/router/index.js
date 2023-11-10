import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routers';

const router = createRouter({
  history: createWebHashHistory(), //可传参数，配置base路径，例如'/app'
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  console.log(to, from, next);
  const token = "";
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  // console.log('----------beforeEach---------');
  if (requiresAuth && !token) {
    // console.log('----------Gologin---------');
    next('/login');
  } else {
    // console.log('----------routernext---------');
    next();
  }
});
// router.afterEach((to, from) => {
//   // console.log('----------afterEach---------');
//   console.log(to, from);
// });
export default router;
