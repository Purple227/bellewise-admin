
<template>

	<div>

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadOrderLoader }"><span class="title"> Bellewise loading </span></div>

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Order Detail</strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'order-list' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>

		


		<div class="box"> <!-- Box container tag open -->

			<!-- Second section -->

			<div class="column is-half is-offset-one-quarter"> <!-- is half column tag open -->

				<div class="card">


					<nav class="level is-mobile">
						<div class="level-item has-text-centered">
							<div>
								<p class="is-bold"> Status </p>
								<p class="is-bold purple-color"> {{ loadSingleOrder.order_status }} </p>
							</div>
						</div>
						<div class="level-item has-text-centered">
							<div>
								<p class="is-bold"> Payment </p>
								<p class="is-bold purple-color"> {{ loadSingleOrder.price_summary}} </p>
							</div>
						</div>
						<div class="level-item has-text-centered">
							<div>
								<p class="is-bold"> Items</p>
								<p class="is-bold purple-color"> {{ loadSingleOrder.tags.length }}</p>
							</div>
						</div>
					</nav>

					<hr>



					<div class="card-content">
						<div class="content">

							<p class="is-bold"> By: {{ loadSingleOrder.restaurant_name }} </p>

							<p class="is-bold">Delivering To: {{ loadSingleOrder.address}} </p>

							<p class="is-bold"> Estimated Delivery Time {{ loadSingleOrder.delivery_time }}  </p>


							<div class="notification is-light"> <!-- Notifacatin tag open -->

								<div class="columns"> <!-- Columns wrapper tag open -->

									<div class="column"> <!-- First column tag open -->
										<div class="content">
											<strong> Order Items </strong>
										</div>
									</div> <!-- First column tag close -->


									<div class="column"> <!-- Second column tag open -->

										<div class="content"> <!-- Content tag open -->

											<div class="dropdown" v-bind:class="{ 'is-active': isActive }" v-on:click="addActiveClass">
												<div class="dropdown-trigger">
													<button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
														<span> {{ loadSingleOrder.tags.length }} </span>
														<span class="icon is-small">
															<i class="fas fa-angle-down purple-color" aria-hidden="true"></i>
														</span>
													</button>
												</div>
												<div class="dropdown-menu" id="dropdown-menu" role="menu">
													<div class="dropdown-content">
														<a href="#" class="dropdown-item" v-for=" (tags, index) in loadSingleOrder.tags ">
															<div class="tags has-addons">
																<span class="tag"> {{ tags.name.substring(0, 5) }}</span>
																<span class="tag"> <span class="purple-color is-bold"> {{ tags.count }} </span> </span>
																<span class="tag"> {{ tags.price }} </span>
															</div>
														</a>
													</div>
												</div>
											</div>

										</div> <!-- Content tag close -->

									</div> <!-- Second column tag close -->


								</div> <!-- Columns wrapper tag close -->

							</div> <!-- Notifacatin tag close -->



							<ul class="steps" style="list-style: none;">
								<li class="steps-segment" v-bind:class="{ 'is-active': loadSingleOrder.order_status == 'pending' }">
									<span class="steps-marker">
										<span class="icon ">
											<i class="fa fa-shopping-cart"></i>
										</span>
									</span>
									<div class="steps-content" >
										<p class="heading"> Placed </p>

									</div>
								</li>

								<li class="steps-segment" v-bind:class="{ 'is-active': loadSingleOrder.order_status == 'confirm' }">
									<span class="steps-marker">
										<span class="icon">
											<i class="fa fa-check "></i>
										</span>
									</span>
									<div class="steps-content">
										<p class="heading">Confirm</p>
									</div>
								</li>

								<li class="steps-segment" v-bind:class="{ 'is-active': loadSingleOrder.order_status == 'on_the_way' }">
									<span class="steps-marker">
										<span class="icon">
											<i class="fa fa-truck"></i>
										</span>
									</span>
									<div class="steps-content">
										<p class="heading">On The Way</p>
									</div>
								</li>

								<li class="steps-segment" v-bind:class="{ 'is-active': loadSingleOrder.order_status == 'delivered' }">
									<span class="steps-marker">
										<span class="icon">
											<i class="fa fa-people-carry"></i>
										</span>
									</span>
									<div class="steps-content">
										<p class="heading"> Delivered </p>
									</div>
								</li>

							</ul>



							<hr>
							<strong class="is-size-6"> Order Details </strong>
							<br>
							<strong class="is-size-6"> Order ID: #{{ loadSingleOrder.order_id }} </strong>


							<br>
							<br>

							<div class="">
								<p class="is-bold is-inline">Order</p> 
								<p class="is-bold is-inline is-pulled-right">₦{{ loadSingleOrder.price }}</p> 
							</div>
							<br>
							<div class="">
								<p class="is-bold is-inline">Delivery</p> 
								<p class="is-bold is-inline is-pulled-right">₦{{ loadSingleOrder.order_charge }} </p> 
							</div>
							<br>
							<div class="">
								<p class="is-bold is-inline"> Sum</p> 
								<p class="is-bold is-inline is-pulled-right"> ₦{{ loadSingleOrder.price_summary }} </p> 
							</div>

							<hr>

							<div class="">
								<p class="is-inline "> Payment Method</p> 
								<p class="is-inline is-pulled-right"> {{ loadSingleOrder.payment }}</p> 
							</div>
							<br>
							<div class="">
								<p class=" is-inline"> Placed </p> 
								<p class=" is-inline is-pulled-right"> {{ loadSingleOrder.updated_at  | format('D MMM YYYY - h:mm A')}}  </p> 
							</div>

						</div>
					</div>
<!--  				<footer class="card-footer">
 					<a href="/contact" class="card-footer-item is-bold has-text-black"> Contact Us </a>
 				</footer> -->
 			</div>

 		</div>

 	</div> <!-- is half column tag close-->


 </div>  <!-- Columns wrapper tag close -->



</div> <!-- Box container tag open -->



</div>


</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import ClassToggler from '../../Mixins/classToggler'

export default {

	mixins: [
	ClassToggler
	],

	data: () => ({
		
	}),

	created() {
		this.setId()
	},

	methods: {
		...mapActions(['fetchSingleOrder']),

			//+ this.$route.params.slug

			setId() {
				let id = this.$route.params.id
				this.fetchSingleOrder(id)
			},

		},


		computed: {
			...mapGetters(['loadSingleOrder', 'loadOrderLoader']),

    // Local computed properties
},


}

</script>
