
<template>


	<div class="container"> <!-- Container tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadAuthLoader }"><span class="title"> Loading Bellewise</span></div>

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Update {{ loadAuthUser.name.substring(0,8)}} Password </strong> 
					</p>
				</div>
			</div>

		</nav>

		<div class="notification purple-bg-light is-bold has-text-black" v-if="loadAuthNotification">
			Task Succeesful
		</div>


		<div class="box"> <!-- Box container tag open -->

			<div class="notification purple-bg-light is-bold has-text-black" v-if="loadAuthErrors">
				{{ loadAuthErrors }}
			</div>


			<form v-on:submit.prevent="submitForm"> <!-- Form tag open -->

				<div class="columns"> <!-- Columns wrapper tag open -->

					<div class="column"> <!-- First column tag open-->


						<div class="field">
							<label class="label"> Old Password <span class="has-text-danger"> * </span> </label>
							<div class="control has-icons-right has-icons-left">
								<input class="input is-info" type="password"  v-model="admin.oldPassword" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-key purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.admin.oldPassword.$invalid">
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
							<label class="label"> New password <span class="has-text-danger"> * </span> </label>
							<div class="control has-icons-right has-icons-left">
								<input class="input is-info" type="password" v-model="admin.newPassword" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-key purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.admin.newPassword.$invalid">
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
						<button class="button" v-bind:class="{ 'is-loading': loadAuthProgress }" :disabled="$v.admin.$invalid">
							<span class="icon is-small">
								<i class="fas fa-save purple-color"></i>
							</span>
							<span class="is-bold"> Update Security</span>
						</button>
					</p>
				</div>

			</form> <!-- Form tag close -->

		</div>  <!-- Box container tag open -->


	</div> <!-- Container tag close -->
	

</template>



<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators';
import { mapActions, mapGetters } from 'vuex';

export default {


	data: () => ({

		admin: {
			oldPassword: null,
			newPassword: null,
		},

	}),

	validations: { //Validation calibrace open 

		admin: {

			oldPassword: {
				required,
				minLength: minLength(6)
			},

			newPassword: {
				required,
				minLength: minLength(6)
			},


		} // sign up calibrace close

	}, //Validation calibrace close 

	created() {
		this.clearAuthErrors()
		this.clearAuthNotification()
	},


	methods: {
		...mapActions(['editAuthSecurity', 'clearAuthErrors', 'me', 'clearAuthNotification']),

		// Local method goes here

		submitForm() {
			
			let data = new FormData();
			data.append("_method", "patch");
			data.append('old_password', this.admin.oldPassword);
			data.append('new_password', this.admin.newPassword);

			let id = this.loadAuthUser.id
			console.log(id)

			this.editAuthSecurity({data, id})

		},

	}, // Method calibrace close


	computed: {
		...mapGetters(['loadAuthLoader', 'loadAuthErrors', 'loadAuthProgress', 'loadAuthUser', 'loadAuthNotification']),

    // Local computed properties

},

}

</script>