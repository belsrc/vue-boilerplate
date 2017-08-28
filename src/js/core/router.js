import Vue from 'vue';
import Router from 'vue-router';

import App from './components/app.vue';
import Example from './../example';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
    {
      path: '/example',
      name: 'example',
      component: Example,
    },

    // Fallback route
    {
      path: '*',
      redirect: '/',
    },
  ],
});
