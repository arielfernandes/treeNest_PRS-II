<template>
	<button class="btn btn-logout" @click="logout()">
	<i class="fa fa-sign-out"></i>
		Logout
	</button>
</template>

<script>
export default {
	methods: {
		async logout () {
			this.$root.$emit('Spinner::show')

			await this.$firebase.auth().signOut()
			this.$router.push({ name: 'login' })

			this.$root.emit('Spinner::hide')
		} 
	}

}
</script>

<style scoped>
.btn-logout {
	width: 100%;
	cursor: pointer;
	color: white;
	
}
</style>
