import router from 'vue-h-router';
import HomePageView from './views/home-page.vue';
import NotFound from './views/404.vue';


export default [
  {
    url: '/',
    component: HomePageView
  },
  {
    url: '',
    redirect: '/'
  },
  {
    url: '.*',
    component: NotFound
  }
];
