

<template>
	

	<div class="container"> <!-- Container tag open -->

		<div class="columns"> <!-- Columns wrapper tag open -->


			<div class="column"> <!-- column tag open-->

				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p> 
							<span> Total Amount </span>
							<br>
							<span class="is-bold"> To Restaurant For Online Orders </span> 
							<br>
							<span class="subtitle is-bold purple-color"> ₦{{ allRestaurantOrderSum }} </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->

			</div> <!-- column tag close -->


			<div class="column"> 

				<div class="box border-bottom"> 
					<div class="content"> 
						<p> 
							<span> Total Amount </span>
							<br>
							<span class="is-bold"> Total Income </span> 
							<br>
							<span class="subtitle is-bold purple-color"> ₦{{ sumOrder }} </span>
						</p>
					</div> 
				</div> 

			</div> 

		</div> <!-- Columns wrapper tag close -->


		<div class="card"> <!-- Card tag open -->

			<div class="card-content table-container"> <!-- Card content tag open -->


				<!-- Main container -->
				<nav class="level">
					<!-- Left side -->
					<div class="level-left">

						<div class="level-item">
							<div class="field has-addons">
								<p class="control">
									<input class="input" type="text" placeholder=" Search By ID" v-model="searchQuery" v-on:keyup="searchMethod">
								</p>
								<p class="control">
									<button class="button purple-bg has-text-white">
										Search 
									</button>
								</p>
							</div>
						</div>
					</div>



					<!-- Right side -->
					<div class="level-right">

						<div class="tabs is-toggle level-item">
							<ul>

								<li v-on:click="refresh">
									<a>
										<span class="icon is-small"><i class="fas fa-sync-alt  purple-color" v-bind:class="{ 'fa-spin': spin }" aria-hidden="true"></i></span>
										<span>  Refresh</span>
									</a>
								</li>
							</ul>
						</div>    	

					</div>
				</nav>



				<table class="table is-bordered is-striped is-hoverable"> <!-- Table tag open -->

					<thead>
						<tr>
							<th> <span class="purple-color"> Order No </span> </th>
							<th> <span class="purple-color"> Restaurant Name </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Customer Name </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Order Delivery Date </span> </th>
							<th> <span class="purple-color"> Delivery Charges </span> </th>
							<th> <span class="purple-color"> Order Amount </span> </th>
							<th> <span class="purple-color"> Total Amount </span> </th>
							<th> <span class="purple-color"> Payment Status </span> </th>
						</tr>
					</thead>

					<tbody>

						<tr v-for="order in searchQuery.length  > 1  ? loadOrderSearch : loadOrderHistory">
							<th> <span class="purple-color"> {{ order.order_id }} </span> </th>
							<td> {{ order.restaurant_name }} </td>
							<td> {{ order.name }} </td>
							<td> <span class="has-text-centered"> {{ order.updated_at | format('D MMM YYYY - h:mm A') }} </span> </td>
							<td> <span class="has-text-centered"> ₦{{ order.order_charge }} </span> </td>
							<td> <span class="has-text-centered"> ₦{{ order.price }} </span> </td>
							<td> <span class="has-text-centered"> ₦{{ order.price_summary }} </span> </td>
							<td> <span class="purple-color is-bold"> {{ order.payment }} </span> </td>	
						</tr>

					</tbody>

				</table> <!-- Table tag close -->


				<!-- Pagination section -->
				<div class="buttons has-addons is-centered" v-if="loadOrderHistory.length >= 1">
					<a class="button" v-if="loadOrderPagination.previousPageUrl" @click="paginationHandler(loadOrderPagination.previousPageUrl)">
						<span class="icon is-small">
							<i class="fas fa-arrow-left purple-color"></i>
						</span>
						<span> Previous </span>
					</a>


					<a class="button">

						{{ loadOrderPagination.to }} 0f {{ loadOrderPagination.total }}
					</a>


					<a class="button" v-if="loadOrderPagination.nextPageUrl" @click="paginationHandler(loadOrderPagination.nextPageUrl)">
						<span class="icon is-small">
							<i class="fas fa-arrow-right purple-color"></i>
						</span>
						<span> Next </span>
					</a>
				</div>


			</div> <!-- Card content tag open -->


		</div> <!-- Card tag close -->



		<div class="card" v-if="loadOrderHistory.length <= 0">
			<div class="card-content">
				<div class="content is-bold has-text-centered subtitle">
					<span class="fa"> No order found  </span>
				</div>
			</div>
		</div>


	</div> <!-- Container tag close -->


</template>




<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

	data: () => ({
		spin: false,
		searchQuery: '',
	}),

	created() {
		this.fetchHistoryOrder()
		this.fetchAllOrder()
	},

	methods: {
		...mapActions(['fetchHistoryOrder', 'searchOrder', 'fetchAllOrder', 'fetchAllOrder']),
		// Local method
		refresh() {
			this.spin = true
			this.fetchHistoryOrder().then(() => this.spin = false)
			this.searchQuery = ""
			this.searchOrder(this.searchQuery)
		},

		paginationHandler(uri) {
			this.fetchHistoryOrder(uri)
		},

		searchMethod() {
			if(this.searchQuery > 1) {
				this.searchOrder(this.searchQuery)
			}
		},

	},


	computed: {
		...mapGetters(['loadOrderHistory', 'loadOrderLoader', 'loadOrderNotification', 'loadOrderPagination', 'loadOrderSearch', 'loadAuthUser', 'loadAuthRole', 'loadAllOrder']),

    // Local computed properties

    allRestaurantOrderSum() {
    	let allPrice =  this.$store.getters.loadAllOrder.map(obj => obj.price );
    	let TotalOrder = allPrice.reduce((a, b) => a + b ,0)
    	return TotalOrder
    },

    sumOrder() {
    	let allPrice =  this.$store.getters.loadAllOrder.map(obj => obj.price_summary );
    	let sum = allPrice.reduce((a, b) => a + b ,0)
    	return sum
    }


},


}

</script>


