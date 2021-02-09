<template>
<div class="">
	<form class="form-sign-up">
		<div class="card">
		<div class="card-header text-center">
			<h1>Sign up</h1>
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
	</div>
</template>

<script>
export default {
	name: 'signUp'

}
</script>

<style scoped>
.form-sign-up {
	display: flex;
	justify-content: center;
	align-items: center;

}
</style>
