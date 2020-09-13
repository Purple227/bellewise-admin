
<template>
	
	<div class="container"> <!-- Container tag open -->

		<div class="box"> <!-- Box tag open -->

			<div class="tabs is-toggle">

				<ul>

					<li class="" v-bind:class="{ 'active': resDetails }" @click="[resDetails = true, foodItem=false, resConfig=false]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': resDetails }"><i class="fas fa-edit" aria-hidden="true"></i></span>
							<span v-bind:class="{ 'has-text-white': resDetails }"> Restaurant Details</span>
						</a>
					</li>

					<li v-bind:class="{ 'active': foodItem }" @click="[resDetails = false, foodItem=true, resConfig=false]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': foodItem }"><i class="fas fa-utensils" aria-hidden="true"></i></span>
							<span class=" " v-bind:class="{ 'has-text-white': foodItem }"> Food Item</span>
						</a>
					</li>


					<li v-bind:class="{ 'active': resConfig }" @click="[resDetails = false, foodItem=false, resConfig=true ]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': resConfig }"><i class="fas fa-cog" aria-hidden="true"></i></span>
							<span class=" " v-bind:class="{ 'has-text-white': resConfig }"> Restaurant Configuration </span>
						</a>
					</li>

				</ul>
			</div>

			<div class="" v-if="resDetails">
				<restaurant-details> </restaurant-details>
			</div>

			<div class="" v-if="foodItem">
				<food-item> </food-item>
			</div>

			<div class="" v-if="resConfig">
				<restaurant-config> </restaurant-config>
			</div>


		</div> <!-- Box tag close -->

	</div> <!-- Container tag close -->


</template>


<script>
import RestaurantDetails from "./Modules/restaurantDetails.vue"
import FoodItem from "./Modules/foodItem.vue"
import RestaurantConfig from "./Modules/restaurantConfig.vue"

export default {

	components: {
		'restaurant-details': RestaurantDetails,
		'food-item': FoodItem,
		'restaurant-config': RestaurantConfig,
	},

	data: () => ({
		resDetails: true,
		foodItem: false,
		resConfig: false,
	}),

}

</script>