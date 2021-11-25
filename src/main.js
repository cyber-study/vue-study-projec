import Vue from 'vue'
import VueForm from 'vue-form'
import App from './App.vue'

Vue.use(VueForm);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
