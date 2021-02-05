<template>
	<div>
		<form @submit.prevent="doLogin()" class="form-login">
			<div class="card">
			<div class="card-header text-center">
				<h1> Tree Nest</h1>
			</div>
				<div class="card-body">
					<div class="form-group">
						<input
						required
						type="email"
						v-model="email"
						class="form-control"
						placeholder="E-mail">
					</div>
					<div class="form-group">
						<input
						required
						v-model="password"
						type="password"
						class="form-control"
						placeholder="Password">
					</div>
					<button class="btn btn-primary btn-block" :disabled="loading">
						<template v-if="loading">
							Logando
							<i class="fa fa-spinner fa-spin"></i>
						</template>
						<template v-else>
							Sing in
							<i class="fa fa-sign-in-alt"></i>
						</template>
					</button>
				</div>
			</div>
		</form>
		<button>
		
			<router-link to="/signUp" custom v-slot="{ navigate }">
				<span @click="navigate" role="link">link</span>
			</router-link>
		</button>
	</div>
</template>

<script>
export default {
	name: 'login',
	data: () => ({
			loading: false,
			email: '',
			password: ''
		}),
	methods: {
		async doLogin() {
			this.loading = true
			const { email, password } = this
			try {
				const res = await this.$firebase
					.auth()
					.signInWithEmailAndPassword(email, password)
				
				window.uid = res.user.uid
				this.$router.push({ name: 'home' })
			}catch (err) {
				let message = ''
				switch (err.code) {
					case 'auth/user-not-found':
						message = 'Não foi possível localizar o usuário.'
						break
					case 'auth/wrong-password':
						message = 'Senha inválida'
						break
					default:
						message = 'Não foi possível fazer login, tente novamente'
					}
					this.$root.$emit('Notification::show', {
					message,
					type: 'danger'
				})
			}
			this.loading = false
		}
	},

	beforeRouteEnter(to, from, next) {
		next(vm => {
			if (window.uid) {
				vm.$router.push({ name: 'home' })
			}
		})
	},
	computed: {
		routerLinks () {
			return this.$router.options.routes.filter(r => (r.name == 'signUp'))
		}
	}
}
</script>

<style scoped>
h1 {
	font-size: 30pt;
}
.form-login {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	.card {
		width: 30%;
	}
}
.signUp {
	display: flex;
	justify-content: center;
	align-items: center;
}

</style>

