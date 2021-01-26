<template>
  <div id="app">
	<router-link to="/login"></router-link>
  </div>
</template>

<script>
export default {
	name: 'App',
	mounted () {
		console.log(this.$firebase)
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
	display: flex;
	flex-direction: column;
	color: #2c3e50;
}
</style>
