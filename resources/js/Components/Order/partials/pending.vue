

<template>

	<div>


		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadOrderLoader }"><span class="title"> Bellewise loading </span></div>


		<div class="notification purple-bg-light is-bold has-text-black" v-if="loadOrderNotification">
			Task Succeesful
		</div>

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



		<div class="columns is-multiline"> <!-- Columns wrapper tag open -->

			<div class="column is-6" v-for="order in searchQuery.length  > 1  ? loadOrderSearch : loadOrderPending"> <!-- column tag open-->

				<article class="message">
					<div class="message-body">

						<p class="is-bold purple-color">
							{{ order.order_id }}
						</p>
						
						<!-- Main container -->
						<nav class="level">
							<!-- Left side -->
							<div class="level-left">
								<div class="level-item">
									<p class="">
										{{ order.tags.length }} Item In Cart
									</p>
								</div>
							</div>

							<!-- Right side -->
							<div class="level-right">
								<p class="level-item"><strong> {{ order.payment }} </strong></p>
							</div>
						</nav>

						<p class="is-bold"> By: {{ order.restaurant_name }}
							<br>
							Sum: ₦ {{ order.price_summary }} 
							<br> 
						Phone:  +{{ order.phone }} </p>

						<time :datetime="order.created_at">  {{ order.created_at | format('D MMM YYYY - h:mm A') }}</time>


						<div class="field is-grouped ">
							<p class="control">
								<router-link :to="{name: 'view-order', params: {id: order.id}}" class="button is-info" exact>
									View Detail
								</router-link>
							</p>

							<p class="control" @click="statusMethod(order.id, 'confirm', order.phone, order.order_id)" v-if="order.order_status == 'pending' ">
								<button class="button purple-bg has-text-white" v-if="(loadAuthUser.admin == 'super_admin') || (loadAuthRole.order_confirm == 1)">
									Confirm
								</button>
							</p>

							<p class="control" v-if="order.order_status == 'confirm' ">
								<button class="button bg-purple">
									<span class="icon is-small">
										<i class="fas fa-check"></i>
									</span>
									<span> In Process</span>
								</button>
							</p>

							<p class="control" v-if="order.order_status == 'delivered' ">
								<button class="button bg-purple">
									<span class="icon is-small">
										<i class="fas fa-truck"></i>
									</span>
									<span> Delivered </span>
								</button>
							</p>

						</div>			

					</div>
				</article>

			</div> <!-- column tag close -->


		</div> <!-- Columns wrapper tag close -->

		<!-- Pagination section -->
		<div class="buttons has-addons is-centered" v-if="loadOrderPending.length >= 1">
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



		<div class="card" v-if="loadOrderPending.length <= 0">
			<div class="card-content">
				<div class="content is-bold has-text-centered subtitle">
					<span class="fa"> No order found  </span>
				</div>
			</div>
		</div>


	</div>


</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

	data: () => ({
		spin: false,
		searchQuery: '',
	}),

	created() {
		this.fetchPendingOrder()
		this.clearOrderNotification()
	},

	methods: {
		...mapActions(['fetchPendingOrder', 'clearOrderNotification', 'searchOrder', 'updateOrderStatus']),
		// Local method
		refresh() {
			this.spin = true
			this.fetchPendingOrder().then(() => this.spin = false)
			this.searchQuery = ""
			this.searchOrder(this.searchQuery)
		},

		paginationHandler(uri) {
			this.fetchPendingOrder(uri)
		},

		searchMethod() {
			if(this.searchQuery > 1) {
				this.searchOrder(this.searchQuery)
			}
		},

		statusMethod(id,status, phone, orderID) {
			this.updateOrderStatus({id, status, phone, orderID})
			this.refresh()
		},

	},


	computed: {
		...mapGetters(['loadOrderPending', 'loadOrderLoader', 'loadOrderNotification', 'loadOrderPagination', 'loadOrderSearch', 'loadAuthUser', 'loadAuthRole']),

    // Local computed properties
},


}

</script>
