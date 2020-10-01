
<template>


	<div class="container"> <!-- Container tag open -->

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Login </strong> 
					</p>
				</div>
			</div>

		</nav>


		<div class="box"> <!-- Box container tag open -->

			<div class="notification purple-bg-light is-bold has-text-black" v-if="loadAdminNotification">
				Registration Succeesful
			</div>

			<div class="notification purple-bg-light is-bold has-text-black" v-if="loadAuthErrors">
				<ul>
					<li v-for="(value, name, index) in loadbAuthErrors">
						{{ index+1 }}. {{ value[0] }}
					</li>
				</ul>
			</div>


			<form v-on:submit.prevent="submitForm"> <!-- Form tag open -->

				<div class="columns"> <!-- Columns wrapper tag open -->

					<div class="column"> <!-- First column tag open-->


						<div class="field">
							<label class="label"> Email <span class="has-text-danger"> * </span> </label>
							<div class="control has-icons-right has-icons-left">
								<input class="input is-info" type="email" placeholder="Email input" v-model="login.email" autofocus required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-envelope purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.login.email.$invalid">
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
							<label class="label"> Password <span class="has-text-danger"> * </span> </label>
							<div class="control has-icons-right has-icons-left">
								<input class="input is-info" type="password" placeholder="Password input" v-model="login.password" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-key purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.login.password.$invalid">
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
						<button class="button" v-bind:class="{ 'is-loading': loadAuthProgress }" :disabled="$v.login.$invalid">
							<span class="icon is-small">
								<i class="fas fa-save purple-color"></i>
							</span>
							<span class="is-bold"> Login </span>
						</button>
					</p>
				</div>

			</form> <!-- Form tag close -->

		</div>  <!-- Box container tag open -->


	</div> <!-- Container tag close -->
	

</template>



<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import { mapActions, mapGetters, mapState } from 'vuex';

export default {


	data: () => ({

		login: {
			email: null,
			password: null,
		},

	}),



	validations: { //Validation calibrace open 

		login: {

			email: {
				email,
				required
			},

			password: {
				required,
				minLength: minLength(6)
			},

		} // login up calibrace close

	}, //Validation calibrace close 


	methods: {
		...mapActions(['signIn','clearAuthErrors']),
		// Local method goes here
		
		submitForm() {
			
			let data = new FormData();
			data.append("_method", "post");
			data.append('email', this.login.email);
			data.append('password', this.login.password);

			this.signIn(data)

		},

	}, // Method calibrace close


	computed: {
		...mapGetters(['loadAuthUser', 'loadAuthenticated', 'loadAuthErrors', 'loadAuthProgress', 'loadAdminNotification']),

    // Local computed properties
},

}

</script>