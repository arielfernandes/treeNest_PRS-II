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
				name: 'register',
				path: '/register',
				meta: { title: 'Register' },
				component: () => import('../pages/register/Register')
			}
	]

})
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} - Tree Nest`
  
	if (!window.uid && to.name !== 'login' && to.name !== 'register') {
		next({ name: 'login' })
	} else {
		next()
	}
  })
export default router
