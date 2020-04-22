import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import toastRegistry from './components/globalComponents/index'
import {mixin} from './components/mixin/mixin1.js' //全局混入
import * as filters from './components/filter/filter1.js' //全局过滤器

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(toastRegistry);
Vue.mixin(mixin)
Vue.config.productionTip = false
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
