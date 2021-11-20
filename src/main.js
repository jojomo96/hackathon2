import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Main from './components/Main.vue'

Vue.config.productionTip = false

const routes = [{ path: '/', component: Login },
{path: '/main', component: Main}]

const router = new VueRouter({
  routes
});
Vue.use(VueRouter);
new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
