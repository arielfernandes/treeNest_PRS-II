<template>
  <div id="App">
	<base-spinner/>
	<LayoutNotification/>
	<div class="container-fluid" v-if="isLogged">
		<div class="row ">
			<div class="col-2 navigation-sidebar">
			<h1 class="sidebar-title">Menu</h1>
			<hr>
				<LayoutNavigation/>
			</div>
			<div class="col">
				<router-view/>
			</div>
		</div>
	</div>
	<router-view v-else/>
</div>
</template>
<script>
import BaseSpinner from './components/global/BaseSpinner'
import LayoutNavigation from './components/layout/LayoutNavigation'
import LayoutNotification from './components/layout/LayoutNotification'


export default {
	name: 'App',
	components: {
		BaseSpinner,
		LayoutNavigation,
		LayoutNotification
	},
	data: () => ({ isLogged: false }),
	mounted () {
		this.$firebase.auth().onAuthStateChanged(user => {
			window.uid = user ? user.uid : null
			this.isLogged = !!user
			this.$router.push({ name: window.uid ? 'home' : 'login' }).catch(()=>{});
			
			setTimeout(() => {
				this.$root.$emit('Spinner::hide')
			}, 300)
		})
	}
}
</script>
<style>

@font-face {
	font-family: "RobotoMono";
	src: url("./fonts/RobotoMono-VariableFont_wght.ttf");
}
* {
	font-family: "RobotoMono", monospace;
}
#app {
  min-height: 100vh;
}

.navigation-sidebar {
	background-color: #6b61ff;
}
.sidebar-title {
	color: white;
	font-size: 20pt;
	margin-top: 10px;
	text-align: center;
}
</style>
