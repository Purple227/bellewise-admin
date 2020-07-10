
<template>


	<div class="container"> <!-- Container tag open -->


		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Edit Driver </strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'driver-list' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>




		<div class="box"> <!-- Box container tag open -->



			<div class="columns"> <!-- Columns wrapper tag open -->

				<div class="column"> <!-- First column tag open-->


					<div class="field">
						<label class="label">Driver Name <span class="has-text-danger"> * </span>  </label>
						<div class="control has-icons-left has-icons-right">
							<input class="input is-info" type="text" placeholder="Text input" v-model.trim="driver.name"  required autofocus>
							<!-- Has icon left -->
							<span class="icon is-small is-left">
								<i class="fas fa-user purple-color"></i>
							</span>
							<!-- Has icon right -->
							<span class="icon is-small is-right" v-if="$v.driver.name.required">
								<i class="fas fa-check purple-color"></i>
							</span>
							<span class="icon is-small is-right" v-else>
								<i class="fas fa-exclamation-triangle has-text-danger"></i>
							</span>
						</div>
					</div>

					<div class="field">
						<label class="label"> Driver Phone <span class="has-text-danger"> * </span> </label>
						<div class="control has-icons-left has-icons-right">
							<input class="input is-info" type="tel" placeholder="Number input" v-model.number="driver.phone" required>
							<!-- Has icon left -->
							<span class="icon is-small is-left">
								<i class="fas fa-phone purple-color"></i>
							</span>
							<!-- Has icon right -->
							<span class="icon is-small is-right" v-if="$v.driver.phone.required">
								<i class="fas fa-check purple-color"></i>
							</span>
							<span class="icon is-small is-right" v-else>
								<i class="fas fa-exclamation-triangle has-text-danger"></i>
							</span>
						</div>
					</div>


				</div> <!-- First column tag close -->



				<div class="column"> <!-- Second column tag open-->

					<div class="field">
						<label class="label"> Driver Email <span class="has-text-danger"> * </span> </label>
						<div class="control has-icons-right has-icons-left">
							<input class="input is-info" type="email" placeholder="Text input" v-model="driver.email" required>
							<!-- Has icon left -->
							<span class="icon is-small is-left">
								<i class="fas fa-envelope purple-color"></i>
							</span>
							<!-- Has icon right -->
							<span class="icon is-small is-right" v-if="$v.driver.email.$invalid">
								<i class="fas fa-exclamation-triangle has-text-danger"></i>
							</span>
							<span class="icon is-small is-right" v-else>
								<i class="fas fa-check purple-color"></i>
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

			<div class="field">
				<p class="control">
					<button class="button">
						<span class="icon is-small">
							<i class="fas fa-save purple-color"></i>
						</span>
						<span class="is-bold"> Save </span>
					</button>
				</p>
			</div>

		</div>  <!-- Box container tag open -->


	</div> <!-- Container tag close -->
	

</template>



<script>
import { required, email, numeric } from 'vuelidate/lib/validators'

export default {


	data: () => ({

		driver: {
			name: 'Joseph Purple',
			email: 'purple@gmail.com',
			phone: '080XXXXXXX',
			ID: 874387,
			file: null,
		},

	}),



	validations: { //Validation calibrace open 

		driver: {

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

			ID: {
				required,
			},

		}, // restaurant calibrace close

	}, //Validation calibrace close 


}

</script>