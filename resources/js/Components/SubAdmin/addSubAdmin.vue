
<template>


	<div class="container"> <!-- Container tag open -->

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Add Sub-admin </strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'sub-admin-list' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>




		<div class="box"> <!-- Box container tag open -->

			<div class="notification purple-bg-light is-bold has-text-black" v-if="loadSubAdminErrors">
				<ul>
					<li v-for="(value, name, index) in loadSubAdminErrors">
						{{ index+1 }}. {{ value[0] }}
					</li>
				</ul>
			</div>


			<form v-on:submit.prevent="submitForm"> <!-- Form tag open -->

				<div class="columns"> <!-- Columns wrapper tag open -->

					<div class="column"> <!-- First column tag open-->


						<div class="field">
							<label class="label">Admin Name <span class="has-text-danger"> * </span>  </label>
							<div class="control has-icons-left has-icons-right">
								<input class="input is-info" type="text" placeholder="Text input" v-model.trim="subAdmin.name"  required autofocus>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-truck purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.subAdmin.name.required">
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
								<input class="input is-info" type="tel" minlength="10" maxlength="14" placeholder="Number input" v-model.number="subAdmin.phone" required>

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
							<label class="label"> Admin Email <span class="has-text-danger"> * </span> </label>
							<div class="control has-icons-right has-icons-left">
								<input class="input is-info" type="email" placeholder="Text input" v-model="subAdmin.email" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-envelope purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.subAdmin.email.$invalid">
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
										{{  subAdmin.imageName || "Upload an image"}}
									</span>
								</label>
							</div>
						</div>

					</div> <!-- Second column tag close -->


				</div> <!-- Columns wrapper tag close -->

				<div class="field">
					<p class="control">
						<button class="button" v-bind:class="{ 'is-loading': loadSubAdminProgress }" :disabled="$v.subAdmin.$invalid">
							<span class="icon is-small">
								<i class="fas fa-save purple-color"></i>
							</span>
							<span class="is-bold"> Save </span>
						</button>
					</p>
				</div>

			</form> <!-- Form tag close -->

		</div>  <!-- Box container tag open -->


	</div> <!-- Container tag close -->
	

</template>



<script>
import { required, email, numeric, minlength } from 'vuelidate/lib/validators';
import { mapActions, mapGetters } from 'vuex';

export default {


	data: () => ({

		subAdmin: {
			name: null,
			email: null,
			phone: null,
			imageName: null,
			imageFile: "",
			countryCode: '+234',
		},

	}),



	validations: { //Validation calibrace open 

		subAdmin: {

			name: {
				required
			},

			email: {
				email,
				required
			},

		}, // restaurant calibrace close

	}, //Validation calibrace close 


	methods: {
		...mapActions(["createSubAdminData", "clearSubAdminErrors"]),

		// Local method goes here

		fileUpload(e) {
			this.subAdmin.imageName = e.target.files[0].name
			this.subAdmin.imageFile = e.target.files[0]
		},

		submitForm() {
			
			let data = new FormData();
			data.append("_method", "post");
			data.append('name', this.subAdmin.name);
			data.append('phone', this.subAdmin.countryCode + this.subAdmin.phone);
			data.append('file', this.subAdmin.imageFile);
			data.append('email', this.subAdmin.email);

			this.createSubAdminData(data)


		},

	}, // Method calibrace close


	computed: {
		...mapGetters(['loadSubAdminProgress', 'loadSubAdminErrors']),

    // Local computed properties



},

}

</script>