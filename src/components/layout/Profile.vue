<template>
	<div class="Profile">
		<div class="row">
			<div class="card" style="width: 35vh">
				<img class="card-img-top cardImg" src="./../../assets/img_avatar1.png"  alt="Card image">
					<div class="card-body">
						<div class="card-title">
							<h4 class="card-title">{{ profileTenant.name }} {{ profileTenant.lastname }}</h4>

							<label for="cpf">CPF</label>
							<p class="card-text">{{ profileTenant.cpf }}</p>

							<label for="email">E-mail</label>
							<p class="card-text">{{ profileTenant.email }}</p>

							<label for="phone">Phone</label>
							<p class="card-text">{{ profileTenant.phone }}</p>

							<label for="apt">APT</label>
							<p class="card-text">{{ profileTenant.apt }}</p>

							<label for="contract">Contract month</label>
							<p class="card-text">{{ profileTenant.contract }} month</p>

							<label for="price">Price</label>
							<p class="card-text">R$ {{ profileTenant.price }}</p>
						</div>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
			}
		},
		props: {
			name: String,
			email: String,
			profileTenant: Object
		},
	}
</script>

<style scoped>
.Profile {
	display: flex;
	justify-content: center;
    flex-direction: column;
	align-items: center;

}
.cardImg {
	align-items: center;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.row {
	margin: 0 -5px;
	margin-bottom: 30px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  background-color: #f1f1f1;
}
</style>
