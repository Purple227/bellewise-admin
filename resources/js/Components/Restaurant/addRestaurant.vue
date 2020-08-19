
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
				<p class="level-item"> <router-link :to="{ name: 'list-restaurant' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>



		<div class="box"> <!-- Box tag open -->

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
									<input class="file-input is-info" type="file" name="resume">
									<span class="file-cta">
										<span class="file-icon">
											<i class="fas fa-image purple-color"></i>
										</span>
										<span class="file-label is-bold">
											Choose a file…
										</span>
									</span>
									<span class="file-name">
										Screen Shot 2017-07-29 at 15.54.25.png
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
						<input class="input is-info" type="number" placeholder="Percentage ">
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
								<span class="icon is-small is-right" v-if="$v.menu.name.required">
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
								<input class="input is-info" type="number" placeholder="Amount of money" v-model="menu[menu.length -1].price">
							</p>
							<p class="control">
								<a class="button">
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
								<span class="icon is-small is-right" v-if="menu.description >= 3">
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
									<input class="file-input is-info" type="file" @change="fileUpload">
									<span class="file-cta">
										<span class="file-icon">
											<i class="fas fa-image purple-color"></i>
										</span>
										<span class="file-label is-bold">
											Choose a file…
										</span>
									</span>
									<span class="file-name">
										Screen Shot 2017-07-29 at 15.54.25.png
									</span>
								</label>
							</div>
						</div>

					</div> <!-- Second column tag close -->


				</div> <!-- Columns wrapper tag close -->


				<aside class="menu" v-if="foodItem">
					<ul class="menu-list" v-for="(menu, index) in menu" :key="index">
						<li><a>{{ index+1 }}  . {{ menu.name}} <span class="delete is-pulled-right" @click="removeMenu"></span> <span class="fas fa-edit is-pulled-right mr-3 purple-color" @click="[create = true, foodItem=false]"></span> </a></li>
					</ul>
				</aside>

				<button class="button is-fullwidth" @click="addMenuForm">
					<span class="icon is-medium">
						<i class="fas fa-plus purple-color"></i>
					</span>
					<span class="is-bold">Add</span>
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
						<button class="button" :disabled="$v.$invalid">
							<span class="icon is-small">
								<i class="fas fa-save purple-color"></i>
							</span>
							<span class="is-bold"> Save </span>
						</button>
					</p>

				</div>
			</nav>






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
			file: '',
		},

		formStep: {
			step: 1,
			totalStep: 2,
		},

		menu: [{
			name: null,
			description: null,
			price: null,
		}],

		menuImage: {
			name: null,
			file: '',
		},

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

			name: {
				required,
			},

			description: {
				required,
			},

			price: {
				required,
			},

		},  //Menu calibrace close

	},

	methods: {
		...mapActions(["createData", "clearErrors"]),

		// Local method goes here

		addMenuForm() {
			this.menu.push({
				name: null,
				description: null,
				price: null,
			})

			this.menuImage.push({
				name: null,
				file: '',
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


		fileUpload(e) {
			this.imageName = e.target.files[0].name
			this.imageFile = e.target.files[0]
		},

		submitForm() {
			
			let data = new FormData();
			data.append("_method", "post");
			data.append('name', this.driver.name);
			data.append('phone', this.driver.countryCode + this.driver.phone);
			data.append('occupation', this.driver.occupation);
			data.append('file', this.driver.imageFile);
			data.append('email', this.driver.email);

			this.createData(data)


		},

	}, // Method calibrace close


	computed: {
		...mapGetters(['loadProgress', 'loadErrors']),

    // Local computed properties
},






}

</script>
