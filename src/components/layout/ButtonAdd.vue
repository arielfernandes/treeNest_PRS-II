<template>
	<div class="addButton">
		<button class="btn btn-style" type="button" ><img src="./../../assets/add_circle.svg" id="add_circle"> Add Tenant</button>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped>
.addButton {

	display: flex;
	justify-content: center;
    flex-direction: column;
	align-items: center;
}
#add_circle {
	width: 25px;
}
button{
	border: none;
	background-color: #6b61ff;
	color: white;
}
</style>
