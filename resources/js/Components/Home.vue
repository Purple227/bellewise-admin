
<template>

	<div class="container"> <!-- Container tag open -->

		<div class="columns"> <!-- Columns wrapper tag open -->

			<div class="column"> <!-- First column tag open -->

				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p class="is-bold"> Pending Orders 
							<br>
							<span class="subtitle is-bold"> 237 </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->


				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p class="is-bold"> Restaurants
							<br>
							<span class="subtitle is-bold"> 42 </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->



			</div> <!-- First column tag close -->


			<div class="column"> <!-- Second column tag open -->

				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p class="is-bold"> Active Orders
							<br>
							<span class="subtitle is-bold"> 164 </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->


				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p class="is-bold"> Categories
							<br>
							<span class="subtitle is-bold"> 30 </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->



			</div> <!-- Second column tag close -->

			<div class="column"> <!-- Third column tag open -->
				
				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p class="is-bold"> Unfulfilled Orders
							<br>
							<span class="subtitle is-bold"> 77 </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->


				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p class="is-bold"> Promotion
							<br>
							<span class="subtitle is-bold"> 10 </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->



			</div> <!-- Third column tag close -->


		</div> <!-- Columns wrapper tag close -->


<div class="box"> <!-- Box tag open -->

		<span class="columns">

			<div class="column">
				<input id="my-element" type="date" data-display-mode="dialog"  data-close-on-select="false" data-color="info">
			</div>


			<div class="column">
				<button class="button is-inline">
					<span class="icon">
						<i class="fas fa-calendar-alt purple-color"></i>
					</span>
					<span> Filter Chart By Date</span>
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
import BulmaCalendar from "../Mixins/bulmaCalendar.js";

export default {
	name: 'Home',

	mixins: [
	BulmaCalendar
	],

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
            text: 'Total Order Placed: 6545'
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
            text: 'Total Order Delivered: N245 876 00 '
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





	}),







}

</script>