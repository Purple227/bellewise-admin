
<template>

	<div> <!-- Root element tag open -->

<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadRestaurantLoader }"><span class="title"> Bellewise loading </span></div>

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> {{ loadSingleRestaurant.name}} info </strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'list-restaurant' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>


		<div class="columns"> <!-- Columns wrapper tag open -->

			<div class="column"> <!-- First column tag open-->

				<div class="field">
					<label class="label">Restaurant Phone </label>
					<div class="control">
						<input class="input is-info" type="tel" v-model="loadSingleRestaurant.phone" disabled>
					</div>
				</div>

				<div class="field">
					<label class="label">Restaurant Email </label>
					<div class="control">
						<input class="input is-info" type="email" v-model="loadSingleRestaurant.email" disabled>
					</span>
				</div>
			</div>


			<div class="field has-addons mt-6">
				<p class="control">
					<span class="select">
						<select>
							<option>₦</option>
						</select>
					</span>
				</p>
				<p class="control is-expanded">
					<input class="input is-info" type="number" v-model="loadSingleRestaurant.revenue" disabled>
				</p>
				<p class="control">
					<a class="button is-bold">
						Revenue
					</a>
				</p>
			</div>

			<div class="field has-addons mt-6">
				<p class="control">
					<span class="select">
						<select>
							<option class="is-bold">%</option>
						</select>
					</span>
				</p>
				<p class="control is-expanded">
					<input class="input is-info" type="number" v-model="loadSingleRestaurant.discount" disabled>
				</p>
				<p class="control">
					<a class="button is-bold">
						Discount
					</a>
				</p>
			</div>

		</div> <!-- First column tag close -->



		<div class="column"> <!-- Second column tag open-->

			<div class="field">
				<label class="label">Restaurant Address  </label>
				<div class="control ">
					<input class="input is-info" type="text" v-model="loadSingleRestaurant.address" disabled>
				</div>
			</div>

			<div class="field">
				<label class="label"> License Number </label>
				<div class="control">
					<input class="input is-info" type="number" v-model="loadSingleRestaurant.license_number" disabled>
				</div>
			</div>


			<div class="field has-addons mt-6">
				<p class="control">
					<span class="select">
						<select>
							<option>₦</option>
						</select>
					</span>
				</p>
				<p class="control is-expanded">
					<input class="input is-info" type="number"  v-model="loadSingleRestaurant.commmission" disabled>
				</p>
				<p class="control">
					<a class="button is-bold">
						Commision
					</a>
				</p>
			</div>



			<div class="field mt-6">
						<div class="content">
							<figure class="image is-128x128">
								<img class="is-rounded" src="/images/default_image.svg" v-if="loadSingleRestaurant.image.length <= 'default_image.svg'.length ">
								<img class="is-rounded" :src="imagePath" v-else>
							</figure>

						</div>
				</div>
			</div>

		</div> <!-- Second column tag close -->


	</div> <!-- Columns wrapper tag close -->


</div> <!-- Root element tag open -->


</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

	data: () => ({
		
	}),

	created() {
		this.setId()
	},

	methods: {
		...mapActions(['fetchSingleRestaurant']),

			//+ this.$route.params.slug

			setId() {
				let id = this.$route.params.id
				this.fetchSingleRestaurant(id)
			},

		},


		computed: {
			...mapGetters(['loadSingleRestaurant', 'loadRestaurantLoader']),

    // Local computed properties

    imagePath () {
    	let LaravelImageDefaultPath = '/Storage/'
    	let imageName = this.$store.getters.loadSingleRestaurant.image
    	let completedPath = LaravelImageDefaultPath + imageName 
    	return completedPath
    }
},


}

</script>
