import Vue from 'vue'
import App from './App.vue'
import store from './store'

import List from './components/List'
import PaymentList from './components/PaymentList'
import PaymentForm from "./components/PaymentForm";
import Pagination from "./components/Pagination";

Vue.component('List', List)
Vue.component('PaymentList', PaymentList)
Vue.component('PaymentForm', PaymentForm)
Vue.component('Pagination', Pagination)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
