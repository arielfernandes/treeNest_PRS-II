<template>
	<div class="allTenant row">
		<div class="col-10">
			<div class="description">
				<span> {{ data.name }} </span>
				<button
				v-if="data.id"
				class="btn btn-sm btn-outline-primary"
				@click="openPerfil()"
				>
				<i class="fa fa-external-link-alt"></i>
					view perfil
				</button>
				<!-- div class="col-10">CPF: {{ data.cpf }}</div>
				<div class="col-10">Phone: {{ data.phone }}</div>
				<div class="col-10">E-mail: {{ data.email }}</div>
				<div class="col-10">Contract: {{ data.contract }}</div>
				<div class="col-10">Value: {{ data.value }}</div-->
			</div>
			<small v-date-format="data.createdAt"></small>
		</div>
	</div>
</template>

<script>
export default {
	name: 'allTenant',
	props: {
		data: { type: Object, required: true}
	},
	methods: {
		openPerfil () {
			window.open(this.data.photo, '_blank')
		}
	}
}
</script>

<style scoped>
.allTenant {
	padding-top: 10px;
	padding-bottom: 10px;
	border-bottom: 1px solid lightblue;
}
.description{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
