
<template>


	<div class="container"> <!-- Container tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadLoading }"><span class="title"> Loading Bellewise</span></div>

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


			<div class="notification purple-bg-light is-bold has-text-black" v-if="loadErrors">
				<ul>
					<li v-for="(value, name, index) in loadErrors">
						{{ index+1 }}. {{ value[0] }}
					</li>
				</ul>

			</div>


			<form v-on:submit.prevent="submitForm"> <!-- Form tag open -->

				<div class="columns"> <!-- Columns wrapper tag open -->

					<div class="column"> <!-- First column tag open-->


						<div class="field">
							<label class="label">Driver Name <span class="has-text-danger"> * </span>  </label>
							<div class="control has-icons-left has-icons-right">
								<input class="input is-info" type="text" v-model.trim="loadSingleData.name"  required autofocus>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-truck purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.loadSingleData.name.required">
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
								<input class="input is-info" type="tel" minlength="11" maxlength="14" v-model.number="loadSingleData.phone" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-phone purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.loadSingleData.phone.required">
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
							<label class="label">Driver Occupation <span class="has-text-danger"> * </span>  </label>
							<div class="control has-icons-left has-icons-right">
								<input class="input is-info" type="text" v-model.trim="loadSingleData.occupation"  required autofocus>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-briefcase purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.loadSingleData.occupation.required">
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
										{{  imageName || "Update an image"}}
									</span>
								</label>
							</div>
						</div>

					</div> <!-- Second column tag close -->


				</div> <!-- Columns wrapper tag close -->

				<div class="field">
					<p class="control">
						<button class="button" v-bind:class="{ 'is-loading': loadProgress }">
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

import { required, email, numeric } from 'vuelidate/lib/validators'
import { mapGetters, mapActions, mapState } from 'vuex';

export default {


	data: () => ({

		imageName: null,
		imageFile: "",
	}),



	validations: { //Validation calibrace open 

		loadSingleData: {

			name: {
				required
			},

			occupation: {
				required,
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

	created() {
		this.setId()
	},

	methods: {
		...mapActions(['fetchSingleData', 'clearErrors', 'editData']),

			// Local methods goes here

			setId() {
				let id = this.$route.params.id
				this.fetchSingleData(id)
			},


			fileUpload(e) {
				this.imageName = e.target.files[0].name
				this.imageFile = e.target.files[0]
			},

			submitForm() {
				let data = new FormData();
				data.append("_method", "put");
				data.append('name', this.$store.getters.loadSingleData.name);
				data.append('phone', this.$store.getters.loadSingleData.phone);
				data.append('occupation', this.$store.getters.loadSingleData.occupation);
				data.append('file', this.imageFile);

				let id = this.$route.params.id

				this.editData( {data, id} );

				let changeRoute = this.loadSucceeded ? '': this.$router.push({name:'driver-list'})

			},


		}, // Method calibrace close


		computed: {
			...mapGetters(['loadSingleData', 'loadLoading', 'loadProgress', 'loadSucceeded', 'loadErrors']),


		},

} // Export calibrace closes

</script>