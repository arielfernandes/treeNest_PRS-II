import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
		routes: [{
				name: 'home',
				path: '/',
				meta: { 
					icon: 'home', title: 'Home'},
				component: () => import('../pages/home/Home')
			},
			{
				name: 'profit',
				path: '/listTenant',
				meta: {
					icon: 'list-ul', title: 'List tenant' },
				component: () => import('../pages/list-tenant/listTenant')
			},
			{
					name: 'login',
					path: '/login',
					meta: { title: 'Login' },
				component: () => import('../pages/login/Login')
			},
			{
				name: 'signUp',
				path: '/signUp',
				meta: { title: 'SignUp' },
				component: ()=> import('../pages/createAccount/CreateAccount')
			}
	]

})
router.beforeEach((to, from, next) => {
			document.title = `${to.meta.title} - TreeNest`
			if (!window.uid && to.name != 'login') {
				next({
					name: 'login'
				})
			} else {
				next()
			}

})
export default router
