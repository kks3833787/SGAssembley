import Vue from 'vue/dist/vue.min';
import ajax from 'vue-h-ajax';
import router from 'vue-h-router';
import routes from './routes';
import app from './views/app.vue';


Vue.use(router);
Vue.use(ajax);

router.init(routes);

// eslint-disable-next-line no-new
new Vue(app);
