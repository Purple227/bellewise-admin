
<template>

	<div class="" > <!-- Root element tag open -->

		<!-- Main container -->
		<nav class="level">
			
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Delivery Timing </strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'list-restaurant' }" exact> <strong class="purple-color"> Back </strong> </router-link> </p>
			</div>
		</nav>


		<!-- Add section -->
		<form v-on:submit.prevent="submitForm"> <!-- Form tag open -->

			<div class="field">
				<label class="label"> Preparation Time  </label>
				<div class="control">
					<input id="preparation-time" type="date" data-display-mode="dialog"  data-color="info" data-type="time" >
				</div>
			</div>

			<div class="columns"> <!-- Columns wrapper tag open -->

				<div class="column"> <!-- First column tag open-->
					<div class="field">
						<label class="label"> Minimium DeliveryTime  </label>
						<div class="control">
							<input id="minimium-delivery-time" type="date" data-display-mode="dialog"  data-color="info" data-type="time">
						</div>
					</div>
				</div> <!-- First column tag close -->


				<div class="column"> <!-- Second column tag open-->
					<div class="field">
						<label class="label"> Maximum DeliveryTime  </label>
						<div class="control">
							<input id="maximium-delivery-time" type="date" data-display-mode="dialog"  data-color="info" data-type="time" >
						</div>
					</div>
				</div> <!-- Second column tag close -->


			</div> <!-- Columns wrapper tag close -->

			<p class="subtitle is-5">
				<strong> Opening/Closing Slot  </strong> 
			</p>

			<div class="field is-horizontal box">
				<div class="field-label">
					<label class="label">Mon</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input id="monday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
							<label class="checkbox">
								<input type="checkbox" @change="restaurantConfig.mondayStatus = !restaurantConfig.mondayStatus">
								Status
							</label>
						</div>
					</div>
				</div>
			</div>


			<div class="field is-horizontal box">
				<div class="field-label">
					<label class="label">Tue</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input id="tuesday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
							<label class="checkbox">
								<input type="checkbox" @change="restaurantConfig.tuesdayStatus = !restaurantConfig.tuesdayStatus">
								Status
							</label>
						</div>
					</div>
				</div>
			</div>


			<div class="field is-horizontal box">
				<div class="field-label">
					<label class="label">Wed</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input id="Wednesday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
							<label class="checkbox">
								<input type="checkbox" @change="restaurantConfig.WednesdayStatus = !restaurantConfig.WednesdayStatus">
								Status
							</label>
						</div>
					</div>
				</div>
			</div>


			<div class="field is-horizontal box">
				<div class="field-label">
					<label class="label">Thu</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input id="thursday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
							<label class="checkbox">
								<input type="checkbox" @change="restaurantConfig.thursdayStatus = !restaurantConfig.thursdayStatus">
								Status
							</label>
						</div>
					</div>
				</div>
			</div>

			<div class="field is-horizontal box">
				<div class="field-label">
					<label class="label">Fri</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input id="friday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
							<label class="checkbox">
								<input type="checkbox" @change="restaurantConfig.fridayStatus = !restaurantConfig.fridayStatus">
								Status
							</label>
						</div>
					</div>
				</div>
			</div>

			<div class="field is-horizontal box">
				<div class="field-label">
					<label class="label">Sat</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input id="saturday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
							<label class="checkbox">
								<input type="checkbox" @change="restaurantConfig.saturdayStatus = !restaurantConfig.saturdayStatus">
								Status
							</label>
						</div>
					</div>
				</div>
			</div>


			<div class="field is-horizontal box">
				<div class="field-label">
					<label class="label">Sun</label>
				</div>
				<div class="field-body">
					<div class="field">
						<div class="control">
							<input id="sunday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
							<label class="checkbox">
								<input type="checkbox" @change="restaurantConfig.sundayStatus = !restaurantConfig.sundayStatus">
								Status
							</label>
						</div>
					</div>
				</div>
			</div>

			<div class="field">
				<p class="control">
					<button class="button" v-bind:class="{ 'is-loading': loadConfigProgress }">
						<span class="icon is-small">
							<i class="fas fa-save purple-color"></i>
						</span>
						<span class="is-bold"> Save </span>
					</button>
				</p>
			</div>

		</form> <!-- Form tag close -->




			<div class="box"> 

				<div class="content">
					<hr class="is-paddingless">
					<p class="subtitle is-bold"> Preparation Time <span class="purple-color" >:</span> {{ loadRestaurantConfig.preparation_time }} </p>
					<hr class="is-paddingless">
				</div>


				<div class="columns is-gapless"> <!-- Columns wrapper tag open -->


					<div class="column"> <!-- First column tag open-->


						<nav class="level">

							<!-- Left side -->
							<div class="level-left">
								<div class="level-item">




									<div class="content">
										<hr class="is-paddingless">
										<p class="subtitle is-bold"> Minimium Delivery Time <span class="purple-color" >:</span> {{ loadRestaurantConfig.minimium_delivery_time }} </p>
										<hr class="is-paddingless">
										<p class="subtitle is-bold"> Monday </p>
										<hr class="is-paddingless">
									</div>



								</div>
							</div>

							<!-- Right side -->
							<div class="level-right">
								<div class="level-item">


									<div class="content">
										<hr class="is-paddingless">
										<p class="subtitle is-bold"> Maximium Delivery Time <span class="purple-color" >:</span> {{ loadRestaurantConfig.maximium_delivery_time }} </p>
										<hr class="is-paddingless">
										<p class="subtitle is-bold"> {{ loadRestaurantConfig.monday }}   <input class="is-pulled-right mt-2" type="checkbox" :checked="loadRestaurantConfig.monday_status == 1 ? true : false" disabled>   </p>
										<hr class="is-paddingless">
									</div>

								</div>
							</div>

						</nav>


					</div> <!-- First column tag close -->


				</div> <!-- Columns wrapper tag close -->

			</div>



		</div> <!-- Root element tag open -->


	</template>

	<script>
	import bulmaCalendar from 'bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js';
	import { mapGetters, mapActions, mapState } from 'vuex';

	export default {

		data: () => ({

			restaurantConfig: {
				preparationTime: 'none',
				minimiumDeliveryTime: 'none',
				maximiumDeliveryTime: 'none',
				monday: 'none',
				mondayStatus: 0,
				tuesday: 'none',
				tuesdayStatus: 0,
				Wednesday: 'none',
				WednesdayStatus: 0,
				thursday: 'none',
				thursdayStatus: 0,
				friday: 'none',
				fridayStatus: 0,
				saturday: 'none',
				saturdayStatus: 0,
				sunday: 'none',
				sundayStatus: 0,
			},


			switcher: null,


		}),

		mounted() {
			this.bulmaCalendar()
			this.setId()
		},


		methods: {

			...mapActions(['restaurantConfigSetting','fetchRestaurantConfig']),

			setId() {
				let id = this.$route.params.id
				this.fetchRestaurantConfig(id)
			},


			submitForm() {

				let data = new FormData();
				data.append("_method", "post");
				data.append('preparation_time', this.restaurantConfig.preparationTime);
				data.append('minimium_delivery_time', this.restaurantConfig.minimiumDeliveryTime);
				data.append('maximium_delivery_time', this.restaurantConfig.maximiumDeliveryTime);
				data.append('monday', this.restaurantConfig.monday);
				data.append('monday_status', this.restaurantConfig.mondayStatus);
				data.append('tuesday', this.restaurantConfig.tuesday);
				data.append('tuesday_status', this.restaurantConfig.tuesdayStatus);
				data.append('wednesday', this.restaurantConfig.Wednesday);
				data.append('wednesday_status', this.restaurantConfig.WednesdayStatus);
				data.append('thursday', this.restaurantConfig.thursday);
				data.append('thursday_status', this.restaurantConfig.thursdayStatus);
				data.append('friday', this.restaurantConfig.friday);
				data.append('friday_status', this.restaurantConfig.fridayStatus);
				data.append('saturday', this.restaurantConfig.saturday);
				data.append('saturday_status', this.restaurantConfig.saturdayStatus);
				data.append('sunday', this.restaurantConfig.sunday);
				data.append('sunday_status', this.restaurantConfig.sundayStatus);

				let id = this.$route.params.id
				this.restaurantConfigSetting({data, id})

		},


		bulmaCalendar() {
// Initialize all input of date type.
const calendars = bulmaCalendar.attach('[type="date"]', '[color="info"]', '[]' );

// Loop on each calendar initialized
calendars.forEach(calendar => {
  // Add listener to date:selected event
  calendar.on('date:selected', date => {
  	//console.log(date);
  });
});

// To access to bulmaCalendar instance of an element
const preparationTime = document.querySelector('#preparation-time');
if (preparationTime) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  preparationTime.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.preparationTime = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const minimiumDeliveryTime = document.querySelector('#minimium-delivery-time');
if (minimiumDeliveryTime) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  minimiumDeliveryTime.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.minimiumDeliveryTime = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const maximiumDeliveryTime = document.querySelector('#maximium-delivery-time');
if (maximiumDeliveryTime) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  maximiumDeliveryTime.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.maximiumDeliveryTime = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const monday = document.querySelector('#monday');
if (monday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  monday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.monday = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const tuesday = document.querySelector('#tuesday');
if (tuesday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  tuesday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.tuesday = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const Wednesday = document.querySelector('#Wednesday');
if (Wednesday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  Wednesday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.Wednesday = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const thursday = document.querySelector('#thursday');
if (thursday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  thursday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.thursday = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const friday = document.querySelector('#friday');
if (friday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  friday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.friday = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const saturday = document.querySelector('#saturday');
if (saturday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  saturday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.saturday = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const sunday = document.querySelector('#sunday');
if (sunday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  sunday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.sunday = datepicker.data.value();
  });
}



},

},

computed: {
	...mapGetters(['loadConfigProgress', 'loadConfigNotification', 'loadRestaurantConfig', 'loadConfigLoader']),
},


}

</script>
