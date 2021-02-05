<template>
  <div id="Home">
	<h1 class="title">Tree Nest</h1>
	<div class="row">
		<div class="s-font col-6 home-box">
			<small >Monthly invoicing:</small>
			<div class="m" v-money-format="totals.totalProfit" />
		</div>
		<div class="s-font col-6 home-box">
			<small >Tenants</small>
			<div class="m">{{ totals.totalTenant }}</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
	name: 'Home',
	data: () => ({
		register: []
	}),
	created () {
		this.getData()
	},
	computed: {
		totals () {
			const { register: reg } = this
			const values = {
				totalProfit: 0,
				totalTenant: 0
			}
			//calc tot values
			if (reg.length) {
				values.totalProfit = reg.map(e => +e.value)
					.reduce((acc, cur) => acc + cur, 0)
					values.totalTenant = reg.length
			}
			return values
		}
	},
	methods: {
		getData () {
			const ref = this.$firebase.database().ref(`${window.uid}`)

			ref.on('value', data => {
				const values = data.val()
				this.register = Object.keys(values).map(i => values[i])
			})
		}
	}
}
</script>

<style scoped>
.s-font {
	font-size: 20pt;
}
.home-box {
	margin-top: 40px;
	padding: 10px;
	width: 100%;
	height: calc(50vh - 30px);
			background-color: lightblue;
	}
.title, .home-box {
	display: flex;
	justify-content: center;
    flex-direction: column;
	align-items: center;
}
.title {
	margin-top: 50px;
}
</style>
