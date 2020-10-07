
<template>


	<div class="container"> <!-- Container tag open -->

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Edit {{ loadSingleRestaurant.name }} </strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'list-restaurant' }" exact> <strong class="purple-color" v-if="$v.loadSingleRestaurant.$invalid"> Back </strong> </router-link> </p>
			</div>
		</nav>



		<div class="box"> <!-- Box tag open -->

			<div class="notification purple-bg-light is-bold has-text-black" v-if="loadRestaurantErrors">
				<ul>
					<li v-for="(value, name, index) in loadRestaurantErrors">
						{{ index+1 }}. {{ value[0] }}
					</li>
				</ul>
			</div>


			<form v-on:submit.prevent="submitForm"> <!-- Form tag open -->

				<div class="columns"> <!-- Columns wrapper tag open -->

					<div class="column"> <!-- First column tag open-->


						<div class="field">
							<label class="label">Restaurant Name <span class="has-text-danger"> * </span>  </label>
							<div class="control has-icons-left has-icons-right">
								<input class="input is-info" type="text" placeholder="Text input" v-model.trim="loadSingleRestaurant.name"  required autofocus>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-store purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.loadSingleRestaurant.name.required">
									<i class="fas fa-check purple-color"></i>
								</span>
								<span class="icon is-small is-right" v-else>
									<i class="fas fa-exclamation-triangle has-text-danger"></i>
								</span>
							</div>
						</div>

						<div class="field has-addons mt-6">
							<p class="control">
								<span class="select">
									<select>
										<option> </option>
									</select>
								</span>
							</p>
							<p class="control is-expanded has-icons-left">
								<input class="input is-info" type="tel" minlength="10" maxlength="14" placeholder="Number input" v-model.number="loadSingleRestaurant.phone" required>

								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-phone purple-color"></i>
								</span>
							</p>
							<p class="control">
								<a class="button is-bold">
									Phone
								</a>
							</p>
						</div>



						<div class="field">
							<label class="label">Restaurant Email <span class="has-text-danger"> * </span> </label>
							<div class="control has-icons-right has-icons-left">
								<input class="input is-info" type="email" placeholder="Text input" v-model="loadSingleRestaurant.email" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-envelope purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.loadSingleRestaurant.email.$invalid">
									<i class="fas fa-exclamation-triangle has-text-danger"></i>
								</span>
								<span class="icon is-small is-right" v-else>
									<i class="fas fa-check purple-color"></i>
								</span>
							</div>
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
								<input class="input is-info" type="number" min="0" oninput="validity.valid||(value='');" placeholder="Percentage" v-model.number="loadSingleRestaurant.commmission">
							</p>
							<p class="control">
								<a class="button is-bold">
									Commission 
								</a>
							</p>
						</div>




					</div> <!-- First column tag close -->



					<div class="column"> <!-- Second column tag open-->

						<div class="field">
							<label class="label">Restaurant Address <span class="has-text-danger"> * </span> </label>
							<div class="control has-icons-left has-icons-right">
								<input class="input is-info" type="text" placeholder="Text input" v-model.trim="loadSingleRestaurant.address" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-map-marker-alt purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.loadSingleRestaurant.address.required">
									<i class="fas fa-check purple-color"></i>
								</span>
								<span class="icon is-small is-right" v-else>
									<i class="fas fa-exclamation-triangle has-text-danger"></i>
								</span>
							</div>
						</div>

						<div class="field">
							<label class="label"> License Number <span class="has-text-danger"> * </span> </label>
							<div class="control has-icons-right has-icons-left">
								<input class="input is-info" type="number" placeholder="Number input" v-model="loadSingleRestaurant.license_number" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-sort-amount-down purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.loadSingleRestaurant.license_number.required">
									<i class="fas fa-check purple-color"></i>
								</span>
								<span class="icon is-small is-right" v-else>
									<i class="fas fa-exclamation-triangle has-text-danger"></i>
								</span>
							</div>
						</div>

						<div class="field mt-6">
							<div class="file has-name">
								<label class="file-label">
									<input class="file-input is-info" type="file" name="resume" @change="fileUploadRestaurant">
									<span class="file-cta">
										<span class="file-icon">
											<i class="fas fa-image purple-color"></i>
										</span>
										<span class="file-label is-bold">
											Choose a file…
										</span>
									</span>
									<span class="file-name">
										{{  restaurant.imageName || "Upload an image"}}
									</span>
								</label>
							</div>
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
								<input class="input is-info" type="number" min="0" oninput="validity.valid||(value='');" placeholder="Percentage" v-model="loadSingleRestaurant.discount">
							</p>
							<p class="control">
								<a class="button is-bold">
									Restaurant Discount Off
								</a>
							</p>
						</div>

					</div> <!-- Second column tag close -->

				</div> <!-- Columns wrapper tag close -->

				<button class="button" v-bind:class="{ 'is-loading': loadRestaurantProgress }" :disabled="$v.loadSingleRestaurant.$invalid">
					<span class="icon is-small">
						<i class="fas fa-save purple-color"></i>
					</span>
					<span class="is-bold"> Update </span>
				</button>

			</form> <!-- Form tag close -->

		</div> <!-- Box tag close -->


	</div> <!-- Container tag close -->
	
</template>


<script>
import { required, email} from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex';

export default {

	data: () => ({

		restaurant: {
			countryCode: '+234',
			imageName: null,
			imageFile: "",
		},

	}),


	validations: {

		loadSingleRestaurant: {

			name: {
				required
			},

			phone: {
				required,
			},

			email: {
				email,
				required
			},

			address: {
				required,
			},

			license_number: {
				required,
			},

		}, // restaurant calibrace close

	},

	created() {
		this.getRestaurant()
	},

	methods: {
		...mapActions(["editRestaurantData", "clearRestaurantErrors", "fetchSingleRestaurant"]),

		// Local method goes here

		getRestaurant() {
			let id = this.$route.params.id
			this.fetchSingleRestaurant(id)
		},

		fileUploadRestaurant(e) {
			this.restaurant.imageName = e.target.files[0].name
			this.restaurant.imageFile = e.target.files[0]
		},

		submitForm() {

			let data = new FormData();
			data.append("_method", "patch");
			data.append('restaurant_name', this.$store.getters.loadSingleRestaurant.name);
			data.append('phone', this.$store.getters.loadSingleRestaurant.phone);
			data.append('address', this.$store.getters.loadSingleRestaurant.address);
			data.append('restaurant_file', this.restaurant.imageFile);
			data.append('license_number', this.$store.getters.loadSingleRestaurant.license_number);
			data.append('email', this.$store.getters.loadSingleRestaurant.email);
			data.append('discount', this.$store.getters.loadSingleRestaurant.discount);
			data.append('commmision', this.$store.getters.loadSingleRestaurant.commmission);
			let id = this.$store.getters.loadSingleRestaurant.id
			this.editRestaurantData({data, id})
		},

	}, // Method calibrace close


	computed: {
		...mapGetters(['loadRestaurantProgress', 'loadRestaurantErrors', 'loadSingleRestaurant']),
    // Local computed properties

},






}

</script>
