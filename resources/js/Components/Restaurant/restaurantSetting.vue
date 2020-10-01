
<template>

	<div class="" > <!-- Root element tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadConfigLoader }"><span class="title"> Bellewise loading </span></div>
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

		<label class="label"> Preparation Time  </label>
		<div class="field has-addons">
			<p class="control is-expanded">
				<input id="preparation-time" type="date" data-display-mode="dialog"  data-color="info" data-type="time" >
			</p>
			<p class="control">
				<a class="button ">
					Currently <span class="is-bold ml-3">:</span>  <span class="purple-color ml-3"> {{ loadRestaurantConfig.preparation_time == 'null' ? '00:00' : loadRestaurantConfig.preparation_time }} </span>
				</a>
			</p>
		</div>


		<div class="columns"> <!-- Columns wrapper tag open -->

			<div class="column"> <!-- First column tag open-->

				<label class="label"> Minimium DeliveryTime  </label>
				<div class="field has-addons">
					<p class="control is-expanded">
						<input id="minimium-delivery-time" type="date" data-display-mode="dialog"  data-color="info" data-type="time">
					</p>
					<p class="control">
						<a class="button ">
							Currently <span class="is-bold ml-3">:</span>  <span class="purple-color ml-3"> {{ loadRestaurantConfig.minimium_delivery_time == 'null' ? '00:00' : loadRestaurantConfig.minimium_delivery_time }} </span>
						</a>
					</p>
				</div>

			</div> <!-- First column tag close -->


			<div class="column"> <!-- Second column tag open-->

				<label class="label"> Maximum DeliveryTime  </label>
				<div class="field has-addons">
					<p class="control is-expanded">
						<input id="maximium-delivery-time" type="date" data-display-mode="dialog"  data-color="info" data-type="time" >
					</p>
					<p class="control">
						<a class="button ">
							Currently <span class="is-bold ml-3">:</span>  <span class="purple-color ml-3"> {{ loadRestaurantConfig.maximium_delivery_time == 'null' ? '00:00 ' : loadRestaurantConfig.maximium_delivery_time }} </span>
						</a>
					</p>
				</div>

			</div> <!-- Second column tag close -->


		</div> <!-- Columns wrapper tag close -->

		<p class="subtitle is-5">
			<strong> Opening/Closing Slot  </strong> 
		</p>


		<div class="field has-addons">
			<p class="control">
				<a class="button is-bold">
					Mon
				</a>				
			</p>
			<p class="control is-expanded">
				<input id="monday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
			</p>
			<p class="control">
				<a class="button ">
					Currently <span class="is-bold ml-3">:</span>  <span class="purple-color ml-3"> {{ loadRestaurantConfig.monday == 'null' ? '00:00 - 00:00' : loadRestaurantConfig.monday }} </span>
				</a>
				<a class="button">
					<input type="checkbox" @change="[restaurantConfig.mondayStatus = !restaurantConfig.mondayStatus]" :checked="restaurantConfig.mondayStatus == 1 ? true : false" v-if="Object.keys(loadRestaurantConfig).length == 0">
					<input type="checkbox" @change="[loadRestaurantConfig.monday_status = !loadRestaurantConfig.monday_status]" :checked="loadRestaurantConfig.monday_status == 1 ? true : false" v-else>
					<p class="ml-1"> {{ loadRestaurantConfig.monday_status || restaurantConfig.mondayStatus == true ? 'Active' : 'Inactive'}} </p>
				</a>
			</p>
		</div>


		<div class="field has-addons">
			<p class="control">
				<a class="button is-bold">
					Tue
				</a>				
			</p>
			<p class="control is-expanded">
				<input id="tuesday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
			</p>
			<p class="control">
				<a class="button ">
					Currently <span class="is-bold ml-3">:</span>  <span class="purple-color ml-3"> {{ loadRestaurantConfig.tuesday == 'null' ? '00:00 - 00:00' : loadRestaurantConfig.tuesday }} </span>
				</a>
				<a class="button">
					<input type="checkbox" @change="[restaurantConfig.tuesdayStatus = !restaurantConfig.tuesdayStatus]" :checked="restaurantConfig.tuesdayStatus == 1 ? true : false" v-if="Object.keys(loadRestaurantConfig).length == 0">
					<input type="checkbox" @change="[loadRestaurantConfig.tuesday_status = !loadRestaurantConfig.tuesday_status]" :checked="loadRestaurantConfig.tuesday_status == 1 ? true : false" v-else>
					<p class="ml-1"> {{ loadRestaurantConfig.tuesday_status || restaurantConfig.tuesdayStatus == true ? 'Active' : 'Inactive' }} </p>
				</a>
			</p>
		</div>


		<div class="field has-addons">
			<p class="control">
				<a class="button is-bold">
					Wed
				</a>				
			</p>
			<p class="control is-expanded">
				<input id="Wednesday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
			</p>
			<p class="control">
				<a class="button ">
					Currently <span class="is-bold ml-3">:</span>  <span class="purple-color ml-3"> {{ loadRestaurantConfig.wednesday == 'null' ? '00:00 - 00:00' : loadRestaurantConfig.wednesday }} </span>
				</a>
				<a class="button">
					<input type="checkbox" @change="[restaurantConfig.WednesdayStatus = !restaurantConfig.WednesdayStatus]" :checked="restaurantConfig.WednesdayStatus == 1 ? true : false" v-if="Object.keys(loadRestaurantConfig).length == 0">
					<input type="checkbox" @change="[loadRestaurantConfig.wednesday_status = !loadRestaurantConfig.wednesday_status]" :checked="loadRestaurantConfig.wednesday_status == 1 ? true : false" v-else>
					<p class="ml-1"> {{ loadRestaurantConfig.wednesday_status || restaurantConfig.WsednesdayStatus == true ? 'Active' : 'Inactive' }} </p>
				</a>
			</p>
		</div>



		<div class="field has-addons">
			<p class="control">
				<a class="button is-bold">
					Thu
				</a>				
			</p>
			<p class="control is-expanded">
				<input id="thursday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
			</p>
			<p class="control">
				<a class="button ">
					Currently <span class="is-bold ml-3">:</span>  <span class="purple-color ml-3"> {{ loadRestaurantConfig.thursday == 'null' ? '00:00 - 00:00' : loadRestaurantConfig.thursday }} </span>
				</a>
				<a class="button">
					<input type="checkbox" @change="[restaurantConfig.thursdayStatus = !restaurantConfig.thursdayStatus]" :checked="restaurantConfig.thursdayStatus == 1 ? true : false" v-if="Object.keys(loadRestaurantConfig).length == 0">
					<input type="checkbox" @change="[loadRestaurantConfig.thursday_status = !loadRestaurantConfig.thursday_status]" :checked="loadRestaurantConfig.thursday_status == 1 ? true : false" v-else>
					<p class="ml-1"> {{ loadRestaurantConfig.thursday_status || restaurantConfig.thursdayStatus == true ? 'Active' : 'Inactive' }} </p>
				</a>
			</p>
		</div>


		<div class="field has-addons">
			<p class="control">
				<a class="button is-bold">
					Fri
				</a>				
			</p>
			<p class="control is-expanded">
				<input id="friday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
			</p>
			<p class="control">
				<a class="button ">
					Currently <span class="is-bold ml-3">:</span>  <span class="purple-color ml-3"> {{ loadRestaurantConfig.friday == 'null' ? '00:00 - 00:00' : loadRestaurantConfig.friday }} </span>
				</a>
				<a class="button">
					<input type="checkbox" @change="[restaurantConfig.fridayStatus = !restaurantConfig.fridayStatus]" :checked="restaurantConfig.fridayStatus == 1 ? true : false" v-if="Object.keys(loadRestaurantConfig).length == 0">
					<input type="checkbox" @change="[loadRestaurantConfig.friday_status = !loadRestaurantConfig.friday_status]" :checked="loadRestaurantConfig.friday_status == 1 ? true : false" v-else>
					<p class="ml-1"> {{ loadRestaurantConfig.friday_status || restaurantConfig.fridayStatus == true ? 'Active' : 'Inactive' }} </p>
				</a>
			</p>
		</div>


		<div class="field has-addons">
			<p class="control">
				<a class="button is-bold">
					Sat
				</a>				
			</p>
			<p class="control is-expanded">
				<input id="saturday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
			</p>
			<p class="control">
				<a class="button ">
					Currently <span class="is-bold ml-3">:</span>  <span class="purple-color ml-3"> {{ loadRestaurantConfig.saturday == 'null' ? '00:00 - 00:00' : loadRestaurantConfig.saturday }} </span>
				</a>
				<a class="button">
					<input type="checkbox" @change="[restaurantConfig.saturdayStatus = !restaurantConfig.saturdayStatus]" :checked="restaurantConfig.saturdayStatus == 1 ? true : false" v-if="Object.keys(loadRestaurantConfig).length == 0">
					<input type="checkbox" @change="[loadRestaurantConfig.saturday_status = !loadRestaurantConfig.saturday_status]" :checked="loadRestaurantConfig.saturday_status == 1 ? true : false" v-else>
					<p class="ml-1"> {{ loadRestaurantConfig.saturday_status || restaurantConfig.saturdayStatus == true ? 'Active' : 'Inactive' }} </p>
				</a>
			</p>
		</div>




		<div class="field has-addons">
			<p class="control">
				<a class="button is-bold">
					Sun
				</a>				
			</p>
			<p class="control is-expanded">
				<input id="sunday" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
			</p>
			<p class="control">
				<a class="button ">
					Currently <span class="is-bold ml-3">:</span>  <span class="purple-color ml-3"> {{ loadRestaurantConfig.sunday == 'null' ? '00:00 - 00:00' : loadRestaurantConfig.sunday }} </span>
				</a>
				<a class="button">
					<input type="checkbox" @change="[restaurantConfig.sundayStatus = !restaurantConfig.sundayStatus]" :checked="restaurantConfig.sundayStatus == 1 ? true : false" v-if="Object.keys(loadRestaurantConfig).length == 0">
					<input type="checkbox" @change="[loadRestaurantConfig.sunday_status = !loadRestaurantConfig.sunday_status]" :checked="loadRestaurantConfig.sunday_status == 1 ? true : false" v-else>
					<p class="ml-1"> {{ loadRestaurantConfig.sunday_status || restaurantConfig.sundayStatus == true ? 'Active' : 'Inactive' }} </p>
				</a>
			</p>
		</div>


		<div class="field" v-if="Object.keys(loadRestaurantConfig).length == 0">
			<p class="control">
				<button class="button" v-bind:class="{ 'is-loading': loadConfigProgress }" @click="submitForm">
					<span class="icon is-small">
						<i class="fas fa-save purple-color"></i>
					</span>
					<span class="is-bold"> Save </span>
				</button>
			</p>
		</div>


		<div class="field" v-else>
			<p class="control">
				<button class="button" v-bind:class="{ 'is-loading': loadConfigProgress }" @click="submitFormUpdate">
					<span class="icon is-small">
						<i class="fas fa-save purple-color"></i>
					</span>
					<span class="is-bold"> Update </span>
				</button>
			</p>
		</div>

	</div> <!-- Root element tag open -->


</template>

<script>
import bulmaCalendar from 'bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js';
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

	data: () => ({

		restaurantConfig: {
			preparationTime: null,
			minimiumDeliveryTime: null,
			maximiumDeliveryTime: null,
			monday: null,
			mondayStatus: 0,
			tuesday: null,
			tuesdayStatus: 0,
			Wednesday: null,
			WednesdayStatus: 0,
			thursday: null,
			thursdayStatus: 0,
			friday: null,
			fridayStatus: 0,
			saturday: null,
			saturdayStatus: 0,
			sunday: null,
			sundayStatus: 0,
		},

	}),

	mounted() {
		this.bulmaCalendar()
		this.setId()
	},


	methods: {

		...mapActions(['restaurantConfigSetting','fetchRestaurantConfig', 'editRestaurantConfig']),

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



		submitFormUpdate() {

			let data = new FormData();
			data.append("_method", "patch");
			data.append('preparation_time', this.$store.getters.loadRestaurantConfig.preparation_time);
			data.append('minimium_delivery_time', this.$store.getters.loadRestaurantConfig.minimium_delivery_time);
			data.append('maximium_delivery_time', this.$store.getters.loadRestaurantConfig.maximium_delivery_time);
			data.append('monday', this.$store.getters.loadRestaurantConfig.monday);
			data.append('monday_status', this.$store.getters.loadRestaurantConfig.monday_status == true ? this.$store.getters.loadRestaurantConfig.monday_status = 1 : this.$store.getters.loadRestaurantConfig.monday_status = 0);
			data.append('tuesday', this.$store.getters.loadRestaurantConfig.tuesday);
			data.append('tuesday_status', this.$store.getters.loadRestaurantConfig.tuesday_status == true ? this.$store.getters.loadRestaurantConfig.tuesday_status = 1 : this.$store.getters.loadRestaurantConfig.tuesday_status = 0);
			data.append('wednesday', this.$store.getters.loadRestaurantConfig.Wednesday);
			data.append('wednesday_status', this.$store.getters.loadRestaurantConfig.wednesday_status == true ? this.$store.getters.loadRestaurantConfig.wednesday_status = 1 : this.$store.getters.loadRestaurantConfig.wednesday_status = 0);
			data.append('thursday', this.$store.getters.loadRestaurantConfig.thursday);
			data.append('thursday_status', this.$store.getters.loadRestaurantConfig.thursday_status == true ? this.$store.getters.loadRestaurantConfig.thursday_status = 1 : this.$store.getters.loadRestaurantConfig.thursday_status = 0);
			data.append('friday', this.$store.getters.loadRestaurantConfig.friday);
			data.append('friday_status', this.$store.getters.loadRestaurantConfig.friday_status == true ? this.$store.getters.loadRestaurantConfig.friday_status = 1 : this.$store.getters.loadRestaurantConfig.friday_status = 0);
			data.append('saturday', this.$store.getters.loadRestaurantConfig.saturday);
			data.append('saturday_status', this.$store.getters.loadRestaurantConfig.saturday_status == true ? this.$store.getters.loadRestaurantConfig.saturday_status = 1 : this.$store.getters.loadRestaurantConfig.saturday_status = 0);
			data.append('sunday', this.$store.getters.loadRestaurantConfig.sunday);
			data.append('sunday_status', this.$store.getters.loadRestaurantConfig.sunday_status == true ? this.$store.getters.loadRestaurantConfig.sunday_status = 1 : this.$store.getters.loadRestaurantConfig.sunday_status = 0);

			let id = this.$route.params.id
			this.editRestaurantConfig({data, id})
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
  	Object.keys(this.$store.getters.loadRestaurantConfig == 0) ? '' : this.$store.getters.loadRestaurantConfig.monday = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const tuesday = document.querySelector('#tuesday');
if (tuesday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  tuesday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.tuesday = datepicker.data.value();
  	Object.keys(this.$store.getters.loadRestaurantConfig == 0) ? '' : this.$store.getters.loadRestaurantConfig.tuesday = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const Wednesday = document.querySelector('#Wednesday');
if (Wednesday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  Wednesday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.Wednesday = datepicker.data.value();
  	Object.keys(this.$store.getters.loadRestaurantConfig == 0) ? '' : this.$store.getters.loadRestaurantConfig.wednesday = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const thursday = document.querySelector('#thursday');
if (thursday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  thursday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.thursday = datepicker.data.value();
  	Object.keys(this.$store.getters.loadRestaurantConfig == 0) ? '' : this.$store.getters.loadRestaurantConfig.thursday = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const friday = document.querySelector('#friday');
if (friday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  friday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.friday = datepicker.data.value();
  	Object.keys(this.$store.getters.loadRestaurantConfig == 0) ? '' : this.$store.getters.loadRestaurantConfig.friday = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const saturday = document.querySelector('#saturday');
if (saturday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  saturday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.saturday = datepicker.data.value();
  	Object.keys(this.$store.getters.loadRestaurantConfig == 0) ? '' : this.$store.getters.loadRestaurantConfig.saturday = datepicker.data.value();
  });
}

// To access to bulmaCalendar instance of an element
const sunday = document.querySelector('#sunday');
if (sunday) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  sunday.bulmaCalendar.on('select', datepicker => {
  	this.restaurantConfig.sunday = datepicker.data.value();
  	Object.keys(this.$store.getters.loadRestaurantConfig == 0) ? '' : this.$store.getters.loadRestaurantConfig.sunday = datepicker.data.value();
  });
}



},

},

computed: {
	...mapGetters(['loadConfigProgress', 'loadConfigNotification', 'loadRestaurantConfig', 'loadConfigLoader']),
},


}

</script>
