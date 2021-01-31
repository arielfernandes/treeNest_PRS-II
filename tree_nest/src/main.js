import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import FirebaseVue from './firebase'
import router from './router/router'
import './utils/directives'

Vue.use(FirebaseVue)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
