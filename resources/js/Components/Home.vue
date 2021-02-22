
<template>

	<div class="container"> <!-- Container tag open -->


		<div class="notification purple-bg-light is-bold has-text-black has-text-centered is-size-5" v-if="loadAuthenticated">
			<span class="fa"> Welcome {{ loadAuthUser.name.substring(0,15) }} {{ loadAuthUser.name.length >= 15 ? '...' : '' }} </span>
		</div>



		<div class="columns"> <!-- Columns wrapper tag open -->

			<div class="column"> <!-- First column tag open -->

				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p class="is-bold"> Pending Orders 
							<br>
							<span class="subtitle is-bold"> {{ loadOrderPendingCount }} </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->


				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p class="is-bold"> Restaurants
							<br>
							<span class="subtitle is-bold"> {{ loadAllRestaurants.length }} </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->



			</div> <!-- First column tag close -->


			<div class="column"> <!-- Second column tag open -->

				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p class="is-bold"> Active Orders
							<br>
							<span class="subtitle is-bold"> {{ loadOrderConfirmedCount }} </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->


				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p class="is-bold"> Customers
							<br>
							<span class="subtitle is-bold"> {{ loadUserCount }} </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->



			</div> <!-- Second column tag close -->

			<div class="column"> <!-- Third column tag open -->
							

				<div class="box border-bottom"> 
					<div class="content"> 
						<p class="is-bold"> All Orrders
							<br>
							<span class="subtitle is-bold"> {{ loadAllOrder.length }} </span>
						</p>
					</div> 
				</div> 


				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p class="is-bold"> Promotion
							<br>
							<span class="subtitle is-bold"> {{ loadAllPromo.length }} </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->


			</div> <!-- Third column tag close -->

		</div> <!-- Columns wrapper tag close -->


		<div class="box"> <!-- Box tag open -->

			<span class="columns">

				<div class="column">
	
				</div>


				<div class="column">
					<button class="button is-inline">
						<span class="icon">
							<i class="fas fa-calendar-alt purple-color"></i>
						</span>
						<span> Chart Filter By Date </span>
					</button>
				</div>

			</span>


			<div class="columns"> <!-- Columns wrapper tag open -->

				<div class="column"> <!-- First column tag open -->
					<bar-order-chart :chartdata="orderChartData" :options="optionsOrder"/>
				</div> <!-- First column tag close -->


				<div class="column"> <!-- Second column tag open -->
					<bar-order-chart :chartdata="revenueChartData" :options="optionsRevenue"/>
				</div> <!-- Second column tag close -->


			</div> <!-- Columns wrapper tag close -->


		</div> <!-- Box tag close -->


	</div> <!-- Container tag close -->


</template>

<script>
// Home.vue
import BarOrderChart from "./Chart/barOrderChart.js";
import BarRevenueChart from "./Chart/barRevenueChart.js";
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
	name: 'Home',

	components: {
		'bar-order-chart': BarOrderChart,
		'bar-revenue-chart': BarRevenueChart,
	},

	data: () => ({

		orderChartData: {
			labels: ['July 1', 'July 2', 'July 3', 'July 4'],
			datasets: [
			{
				label: 'Orders',
				backgroundColor: '#BA55D3',
				data: [4000, 6500, 500, 80]
			}
			]
		},

		revenueChartData: {
			labels: ['July 1', 'July 2', 'July 3', 'July 4'],
			datasets: [
			{
				label: 'Revenue',
				backgroundColor: '#BA55D3',
				data: [245, 145, 10, 200]
			}
			]
		},


		optionsOrder: {
			responsive: true,
			maintainAspectRatio: false,



			layout: {
				padding: {
					left: 0,
					right: 35,
					top: 0,
					bottom: 0
				}
			},


			legend: {
				display: true,
				labels: {
					fontColor: 'rgb(255, 99, 132)'
				}
			},

			title: {
				display: true,
				text: 'Total Order Placed: ₦ 578'
			},


/*        scales:
        {
            yAxes: [{
                gridLines : {
                    display : false
                }
            }]
        },*/

    },



    optionsRevenue: {
    	responsive: true,
    	maintainAspectRatio: false,



    	layout: {
    		padding: {
    			left: 0,
    			right: 35,
    			top: 0,
    			bottom: 0
    		}
    	},


    	legend: {
    		display: true,
    		labels: {
    			fontColor: 'rgb(255, 99, 132)'
    		}
    	},

    	title: {
    		display: true,
    		text: 'Total Order Delivered: N245 876 00'
    	},


/*        scales:
        {
            yAxes: [{
                gridLines : {
                    display : false
                }
            }]
        },*/

    },

	}), // Data calibrace close

	mounted() {
		this.fetchUsers()
		this.fetchAllRestaurantDatas()
		this.fetchAllPromoDatas()
		this.fetchPendingOrder()
		this.fetchConfirmOrder()	
		this.fetchAllOrder()
		this.fetchAllOrder()
	},

	methods: {
		...mapActions(["fetchAllRestaurantDatas", "fetchAllPromoDatas", "fetchPendingOrder", "fetchConfirmOrder", 'fetchAllOrder', 'fetchUsers', 'fetchAllOrder']),

		// Local method goes here

	}, // Method calibrace close


	computed: {
		...mapGetters(['loadAllRestaurants', 'loadAllPromo', 'loadAuthenticated', 'loadAuthUser', 'loadUserCount', 'loadOrderPendingCount', 'loadOrderConfirmedCount', 'loadAllOrder', 'loadAllOrder']),

    // Local computed properties

    allRestaurantOrderSum() {
    	let allPrice =  this.$store.getters.loadAllOrder.map(obj => obj.price );
    	let totalOrder = allPrice.reduce((a, b) => a + b ,0)
    	return this.optionsOrder.title.text = 'Total Order Placed: ₦' + totalOrder
    },    

},


}

</script>