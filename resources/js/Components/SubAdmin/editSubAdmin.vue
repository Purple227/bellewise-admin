
<template>


	<div class="container"> <!-- Container tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadSubAdminLoader }"><span class="title"> Loading Bellewise</span></div>

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Edit {{ loadSubAdminSingleData.name }} </strong> 
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
								<input class="input is-info" type="text" v-model.trim="loadSubAdminSingleData.name"  required autofocus>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-truck purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.loadSubAdminSingleData.name.required">
									<i class="fas fa-check purple-color"></i>
								</span>
								<span class="icon is-small is-right" v-else>
									<i class="fas fa-exclamation-triangle has-text-danger"></i>
								</span>
							</div>
						</div>

					</div> <!-- First column tag close -->


					<div class="column"> <!-- Second column tag open-->


						<div class="field" style="margin-top: 30px;">
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
						<button class="button" v-bind:class="{ 'is-loading': loadSubAdminProgress }" :disabled="$v.loadSubAdminSingleData.$invalid">
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

		loadSubAdminSingleData: {

			name: {
				required
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
		...mapActions(['fetchSubAdminSingleData', 'clearSubAdminErrors', 'editSubAdminData']),

			// Local methods goes here

			setId() {
				let id = this.$route.params.id
				this.fetchSubAdminSingleData(id)
			},


			fileUpload(e) {
				this.imageName = e.target.files[0].name
				this.imageFile = e.target.files[0]
			},

			submitForm() {
				let data = new FormData();
				data.append("_method", "put");
				data.append('name', this.$store.getters.loadSubAdminSingleData.name);
				data.append('file', this.imageFile);

				let id = this.$route.params.id

				this.editSubAdminData( {data, id} );

			},


		}, // Method calibrace close


		computed: {
			...mapGetters(['loadSubAdminSingleData', 'loadSubAdminLoader', 'loadSubAdminProgress', 'loadSubAdminErrors']),


		},

} // Export calibrace closes

</script>