<template>
	<nav class="nav flex-column justify-content-between">
		<div>
			<router-link
				exact
				:key="i"
				exact-active-class="active"
				class="nav-link"
				:to="{ name: router.name }"
				v-for="(router, i) in routerLinks"
			>
			<i class="fa" :class="`fa-${router.meta.icon}`"></i>
			{{ router.meta.title }}
			</router-link>	
			<hr>
			<LayoutNewTenant/>
		</div>
		<LayoutLogout/>
	</nav>
</template>

<script>
import LayoutLogout from './LayoutLogout'
import LayoutNewTenant from './LayoutNewTenant'
export default {
	components: {
		LayoutLogout,
		LayoutNewTenant
	},
	computed: {
		routerLinks () {
			return this.$router.options.routes.filter(r => (r.name !== 'login') && (r.name !== 'register'))
		}
	}
}
</script>

<style scoped>
.nav {
	margin-left: -15px;
	width: calc(100% + 30px);
	height: calc(100vh - 120px);
	background-color: #6b61ff;
}
.nav-link {
	color: white;
	font: 20pt;
	transition: .4s;
}
&.active {
	color: lightblue;
	background: transparent;
}
.nav-link:hover {
	color: gray;
	background-color: lightblue;
}
</style>

