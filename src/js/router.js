import { Router } from '@vaadin/router';

const routes = [
  {
    path: '/',
    component: 'login-page'
  },
  {
    path: '/overview',
    component: 'app-template'
  },
  {
    path: '/overview/:day',
    component: 'day-page'
  },
  {
    path: '/admin',
    component: 'admin-template'
  },
];

const app = document.querySelector('#app');
export const router = new Router(app);
router.setRoutes(routes);