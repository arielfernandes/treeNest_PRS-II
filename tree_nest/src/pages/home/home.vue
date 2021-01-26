<template>
  <div id="home">
	<div id="p-main">
		<h1 id="title">{{ title }}</h1>
			<Search />
		<div class="hideForm" @click="hideForm"><ButtonAdd/></div>
		<div id="myDIV" style="visibility: hidden; display: none; height: 0vh;">
			<Register />
		</div>
		<div class="btn-profile">
			<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo" style="padding:10px;width: 35vh;">
				Show all tenants
			</button>
		</div>
		<div id="demo" class="collapse">
			<Profile :profileTenant="profileTenant"/>
			<Profile :profileTenant="profileTenant"/>
			<Profile :profileTenant="profileTenant"/>
			<Profile :profileTenant="profileTenant"/>
		</div>
	</div>
  </div>
</template>

<script>
import Register from '../home/components/Register.vue'
import ButtonAdd from '../home/components/ButtonAdd.vue'
import Search from '../home/components/Search.vue'
import Profile from '../home/components/Profile.vue'


export default {
	name: 'App',
	data: () => {
		return {
			title: 'Tree Nest',
			profileTenant: {
				name: "Ariel",
				lastname: "Fernandes",
				email: 'ariel@treenest.com',
				apt: 104,
				cpf: '091.785.929-41',
				phone: '(48) 90000-0000',
				photo: 'url',
				price: '600,00',
				contract: '3'

			},
			}
		},
	methods: {
		hideForm() {
			let x = document.getElementById('myDIV');
			if (x.style.visibility === 'hidden') {
				x.style.visibility = 'visible';
				x.style.display = '';
				x.style.height = '';
			} else {
				x.style.visibility = 'hidden';
				x.style.display = 'none';
				x.style.height = '0vh';
			}
		}
	},
	components: {
		Register,
		ButtonAdd,
		Search,
		Profile
	},
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
#home {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	color: #2c3e50;
}
#p-main {
	margin-top: 80px;
}

#title {
	text-align: center;
}
#title, #myDIV {
	margin: 20px;
	margin-bottom: 30px;
}
.btn-profile {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
}
#demo {
	margin-top: -5px;
}
</style>
