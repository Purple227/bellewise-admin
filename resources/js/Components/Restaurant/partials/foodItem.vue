

<template>
	


		<div> <!-- Second step tag open -->

			<div class="tabs is-toggle is-fullwidth">
				<ul>
					<li class="" v-bind:class="{ 'active': create }">
						<a @click="[create = true, food=false]">
							<span class="icon is-small" v-bind:class="{ 'has-text-white': create }"><i class="fas fa-plus-square" aria-hidden="true"></i></span>
							<span class="" v-bind:class="{ 'has-text-white': create }"> Create</span>
						</a>
					</li>
					<li v-bind:class="{ 'active': food }">
						<a @click="[create=false, food=true]">
							<span class="icon is-small" v-bind:class="{ 'has-text-white': food }"><i class="fas fa-utensils" aria-hidden="true"></i></span>
							<span class="" v-bind:class="{ 'has-text-white': food }">Food Items 3</span>
						</a>
					</li>

				</ul>
			</div>


			<div class="columns" v-if="create"> <!-- Columns wrapper tag open -->


				<div class="column"> <!-- First column tag open-->

					<div class="field">
						<label class="label">Food Name <span class="has-text-danger"> * </span>  </label>
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

					<div class="field has-addons mt-3">
						<p class="control">
							<span class="select">
								<select>
									<option>₦</option>
								</select>
							</span>
						</p>
						<p class="control is-expanded">
							<input class="input is-info" type="number" placeholder="Amount of money">
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
						<label class="label"> Food Description <span class="has-text-danger"> * </span> </label>
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

					<div class="field mt-3">
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


			<aside class="menu" v-if="food">
				<ul class="menu-list">
					<li><a>1. Salad <span class="delete is-pulled-right" ></span> <span class="fas fa-edit is-pulled-right mr-3 purple-color" @click="[create = true, food=false]"></span> </a></li>
					<li><a>2. Blah    <span class="delete is-pulled-right" ></span> <span class="fas fa-edit is-pulled-right mr-3 purple-color" @click="[create = true, food=false]"></span> </a></li>
					<li><a>3. Soda  <span class="delete is-pulled-right" ></span> <span class="fas fa-edit is-pulled-right mr-3 purple-color" @click="[create = true, food=false]"></span> </a></li>
				</ul>
			</aside>

			<button class="button is-fullwidth" @click="[create = true, food=false]">
				<span class="icon is-medium">
					<i class="fas fa-plus purple-color"></i>
				</span>
				<span class="is-bold">Add</span>
			</button>


		</div> <!-- Second step tag close -->





</template>


<script>
import { required, email, numeric } from 'vuelidate/lib/validators'

export default {


	data: () => ({


		menu: {
			Name: null,
			description: null,
			price: null,
			file: null,
		},

		food: true,
		create: false,

	}),



	validations: { //Validation calibrace open 

		menu: {

			name: {
				required,
			},

			description: {
				required,
			}

		},  //Menu calibrace close

	}, //Validation calibrace close 




}

</script>