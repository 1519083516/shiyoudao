import uView from './uni_modules/uview-ui'
import App from './App'
import api from './common/api'
import store from './store'
import Vue from 'vue'
// 为Vue对象原型添加
// Vue.prototype.$store = store;
Vue.prototype.$api = api;
Vue.config.productionTip = false;
Vue.use(uView)
App.mpType = 'app'
const app = new Vue({
	...store,
    ...App
})
app.$mount()

