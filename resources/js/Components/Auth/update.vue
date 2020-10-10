
<template>


	<div class="container"> <!-- Container tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadAuthLoader }"><span class="title"> Loading Bellewise</span></div>

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Update {{ loadAuthUser.name.substring(0,8)}} </strong> 
					</p>
				</div>
			</div>

		</nav>

		<div class="notification purple-bg-light is-bold has-text-black" v-if="loadAuthNotification">
			Task Succeesful
		</div>


		<div class="box"> <!-- Box container tag open -->

			<div class="notification purple-bg-light is-bold has-text-black" v-if="loadAuthErrors">
				<ul>
					<li v-for="(value, name, index) in loadAuthErrors">
						{{ index+1 }}. {{ value[0] }}
					</li>
				</ul>
			</div>


			<form v-on:submit.prevent="submitForm"> <!-- Form tag open -->

				<div class="columns"> <!-- Columns wrapper tag open -->

					<div class="column"> <!-- First column tag open-->


						<div class="field">
							<label class="label">Name <span class="has-text-danger"> * </span>  </label>
							<div class="control has-icons-left has-icons-right">
								<input class="input is-info" type="text" placeholder="Text input" v-model.trim="loadAuthUser.name"  required autofocus>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-user purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.loadAuthUser.name.required">
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
										<option>  </option>
									</select>
								</span>
							</p>
							<p class="control is-expanded has-icons-left">
								<input class="input is-info" type="tel" minlength="10" maxlength="14" placeholder="Number input" v-model.number="loadAuthUser.phone" required>

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

					</div> <!-- First column tag close -->

					<div class="column"> <!-- Second column tag open-->

						<div class="field">
							<label class="label"> Email <span class="has-text-danger"> * </span> </label>
							<div class="control has-icons-right has-icons-left">
								<input class="input is-info" type="email" placeholder="Text input" v-model="loadAuthUser.email" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-envelope purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.loadAuthUser.email.$invalid">
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
									<input class="file-input is-info" type="file" name="resume" @change="fileUpload">
									<span class="file-cta">
										<span class="file-icon">
											<i class="fas fa-image purple-color"></i>
										</span>
										<span class="file-label is-bold">
											Choose a file…
										</span>
									</span>
									<span class="file-name">
										{{  admin.imageName || "Upload an image"}}
									</span>
								</label>
							</div>
						</div>

					</div> <!-- Second column tag close -->


				</div> <!-- Columns wrapper tag close -->

				<div class="field">
					<p class="control">
						<button class="button" v-bind:class="{ 'is-loading': loadAuthProgress }" :disabled="$v.loadAuthUser.$invalid">
							<span class="icon is-small">
								<i class="fas fa-save purple-color"></i>
							</span>
							<span class="is-bold"> Update </span>
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
			imageName: null,
			imageFile: "",
		},

	}),



	validations: { //Validation calibrace open 

		loadAuthUser: {

			name: {
				required
			},

			email: {
				email,
				required
			},

		}, 

	}, //Validation calibrace close 

	created() {
		this.clearAuthErrors()
		this.clearAuthNotification()
	},


	methods: {
		...mapActions(['editAuthData', 'clearAuthErrors', 'me', 'clearAuthNotification']),

		// Local method goes here

		fileUpload(e) {
			this.admin.imageName = e.target.files[0].name
			this.admin.imageFile = e.target.files[0]
		},

		submitForm() {
			
			let data = new FormData();
			data.append("_method", "patch");
			data.append('name', this.loadAuthUser.name);
			data.append('phone', this.loadAuthUser.phone);
			data.append('file', this.admin.imageFile);
			data.append('email', this.loadAuthUser.email);

			let id = this.loadAuthUser.id
			console.log(id)

			this.editAuthData({data, id}).then(() => this.me() )

		},

	}, // Method calibrace close


	computed: {
		...mapGetters(['loadAuthLoader', 'loadAuthErrors', 'loadAuthProgress', 'loadAuthUser', 'loadAuthNotification']),

    // Local computed properties

},

}

</script>