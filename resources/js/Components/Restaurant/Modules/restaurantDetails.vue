
<template>

	<div>

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> {{ restaurant.name}} info </strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> 
					<label class="checkbox">
						<input type="checkbox">
						<span class="purple-color is-bold"> Status </span>
					</label>
				</p>
			</div>
		</nav>



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


					<div class="field has-addons mt-6">
						<p class="control">
							<span class="select">
								<select>
									<option>₦</option>
								</select>
							</span>
						</p>
						<p class="control is-expanded">
							<input class="input is-info" type="number" placeholder="Amount of money" v-model="restaurant.revenue" disabled>
						</p>
						<p class="control">
							<a class="button">
								Revenue
							</a>
						</p>
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


					<div class="field has-addons mt-6">
						<p class="control">
							<span class="select">
								<select>
									<option>₦</option>
								</select>
							</span>
						</p>
						<p class="control is-expanded">
							<input class="input is-info" type="number"  v-model="restaurant.commission" disabled>
						</p>
						<p class="control">
							<a class="button">
								Commision
							</a>
						</p>
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




</div>


	</template>



	<script>
	import { required, email, numeric } from 'vuelidate/lib/validators'

	export default {


		data: () => ({

			restaurant: {
				name: "Crunchies",
				email: "Bellewise@bellewise.com",
				address: "8 Mary Slessor Ave, Bogoberi, Calabar",
				phone: "080XXXXXXX",
				licenseNumber: null,
				file: null,
				commission: 8,
				revenue: 54398.00,
			},

		}),



	validations: { //Validation calibrace open 

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

	}, //Validation calibrace close 


}

</script>