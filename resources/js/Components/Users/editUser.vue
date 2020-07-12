
<template>


	<div class="container"> <!-- Container tag open -->


		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Edit User </strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'users-list' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>




		<div class="box"> <!-- Box container tag open -->



			<div class="columns"> <!-- Columns wrapper tag open -->

				<div class="column"> <!-- First column tag open-->


					<div class="field">
						<label class="label"> Name <span class="has-text-danger"> * </span>  </label>
						<div class="control has-icons-left has-icons-right">
							<input class="input is-info" type="text" placeholder="Text input" v-model.trim="user.name"  required autofocus>
							<!-- Has icon left -->
							<span class="icon is-small is-left">
								<i class="fas fa-user purple-color"></i>
							</span>
							<!-- Has icon right -->
							<span class="icon is-small is-right" v-if="$v.user.name.required">
								<i class="fas fa-check purple-color"></i>
							</span>
							<span class="icon is-small is-right" v-else>
								<i class="fas fa-exclamation-triangle has-text-danger"></i>
							</span>
						</div>
					</div>

					<div class="field">
						<label class="label"> Phone <span class="has-text-danger"> * </span> </label>
						<div class="control has-icons-left has-icons-right">
							<input class="input is-info" type="tel" placeholder="Number input" v-model.number="user.phone" required>
							<!-- Has icon left -->
							<span class="icon is-small is-left">
								<i class="fas fa-phone purple-color"></i>
							</span>
							<!-- Has icon right -->
							<span class="icon is-small is-right" v-if="$v.user.phone.required">
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
						<label class="label"> Email <span class="has-text-danger"> * </span> </label>
						<div class="control has-icons-right has-icons-left">
							<input class="input is-info" type="email" placeholder="Text input" v-model="user.email" required>
							<!-- Has icon left -->
							<span class="icon is-small is-left">
								<i class="fas fa-envelope purple-color"></i>
							</span>
							<!-- Has icon right -->
							<span class="icon is-small is-right" v-if="$v.user.email.$invalid">
								<i class="fas fa-exclamation-triangle has-text-danger"></i>
							</span>
							<span class="icon is-small is-right" v-else>
								<i class="fas fa-check purple-color"></i>
							</span>
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

		user: {
			name: 'Joseph Purple',
			email: 'purple@gmail.com',
			phone: '080XXXXXXX',
		},

	}),



	validations: { //Validation calibrace open 

		user: {

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

		}, // restaurant calibrace close

	}, //Validation calibrace close 


}

</script>