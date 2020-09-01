
<template>


	<div class="container"> <!-- Container tag open -->

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Restaurant Registration</strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'list-restaurant' }" exact> <strong class="purple-color"> Back </strong> </router-link> </p>
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

				<div class="" v-if="formStep.step == 1"> <!-- First step tag open -->

					<div class="columns"> <!-- Columns wrapper tag open -->

						<div class="column"> <!-- First column tag open-->


							<div class="field">
								<label class="label">Restaurant Name <span class="has-text-danger"> * </span>  </label>
								<div class="control has-icons-left has-icons-right">
									<input class="input is-info" type="text" placeholder="Text input" v-model.trim="restaurant.name"  required autofocus>
									<!-- Has icon left -->
									<span class="icon is-small is-left">
										<i class="fas fa-store purple-color"></i>
									</span>
									<!-- Has icon right -->
									<span class="icon is-small is-right" v-if="$v.restaurant.name.required">
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
											<option> +234 </option>
										</select>
									</span>
								</p>
								<p class="control is-expanded has-icons-left">
									<input class="input is-info" type="tel" minlength="10" maxlength="14" placeholder="Number input" v-model.number="restaurant.phone" required>

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
									<input class="input is-info" type="email" placeholder="Text input" v-model="restaurant.email" required>
									<!-- Has icon left -->
									<span class="icon is-small is-left">
										<i class="fas fa-envelope purple-color"></i>
									</span>
									<!-- Has icon right -->
									<span class="icon is-small is-right" v-if="$v.restaurant.email.$invalid">
										<i class="fas fa-exclamation-triangle has-text-danger"></i>
									</span>
									<span class="icon is-small is-right" v-else>
										<i class="fas fa-check purple-color"></i>
									</span>
								</div>
							</div>


						</div> <!-- First column tag close -->



						<div class="column"> <!-- Second column tag open-->

							<div class="field">
								<label class="label">Restaurant Address <span class="has-text-danger"> * </span> </label>
								<div class="control has-icons-left has-icons-right">
									<input class="input is-info" type="text" placeholder="Text input" v-model.trim="restaurant.address" required>
									<!-- Has icon left -->
									<span class="icon is-small is-left">
										<i class="fas fa-map-marker-alt purple-color"></i>
									</span>
									<!-- Has icon right -->
									<span class="icon is-small is-right" v-if="$v.restaurant.address.required">
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
									<input class="input is-info" type="number" placeholder="Number input" v-model.number="restaurant.licenseNumber" required>
									<!-- Has icon left -->
									<span class="icon is-small is-left">
										<i class="fas fa-sort-amount-down purple-color"></i>
									</span>
									<!-- Has icon right -->
									<span class="icon is-small is-right" v-if="$v.restaurant.licenseNumber.required">
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

						</div> <!-- Second column tag close -->


					</div> <!-- Columns wrapper tag close -->


					<div class="field has-addons">
						<p class="control">
							<span class="select">
								<select>
									<option class="is-bold">%</option>
								</select>
							</span>
						</p>
						<p class="control is-expanded">
							<input class="input is-info" type="number" placeholder="Percentage" v-model.number="restaurant.discount">
						</p>
						<p class="control">
							<a class="button is-bold">
								Restaurant Discount Off
							</a>
						</p>
					</div>


				</div> <!-- First step tag close -->



				<div class="" v-if="formStep.step == 2"> <!-- Second step tag open -->

					<p class="subtitle is-5"> Resturant Menu </p>

					<div class="tabs is-toggle is-fullwidth">
						<ul>
							<li class="" v-bind:class="{ 'active': create }">
								<a @click="[create = true, foodItem=false]">
									<span class="icon is-small" v-bind:class="{ 'has-text-white': create }"><i class="fas fa-plus-square" aria-hidden="true"></i></span>
									<span class="" v-bind:class="{ 'has-text-white': create }"> Create</span>
								</a>
							</li>
							<li v-bind:class="{ 'active': foodItem }">
								<a @click="[create=false, foodItem=true]">
									<span class="icon is-small" v-bind:class="{ 'has-text-white': foodItem }"><i class="fas fa-utensils" aria-hidden="true"></i></span>
									<span class="" v-bind:class="{ 'has-text-white': foodItem }">Food Items {{ menu.length }}</span>
								</a>
							</li>

						</ul>
					</div>
					<div class="columns" v-if="create"> <!-- Columns wrapper tag open -->

						<div class="column"> <!-- First column tag open-->

							<div class="field">
								<label class="label">Food Name <span class="has-text-danger"> * </span>  </label>
								<div class="control has-icons-left has-icons-right">
									<input class="input is-info" type="text" placeholder="Text input" v-model.trim="menu[menu.length -1].name"  required autofocus>
									<!-- Has icon left -->
									<span class="icon is-small is-left">
										<i class="fas fa-utensils purple-color"></i>
									</span>
									<!-- Has icon right -->
									<span class="icon is-small is-right" v-if="$v.menu.$each[menu.length -1].name.required">
										<i class="fas fa-check purple-color"></i>
									</span>
									<span class="icon is-small is-right" v-else>
										<i class="fas fa-exclamation-triangle has-text-danger"></i>
									</span>
								</div>
							</div>

							<div class="field has-addons mt-3">
								<p class="control">
									<span class="select">
										<select>
											<option>₦</option>
										</select>
									</span>
								</p>
								<p class="control is-expanded">
									<input class="input is-info" min="0" oninput="validity.valid||(value='');" type="number" placeholder="Amount of money" v-model="menu[menu.length -1].price">
								</p>
								<p class="control">
									<a class="button is-bold">
										Price
									</a>
								</p>
							</div>

						</div> <!-- First column tag close -->



						<div class="column"> <!-- Second column tag open-->

							<div class="field">
								<label class="label"> Food Description <span class="has-text-danger"> * </span> </label>
								<div class="control has-icons-left has-icons-right">
									<input class="input is-info" type="tel" placeholder="Text input" v-model="menu[menu.length -1].description" required>
									<!-- Has icon left -->
									<span class="icon is-small is-left">
										<i class="fas fa-file-word purple-color"></i>
									</span>
									<!-- Has icon right -->
									<span class="icon is-small is-right" v-if="$v.menu.$each[menu.length -1].description.required">
										<i class="fas fa-check purple-color"></i>
									</span>
									<span class="icon is-small is-right" v-else>
										<i class="fas fa-exclamation-triangle has-text-danger"></i>
									</span>
								</div>
							</div>

							<div class="field mt-3">
								<div class="file has-name">
									<label class="file-label">
										<input class="file-input is-info" type="file" @change="fileUploadMenu">
										<span class="file-cta">
											<span class="file-icon">
												<i class="fas fa-image purple-color"></i>
											</span>
											<span class="file-label is-bold">
												Choose a file…
											</span>
										</span>
										<span class="file-name">
											{{  menu[menu.length -1].imageName || "Upload an image"}}
										</span>
									</label>
								</div>
							</div>

						</div> <!-- Second column tag close -->

					</div> <!-- Columns wrapper tag close -->


					<aside class="menu" v-if="foodItem">
						<ul class="menu-list" v-for="(menu, index) in menu" :key="index">
							<li><a>{{ index+1 }}  . {{ menu.name}} <span class="delete is-pulled-right" @click="removeMenu(index)"></span>  </a></li>
						</ul>
					</aside>

					<button class="button is-fullwidth mt-3" @click="addMenuForm" v-if="create" :disabled="$v.menu.$invalid" >
						<span class="icon is-medium">
							<i class="fas fa-plus purple-color"></i>
						</span>
						<span class="is-bold">Add</span>
					</button>

					<button class="button is-fullwidth mt-3" v-if="foodItem" @click="[create = true, foodItem = false]">
						<span class="icon is-medium">
							<i class="fas fa-plus purple-color"></i>
						</span>
						<span class="is-bold">Add More</span>
					</button>


				</div> <!-- Second step tag close -->


				<!-- Main container -->
				<nav class="level mt-3">
					<!-- Left side -->
					<div class="level-left">

						<p class="level-item control" v-if="formStep.step != 1" v-on:click.prevent="prevous">
							<button class="button">
								<span class="icon is-small">
									<i class="fas fa-arrow-left purple-color"></i>
								</span>
								<span class="is-bold"> Previous </span>
							</button>
						</p>

					</div>

					<!-- Right side -->
					<div class="level-right">

						<p class="level-item control" v-if="formStep.step != formStep.totalStep" v-on:click.prevent="next">
							<button class="button" :disabled="$v.restaurant.$invalid">
								<span class="icon is-small">
									<i class="fas fa-arrow-right purple-color"></i>
								</span>
								<span class="is-bold"> Next </span>
							</button>
						</p>



						<p class="level-item control" v-if="formStep.step == formStep.totalStep">
							<button class="button" v-bind:class="{ 'is-loading': loadRestaurantProgress }" :disabled="$v.$invalid">
								<span class="icon is-small">
									<i class="fas fa-save purple-color"></i>
								</span>
								<span class="is-bold"> Save </span>
							</button>
						</p>

					</div>
				</nav>

			</form> <!-- Form tag close -->



		</div> <!-- Box tag close -->


	</div> <!-- Container tag close -->
	
</template>


<script>
import { required, email, numeric } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex';

export default {

	data: () => ({

		restaurant: {
			name: null,
			email: null,
			address: null,
			phone: null,
			licenseNumber: null,
			imageFile: '',
			imageName: null,
			countryCode: '+234',
			discount: null,
		},

		simpleArray: null,

		formStep: {
			step: 1,
			totalStep: 2,
		},

		menu: [{
			name: null,
			description: null,
			price: null,
			imageName: '',
			imageFile: '',
		}],

		create: true,
		foodItem: null,

	}),


	validations: {

		restaurant: {

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

			licenseNumber: {
				required,
			},

		}, // restaurant calibrace close

		menu: {
			$each: { //vuelidata array suppport
				name: {
					required,
				},

				description: {
					required,
				},

				price: {
					required,
				},
			}// each calibrace closes
		}  //Menu calibrace close

	},

	methods: {
		...mapActions(["createRestaurant", "clearRestaurantErrors"]),

		// Local method goes here

		addMenuForm() {
			this.menu.push({
				name: null,
				description: null,
				price: null,
				imageName: null,
				imageFile: '',
			})
		},

		removeMenu: function(index) {
			this.menu.splice(index, 1);
		},

		next() {
			this.formStep.step++;
		},

		prevous() {
			this.formStep.step--;
		},


		fileUploadMenu(e) {
			this.menu[this.menu.length -1].imageName = e.target.files[0].name
			this.menu[this.menu.length -1].imageFile = e.target.files[0]
		},

		fileUploadRestaurant(e) {
			this.restaurant.imageName = e.target.files[0].name
			this.restaurant.imageFile = e.target.files[0]
		},

		submitForm() {			
			let data = new FormData();
			data.append("_method", "post");
			data.append('restaurant_name', this.restaurant.name);
			data.append('phone', this.restaurant.countryCode + this.restaurant.phone);
			data.append('address', this.restaurant.address);
			data.append('restaurant_file', this.restaurant.imageFile);
			data.append('license_number', this.restaurant.licenseNumber);
			data.append('email', this.restaurant.email);
			data.append('discount', this.restaurant.discount);
			data.append('menu', JSON.stringify(this.transformToSimpleArray));
			this.createRestaurant(data)
		},

	}, // Method calibrace close


	computed: {
		...mapGetters(['loadRestaurantProgress', 'loadRestaurantErrors']),
    // Local computed properties

    transformToSimpleArray() {
/*			var keys = Object.keys(this.menu)
			console.log(keys)
			this.simpleArray = keys.name*/

/*			for (let i in this.menu) {
				this.simpleArray.push(this.menu[i].name)
			}*/

/*
			for (let i=0; i<this.menu.length; i++) { 
				this.simpleArray.push(this.menu[i].name)
			}*/

			let result = []
			for (let i=0; i<this.menu.length; i++) {
			result.push(this.menu[i].name)
			result.push(this.menu[i].description)
			result.push(this.menu[i].price)
			result.push(this.menu[i].imageFile)
			}
			return result
		},


	},






}

</script>
