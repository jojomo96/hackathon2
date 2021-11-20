import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-Router'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
