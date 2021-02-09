<template>
	<div class="tenant">
		<div class="month-navigation">
			<div
			:key="i" 
			class="month-link"
			@click="setActiveMonth(month)"
			v-for="(month, i) in groupedMonths"
			:class="{active: month.month == activeMonth.month}"
			>
				<div class="month-label">{{ month.month}}</div>
			</div>
		</div>
		<div class="container">
			<div v-if="activeMonth.data && !activeMonth.data.length">
				No new tenant
			</div>
			<template v-else>
				<ListTenant :key="index" :data="item" v-for="(item, index) in activeMonth.data"/>
			</template>
		</div>
	</div>
</template>

<script>
import groupBy from 'lodash.groupby'
import moment from 'moment'
import	ListTenant from './Tenant' 
export default {
	name: 'tenant',
	components: {
		ListTenant
	},
	data: () => ({
		register: [],
		activeMonth: {}
	}),
	created () {
		this.getData()
	},
	mounted () {
		this.setActiveMonth()
	},
	computed: {
		groupedMonths () {
			let groupedMonths = []
			const addCurrentMonth = () => {
				groupedMonths.push({
					data: [],
					total: 0,
					month: moment().format('MM/YYYY')
				})
			}
			if (this.register.length) {
				const months = groupBy(this.register, i => 	(
					moment(i.createdAt).format('MM/YYYY')
				))
				const sortMonths = Object.keys(months).sort((a, b) => {
				const pattern = 'MM/YYYY HH'
				return (moment(`${a}`, pattern).isBefore(moment(`${b}`, pattern))) 
					? -1
					: +1
				})
				groupedMonths = sortMonths.map(month => ({
					month,
					data: months[month],
					total: months[month].map(i => +i.value).reduce((a, c) => a + c, 0)
				}))

				const lastMonth = moment(groupedMonths[groupedMonths.length - 1].month, 'MM/YYYY')

				if (!lastMonth.isSame(moment(), 'month')) {
					addCurrentMonth()
				}
			} else {
				addCurrentMonth()
			}
			return groupedMonths 
		}
	},
	methods: {
		getData () {
			const ref = this.$firebase.database().ref(`${window.uid}`)

			ref.on('value', data => {
				const values = data.val()
				this.register = Object.keys(values).map(i => values[i])
			})
	},
	setActiveMonth (month = null) {
		this.activeMonth = month || this.groupedMonths[this.groupedMonths.length - 1]
	},
	}
}

</script>

<style scoped>
.month-navigation {
	display: flex;
	width: calc(100% + 30px);
	background-color: #58e1ab;
	margin-left: -15px;	
}
.month-link {
	padding: 15px;
	cursor: pointer;
	transition: .4s;
	text-align: center;
}
.month-link:hover {
	background-color: lightblue;
}
.active {
	background-color: lightblue;
}
.month-label {
	font-size: 10pt;
}
.container {
	font-size: 15pt;
	padding-top: 15px;
	padding-bottom: 15px;
overflow: hidden auto;
height: calc(100vh - 69px);
}
</style>
