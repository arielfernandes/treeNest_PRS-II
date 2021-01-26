import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new Router({
	routes: [{
		path: '/login',
		name: 'login',
		component: () => import('./pages/login/login')

	}]

})
