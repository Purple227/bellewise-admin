


<template>


	<div class="container"> <!-- Container tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadPromoLoader  && loadRestaurantLoader }"><span class="title"> Loading Bellewise</span></div>



		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Edit {{loadSinglePromo.promo.name}} </strong> 
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
						{{ index+1 }}. {{ value[0] }}
					</li>
				</ul>

			</div>



			<form v-on:submit.prevent="submitForm"> <!-- Form tag open -->

				<div class="field">
					<div class="control">
						<label class="radio is-bold">
							<input type="radio"  value="All" v-model="loadSinglePromo.promo.user">
							For All Users
						</label>
						<label class="radio is-bold">
							<input type="radio" value="New" v-model="loadSinglePromo.promo.user">
							For First Time Users
						</label>
					</div>
				</div>



				<div class="columns"> <!-- Columns wrapper tag open -->

					<div class="column"> <!-- First column tag open-->


						<div class="field">
							<label class="label"> Promo Name <span class="has-text-danger"> * </span>  </label>
							<div class="control has-icons-left has-icons-right">
								<input class="input is-info" type="text" placeholder="Text input" v-model.trim="loadSinglePromo.promo.name"  required autofocus>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-plus purple-color"></i>
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
								<input class="input is-info" type="number" v-model.nimber="loadSinglePromo.promo.discount" min="0" oninput="validity.valid||(value='');" placeholder="Percentage ">
							</p>
							<p class="control">
								<a class="button is-bold">
									Promo Discount Off
								</a>
							</p>
						</div>


						<div class="field">
							<label class="label"> Promo Bearer</label>
							<div class="control">
								<div class="select is-fullwidth">
									<select v-model="loadSinglePromo.promo.bearer" required>
										<option> Restaurant </option>
										<option> bellewise </option>
									</select>
								</div>
							</div>
						</div>


						<div class="field">
							<label class="label"> Total No. Of Vouchers <span class="has-text-danger"> * </span>  </label>
							<div class="control has-icons-left has-icons-right">
								<input class="input is-info" type="number" placeholder="Number input" v-model.number="loadSinglePromo.promo.voucher" min="0" oninput="validity.valid||(value='');" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-receipt purple-color"></i>
								</span>

							</div>
						</div>

						<div class="field">
							<label class="label"> Promo Validity <span class="has-text-danger"> * </span>  </label>
							<div class="control ">
								<input id="my-element" type="date" data-display-mode="dialog" v-model.number="loadSinglePromo.promo.validity" data-close-on-select="false" data-date-format="YYYY-MM-DD" data-color="info" required>
							</div>
						</div>





						<div class="field">
							<label class="label"> Promo Minimium Amount <span class="has-text-danger"> * </span> </label>
							<div class="control has-icons-right has-icons-left">
								<input class="input is-info" type="number" placeholder="Number input" min="0" oninput="validity.valid||(value='');" v-model.number="loadSinglePromo.promo.amount" required>
								<!-- Has icon left -->
								<span class="icon is-small is-left">
									<i class="fas fa-file-invoice-dollar purple-color"></i>
								</span>

							</div>
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
									<input type="checkbox" v-model="mark" true-value="on" false-value="off" @click =" mark  == 'on'  ? restaurantsID = [] : restaurantsID = markAll">
									Mark All
								</label>
							</p>

							<label class="panel-block" v-for="(restaurant, index) in searchQuery.length  > 1  ? loadRestaurantSearch : loadRestaurants" :key="index">
								<input type="checkbox" :value="restaurant.id" v-model="restaurantsID">
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
						<button class="button" v-bind:class="{ 'is-loading': loadPromoProgress }">
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

import { required, email, numeric, minLength } from 'vuelidate/lib/validators'
import { mapGetters, mapActions, mapState } from 'vuex';
import bulmaCalendar from 'bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js';

export default {

	data: () => ({
		searchQuery: '',
		mark: null,
		restaurantsID: [],
	}),


	created() {
		this.setId()
		this.fetchRestaurantDatas()
		this.fetchAllRestaurantDatas()
		this.loadRestaurantPreviouslySelectedId()
		this.bulmaCalendar()
	},

	methods: {
		...mapActions(['fetchSinglePromo', 'clearPromoErrors', 'editPromoData', 'fetchRestaurantDatas', 'searchRestaurantDatas', 'fetchAllRestaurantDatas',]),
			// Local methods goes here

			paginationHandler(uri) {
				this.fetchRestaurantDatas(uri)
			},

			searchMethod() {
				if(this.searchQuery.length > 1) {
					this.searchRestaurantDatas(this.searchQuery)
				}
			},

			loadRestaurantPreviouslySelectedId() {
				let firstTime = true
				if (firstTime == true) {
					let restaurant = this.$store.getters.loadSinglePromo.promo.restaurants
					let arrayLength = this.$store.getters.loadSinglePromo.promo.restaurants.length
					for (let i = 0; i < arrayLength; i++) {
						this.restaurantsID.push(restaurant[i].id)
					}
				}
				firstTime = false
			},

			setId() {
				let id = this.$route.params.id
				this.fetchSinglePromo(id)
			},

			submitForm() {
				let data = new FormData();
				data.append("_method", "patch");
				data.append('name', this.loadSinglePromo.promo.name);
				data.append('voucher', this.loadSinglePromo.promo.voucher);
				data.append('amount', this.loadSinglePromo.promo.amount);
				data.append('discount', this.loadSinglePromo.promo.discount);
				data.append('bearer', this.loadSinglePromo.promo.bearer);
				data.append('validity', this.loadSinglePromo.promo.validity);
				data.append('user', this.loadSinglePromo.promo.user);
				data.append('restaurantsID', JSON.stringify(this.restaurantsID));
				let id = this.$route.params.id
				this.editPromoData( {data, id} );
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
  	let selectedDate = datepicker.data.value()
  	selectedDate = selectedDate.replace(/\//g, "-")
  	this.loadSinglePromo.promo.validity = selectedDate;
  });
}
},	

		}, // Method calibrace close


		computed: {
			...mapGetters(['loadSinglePromo', 'loadPromoLoader', 'loadPromoProgress', 'loadPromoErrors','loadRestaurants', 'loadRestaurantPagination', 'loadRestaurantSearch', 'loadAllRestaurants', 'loadRestaurantLoader']),
    // Local computed properties
    markAll() {
    	let restaurant = this.$store.getters.loadAllRestaurants
    	let arrayLength = this.$store.getters.loadAllRestaurants.length
    	let selectAll = []
    	for (let i = 0; i < arrayLength; i++) {
    		selectAll.push(restaurant[i].id)
    	}
    	return  selectAll
    },

},

} // Export calibrace closes

</script>
