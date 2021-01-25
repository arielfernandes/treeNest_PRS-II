<template>
	<div class="register">
			<div class="container">
				<form class="row g-3 needs-validation" id="register" novalidate>
					<div class="col-md-6">
						<label for="validationCustom01" class="form-label">First name</label>
						<input type="text" class="form-control" id="validationCustom01" placeholder="First" required>
						<div class="valid-feedback">
						</div>
					</div>
					<div class="col-md-6">
						<label for="validationCustom02" class="form-label">Last name</label>
						<input type="text" class="form-control" id="validationCustom02" placeholder="Last" required>
						<div class="valid-feedback">
						</div>
					</div>
					<div class="col-md-6">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<div class="input-group has-validation">
							<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@ex.com">
						</div>
					</div>
						<div class="col-md-6">
							<label for="validationAPT" class="form-label">APT Number</label>
							<input type="number" class="form-control" id="validationAPT" required>
						</div>
						<div class="form-goup col-md-6">
							<label>CPF</label>
							<input id="cpf" type="text" class="form-control" v-mask="['###.###.###-##']" placeholder="000.000.000-00" required>
						</div>
						<div class="form-group col-md-6">
							<label>Phone</label>
							<input type="text" class="form-control" v-mask="['(##) ####-####', '(##) #####-####']" placeholder="(00)0000-0000">
						</div>
						<div class="form-group col-md-6" >
							<label for="myfile">Photo</label>
							<input type="file" id="myfile" name="myfile" style="font-size: 12px;">
						</div>
						<div class="col-md-6">
							<label for="validationPrice" class="form-label">Price</label>
							<input type="number" class="form-control" id="validationPrice" min="1" placeholder="0.00" required>
						</div>
						<div class="col-md-6">
							<label for="validationContract" class="form-label">Contract</label>
							<input type="number" class="form-control" id="contract" min="1" placeholder="month" required>
						</div><hr class="hr-size">
							<button class="btn btn-primary btn-m" type="submit">Submit form</button>
				</form>
			</div>
	</div>
</template>

<script>
import {mask} from 'vue-the-mask'
	export default {
		data: () => {
			return {
			}
		},
		directives: {mask}
	}
</script>

<style>
#register, .addButton, .search, .Profile{
	display: flex;
	justify-content: center;
    flex-direction: column;
	align-items: center;

}
#register {
	line-height: 1.6;
}
.hr-size {
	max-width: 0 auto;
}
.btn-m {
	margin: 20px;
	margin-bottom: 40px;
}
</style>
