
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

						<div class="field">
							<label class="label">Restaurant Phone <span class="has-text-danger"> * </span> </label>
							<div class="control has-icons-left has-icons-right">
								<input class="input is-info" type="tel" placeholder="Number input" v-model.number="restaurant.phone" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-phone purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.restaurant.phone.required">
									<i class="fas fa-check purple-color"></i>
								</span>
								<span class="icon is-small is-right" v-else>
									<i class="fas fa-exclamation-triangle has-text-danger"></i>
								</span>
							</div>
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
							Restaurant Percentage Off
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
								<span class="" v-bind:class="{ 'has-text-white': foodItem }">Food Items 3</span>
							</a>
						</li>

					</ul>
				</div>
				<div class="columns" v-if="create"> <!-- Columns wrapper tag open -->


					<div class="column"> <!-- First column tag open-->

						<div class="field">
							<label class="label">Food Name <span class="has-text-danger"> * </span>  </label>
							<div class="control has-icons-left has-icons-right">
								<input class="input is-info" type="text" placeholder="Text input" v-model.trim="menu.name"  required autofocus>
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
								<input class="input is-info" type="number" placeholder="Amount of money">
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
								<input class="input is-info" type="tel" placeholder="Text input" v-model="menu.description" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-file-word purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.menu.description.required">
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


				<aside class="menu" v-if="foodItem">
					<ul class="menu-list">
						<li><a>1. Salad <span class="delete is-pulled-right" ></span> <span class="fas fa-edit is-pulled-right mr-3 purple-color" @click="[create = true, foodItem=false]"></span> </a></li>
						<li><a>2. Blah <span class="delete is-pulled-right" ></span> <span class="fas fa-edit is-pulled-right mr-3 purple-color" @click="[create = true, foodItem=false]"></span> </a></li>
						<li><a>3. Soda <span class="delete is-pulled-right" ></span> <span class="fas fa-edit is-pulled-right mr-3 purple-color" @click="[create = true, foodItem=false]"></span> </a></li>
					</ul>
				</aside>

				<button class="button is-fullwidth" @click="[create = true, foodItem=false]">
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
					<p class="level-item button" v-if="formStep.step != 1" v-on:click.prevent="prevous">
						<strong>Previous</strong>
					</p>
				</div>

				<!-- Right side -->
				<div class="level-right">
					<p class="level-item button" v-if="formStep.step != formStep.totalStep" v-on:click.prevent="next">
						<strong>Next</strong>
					</p>
					<p class="level-item button" v-if="formStep.step == formStep.totalStep">
						<strong>Save</strong>
					</p>
				</div>
			</nav>






		</div> <!-- Box tag close -->


	</div> <!-- Container tag close -->
	
</template>


<script>
import { required, email, numeric } from 'vuelidate/lib/validators'

export default {

	data: () => ({

		restaurant: {
			name: null,
			email: null,
			address: null,
			phone: null,
			licenseNumber: null,
			file: null,
		},

		formStep: {
			step: 1,
			totalStep: 2,
		},

		menu: {
			Name: null,
			description: null,
			price: null,
			file: null,
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
			}

		},  //Menu calibrace close

	},


	methods: {

		next() {
			this.formStep.step++;
		},

		prevous() {
			this.formStep.step--;
		},

	},



}

</script>
