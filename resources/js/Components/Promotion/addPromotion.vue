


<template>


	<div class="container"> <!-- Container tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadRestaurantLoader }"><span class="title"> Bellewise loading </span></div>

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Add Promo </strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'list-promotion' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>




		<div class="box"> <!-- Box container tag open -->

			<div class="notification purple-bg-light is-bold has-text-black" v-if="loadPromoErrors">
				<ul>
					<li v-for="(value, name, index) in loadPromoErrors">
						{{ index+1 }} . {{ value[0] }}
					</li>
				</ul>
			</div>

			<form v-on:submit.prevent="submitForm"> <!-- Form tag open -->

				<div class="field">
					<div class="control">
						<label class="radio is-bold">
							<input type="radio" name="question" value="All" v-model="user">
							For All Users
						</label>
						<label class="radio is-bold">
							<input type="radio" name="question" value="New" v-model="user">
							For First Time Users
						</label>
					</div>
				</div>



				<div class="columns"> <!-- Columns wrapper tag open -->

					<div class="column"> <!-- First column tag open-->


						<div class="field">
							<label class="label"> Promo Name <span class="has-text-danger"> * </span>  </label>
							<div class="control has-icons-left has-icons-right">
								<input class="input is-info" type="text" placeholder="Text input" v-model.trim="promo.name"  required autofocus>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-plus purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.promo.name.required">
									<i class="fas fa-check purple-color"></i>
								</span>
								<span class="icon is-small is-right" v-else>
									<i class="fas fa-exclamation-triangle has-text-danger"></i>
								</span>
							</div>
						</div>

						<div class="field has-addons">
							<p class="control">
								<span class="select">
									<select>
										<option class="is-bold">%</option>
									</select>
								</span>
							</p>
							<p class="control is-expanded">
								<input class="input is-info" type="number" min="0" oninput="validity.valid||(value='');" v-model.nimber="promo.discount" placeholder="Percentage" required>
							</p>
							<p class="control">
								<a class="button is-bold">
									Discount Off
								</a>
							</p>
						</div>


						<div class="field">
							<label class="label"> Promo Bearer</label>
							<div class="control">
								<div class="select is-fullwidth">
									<select v-model="promo.bearer" required>
										<option disabled value="Please select bearer" selected> {{ 'Please select bearer' }}</option>
										<option> Restaurant </option>
										<option> Bellewise </option>
									</select>
								</div>
							</div>
						</div>


						<div class="field">
							<label class="label"> Total No. Of Vouchers <span class="has-text-danger"> * </span>  </label>
							<div class="control has-icons-left has-icons-right">
								<input class="input is-info" type="number" placeholder="Number of vouchers" v-model.number="promo.vouchers" oninput="validity.valid||(value='');" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-receipt purple-color"></i>
								</span>
								<!-- Has icon right -->
								<span class="icon is-small is-right" v-if="$v.promo.vouchers.required">
									<i class="fas fa-check purple-color"></i>
								</span>
								<span class="icon is-small is-right" v-else>
									<i class="fas fa-exclamation-triangle has-text-danger"></i>
								</span>
							</div>
						</div>

						<div class="field">
							<label class="label"> Promo Validity <span class="has-text-danger"> * </span>  </label>
							<div class="control ">
								<input id="my-element" type="date" data-display-mode="dialog"  data-close-on-select="false" data-date-format="YYYY-MM-DD" data-color="info" required>
							</div>
						</div>


						<div class="field has-addons mt-5">
							<p class="control">
								<span class="select">
									<select>
										<option>₦</option>
									</select>
								</span>
							</p>
							<p class="control is-expanded">
								<input class="input is-info" type="number" oninput="validity.valid||(value='');" placeholder="Amount" v-model.number="promo.amount" required>
							</p>
							<p class="control">
								<a class="button is-bold">
									Minimium amount
								</a>
							</p>
						</div>


					</div> <!-- First column tag close -->



					<div class="column"> <!-- Second column tag open-->

						<nav class="panel">
							<p class="panel-heading">
								Select Restaurants
							</p>
							<div class="panel-block">
								<p class="control has-icons-left">
									<input class="input" type="text" placeholder="Search restaurant" v-model="searchQuery" v-on:keyup="searchMethod">
									<span class="icon is-left">
										<i class="fas fa-search purple-color" aria-hidden="true"></i>
									</span>
								</p>
							</div>


							<p class="panel-tabs">
								<label class="panel-block">
									<input type="checkbox" v-model="mark" true-value="on" false-value="off" @click =" mark  == 'on'  ? promo.restaurantsID = [] : promo.restaurants = markAll">
									Mark All
								</label>
							</p>

							<label class="panel-block" v-for="(restaurant, index) in searchQuery.length  > 1  ? loadRestaurantSearch : loadRestaurants" :key="index">
								<input type="checkbox" :value="restaurant.id" v-model="promo.restaurants">
								{{ index+1 }}. {{ restaurant.name.substring(0,35) }}
							</label>

							<!-- Pagination section -->
							<div class="buttons has-addons is-centered" v-if="loadRestaurants.length >= 1">
								<a class="button" v-if="loadRestaurantPagination.previousPageUrl" @click="paginationHandler(loadRestaurantPagination.previousPageUrl)">
									<span class="icon is-small">
										<i class="fas fa-arrow-left purple-color"></i>
									</span>
									<span> Previous </span>
								</a>


								<a class="button">

									{{ loadRestaurantPagination.to}} 0f {{loadRestaurantPagination.total}}
								</a>


								<a class="button" v-if="loadRestaurantPagination.nextPageUrl" @click="paginationHandler(loadRestaurantPagination.nextPageUrl)">
									<span class="icon is-small">
										<i class="fas fa-arrow-right purple-color"></i>
									</span>
									<span> Next </span>
								</a>
							</div>


							<div class="card" v-if="loadRestaurants.length <= 0">
								<div class="card-content">
									<div class="content is-bold has-text-centered subtitle">
										<span class="fa"> No restaurant found. click <router-link :to="{ name: 'add-restaurant' }" > here  to add a restaurant. </router-link>  </span>
									</div>
								</div>
							</div>

						</nav>

					</div> <!-- Second column tag close -->


				</div> <!-- Columns wrapper tag close -->

				<div class="field">
					<p class="control">
						<button class="button" v-bind:class="{ 'is-loading': loadPromoProgress }" :disabled="$v.promo.$invalid">
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

import { required, email, numeric, minLength } from 'vuelidate/lib/validators'
import BulmaCalendar from "../../Mixins/bulmaCalendar.js";
import { mapGetters, mapActions, mapState } from 'vuex';
import bulmaCalendar from 'bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js';

export default {

	mixins: [
	BulmaCalendar
	],

	data: () => ({

		promo: {
			name: null,
			vouchers: null,
			amount: null,
			discount: null,
			bearer: null,
			validity: null,
			restaurantsID: [],
		},

		searchQuery: '',
		user: 'all',
		mark: null,
	}),

	created() {
		this.fetchRestaurantDatas()
		this.fetchAllRestaurantDatas()
	},

	validations: { //Validation calibrace open 

		promo: {

			name: {
				required
			},

			vouchers: {
				required,
			},

			amount: {
				required
			},

			discount: {
				required
			}

		}, 

	}, //Validation calibrace close 

	methods: { // Method calibrace open 

		...mapActions(['fetchRestaurantDatas', 'searchRestaurantDatas', 'fetchAllRestaurantDatas', 'createPromo']),

		paginationHandler(uri) {
			this.fetchRestaurantDatas(uri)
		},

		searchMethod() {
			if(this.searchQuery.length > 1) {
				this.searchRestaurantDatas(this.searchQuery)
			}
		},

		submitForm() {
			let data = new FormData();
			data.append("_method", "post");
			data.append('name', this.promo.name);
			data.append('voucher', this.promo.vouchers);
			data.append('amount', this.promo.amount);
			data.append('discount', this.promo.discount);
			data.append('bearer', this.promo.bearer);
			data.append('validity', this.promo.validity);
			data.append('user', this.user);
			data.append('restaurantsID', this.promo.restaurants);
			this.createPromo(data)
		},

		bulmaCalendar() {
// Initialize all input of date type.
const calendars = bulmaCalendar.attach('[type="date"]', '[color="info"]', );

// Loop on each calendar initialized
calendars.forEach(calendar => {
  // Add listener to date:selected event
  calendar.on('date:selected', date => {
  	console.log(date);
  });
});

// To access to bulmaCalendar instance of an element
const element = document.querySelector('#my-element');
if (element) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  element.bulmaCalendar.on('select', datepicker => {
  	this.promo.validity = datepicker.data.value();
  });
}
},		

}, // Method calibrace close

computed: { // Computed calibrace open
	...mapGetters(['loadRestaurants', 'loadRestaurantPagination', 'loadRestaurantSearch', 'loadAllRestaurants', 'loadRestaurantLoader', 'loadPromoProgress', 'loadPromoErrors']),
    // Local computed properties
    markAll() {
    	let restaurant = this.$store.getters.loadAllRestaurants
    	let arrayLength = this.$store.getters.loadAllRestaurants.length
    	let selectAll = []
    	for (let i = 0; i < arrayLength; i++) {
    		selectAll.push(parseFloat(restaurant[i].id))
    	}
    	return  selectAll
    }

}, // Computed calibrace close




}

</script>