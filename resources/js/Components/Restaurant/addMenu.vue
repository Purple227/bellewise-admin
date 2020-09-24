

<template>	

	<div class="box"> <!-- box tag open -->


		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Menu Enterng </strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'restaurant-menu' }" exact> <strong class="purple-color" v-if="$v.menu.$invalid"> Back </strong> </router-link> </p>
			</div>
		</nav>



		<div class="notification purple-bg-light is-bold has-text-black" v-if="loadMenuErrors">
			<ul>
				<li v-for="(value, name, index) in loadMenuErrors">
					{{ index+1 }}. {{ value[0] }}
				</li>
			</ul>
		</div>

		<form v-on:submit.prevent="submitForm"> <!-- Form tag open -->


			<div class="columns"> <!-- Columns wrapper tag open -->

				<div class="column"> <!-- First column tag open-->

					<div class="field">
						<label class="label">Menu Name <span class="has-text-danger"> * </span>  </label>
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

					<div class="field has-addons mt-6">
						<p class="control">
							<span class="select">
								<select>
									<option>₦</option>
								</select>
							</span>
						</p>
						<p class="control is-expanded">
							<input class="input is-info" type="number" min="0" oninput="validity.valid||(value='');" placeholder="Amount of money" v-model.trim="menu.price">
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
						<label class="label">  Description <span class="has-text-danger"> * </span> </label>
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

					<div class="field mt-6">
						<div class="file has-name">
							<label class="file-label">
								<input class="file-input is-info" type="file" name="resume" @change="fileUploadMenu">
								<span class="file-cta">
									<span class="file-icon">
										<i class="fas fa-image purple-color"></i>
									</span>
									<span class="file-label is-bold">
										Choose a file…
									</span>
								</span>
								<span class="file-name">
									{{  menu.imageName || "Upload an image" }}
								</span>
							</label>
						</div>
					</div>

				</div> <!-- Second column tag close -->


			</div> <!-- Columns wrapper tag close -->


			<button class="button" v-bind:class="{ 'is-loading': loadMenuProgress }" :disabled="$v.menu.$invalid">
				<span class="icon is-small">
					<i class="fas fa-save purple-color"></i>
				</span>
				<span class="is-bold"> Save </span>
			</button>

		</form> <!-- Form tag close -->

	</div>	<!-- box tag close -->


</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex';

export default {


	data: () => ({


		menu: {
			Name: null,
			description: null,
			price: null,
			imageName: null,
			imageFile: "",
		},

	}),



	validations: { //Validation calibrace open 

		menu: {

			name: {
				required,
			},

			description: {
				required,
			},

			price: {
				required,
			}

		},  //Menu calibrace close

	}, //Validation calibrace close 

	methods: {
		...mapActions(["createMenuData", "clearMenuErrors"]),

		// Local method goes here

		fileUploadMenu(e) {
			this.menu.imageName = e.target.files[0].name
			this.menu.imageFile = e.target.files[0]
		},

		submitForm() {


			let data = new FormData();
			data.append("_method", "post");
			data.append('name', this.menu.name);
			data.append('price', this.menu.price);
			data.append('file', this.menu.imageFile);
			data.append('description', this.menu.description);

			let id = this.$route.params.id
			this.createMenuData( {data, id } )

		},

	}, // Method calibrace close

	computed: {
		...mapGetters(['loadMenuProgress', 'loadMenuErrors']),
    // Local computed properties

},

}

</script>