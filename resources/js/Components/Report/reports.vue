
<template>
	
	<div class="container"> <!-- Container tag open -->

		<div class="box"> <!-- Box tag open -->

			<div class="tabs is-toggle">

				<ul>

					<li class="" v-bind:class="{ 'active': user }" @click="[user = true, order=false, restaurant=false, driver=false]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': user }"><i class="fas fa-users" aria-hidden="true"></i></span>
							<span v-bind:class="{ 'has-text-white': user }"> User Report</span>
						</a>
					</li>

					<li v-bind:class="{ 'active': order }" @click="[user = false, order=true, restaurant=false, driver=false]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': order }"><i class="fas fa-clipboard" aria-hidden="true"></i></span>
							<span class=" " v-bind:class="{ 'has-text-white': order }"> Order Report </span>
						</a>
					</li>


					<li v-bind:class="{ 'active': restaurant }" @click="[user = false, order=false, restaurant=true, driver=false]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': restaurant }"><i class="fas fa-store-alt" aria-hidden="true"></i></span>
							<span class=" " v-bind:class="{ 'has-text-white': restaurant }"> Restaurant Report </span>
						</a>
					</li>

					<li v-bind:class="{ 'active': driver }" @click="[user = false, order=false, restaurant=false, driver=true ]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': driver }"><i class="fas fa-truck" aria-hidden="true"></i></span>
							<span class=" " v-bind:class="{ 'has-text-white': driver }"> Driver Report </span>
						</a>
					</li>

				</ul>
			</div>

			<div class="" v-if="user">
				<user-report> </user-report>
			</div>

			<div class="" v-if="order">
				<order-report> </order-report>
			</div>

			<div class="" v-if="restaurant">
				<restaurant-report> </restaurant-report>
			</div>

			<div v-if="driver" >
				<driver-report> </driver-report>
			</div>


		</div> <!-- Box tag close -->

	</div> <!-- Container tag close -->


</template>


<script>
import UserReport from "./partials/userReport.vue"
import OrderReport from "./partials/orderReport.vue"
import RestaurantReport from "./partials/restaurantReport.vue"
import DriverReport from "./partials/driverReport.vue"

export default {

	components: {
		'user-report': UserReport,
		'order-report': OrderReport,
		'restaurant-report': RestaurantReport,
		'driver-report': DriverReport,
	},

	data: () => ({
		user: true,
		order: false,
		restaurant: false,
		driver:false,
	}),

}

</script>
