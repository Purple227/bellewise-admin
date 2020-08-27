
<template>



	<div class=""> <!-- Root element tag open -->

		<p class="subtitle is-5">
			<strong> Delivery Timing  </strong> 
		</p>

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

		<div class="field is-horizontal">
			<div class="field-label">
				<label class="label">Mon</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input id="element" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
						<label class="checkbox">
							<input type="checkbox">
							Status
						</label>
					</div>
				</div>
			</div>
		</div>

		<div class="field is-horizontal">
			<div class="field-label">
				<label class="label"> Tue</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input id="my-element" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true" @change="bulmaCalendar">
						<label class="checkbox">
							<input type="checkbox">
							Status
						</label>
					</div>
				</div>
			</div>
		</div>

		<div class="field is-horizontal">
			<div class="field-label">
				<label class="label"> Wed </label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input id="my-element" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
						<label class="checkbox">
							<input type="checkbox">
							Status
						</label>
					</div>
				</div>
			</div>
		</div>


		<div class="field is-horizontal">
			<div class="field-label">
				<label class="label"> Thu</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input id="my-element" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
						<label class="checkbox">
							<input type="checkbox">
							Status
						</label>
					</div>
				</div>
			</div>
		</div>

		<div class="field is-horizontal">
			<div class="field-label">
				<label class="label"> Fri </label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input id="my-element" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
						<label class="checkbox">
							<input type="checkbox">
							Status
						</label>
					</div>
				</div>
			</div>
		</div>

		<div class="field is-horizontal">
			<div class="field-label">
				<label class="label"> Sat </label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input id="my-element" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
						<label class="checkbox">
							<input type="checkbox">
							Status
						</label>
					</div>
				</div>
			</div>
		</div>


		<div class="field is-horizontal">
			<div class="field-label">
				<label class="label"> Sun </label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<input id="my-element" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-is-range="true">
						<label class="checkbox">
							<input type="checkbox">
							Status
						</label>
					</div>
				</div>
			</div>
		</div>

		<div class="field">
			<p class="control">
				<button class="button">
					<span class="icon is-small">
						<i class="fas fa-save purple-color"></i>
					</span>
					<span class="is-bold"> Save </span>
				</button>
			</p>
		</div>


	</div> <!-- Root element tag open -->


</template>

<script>
import bulmaCalendar from 'bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js';
import { required, email, numeric } from 'vuelidate/lib/validators'

export default {

	data: () => ({

		restaurantConfig: {
			preparationTime: null,
			minimiumDeliveryTime: null,
			maximiumDeliveryTime: null,

		},

		blah: null,

	}),

	mounted() {
		this.bulmaCalendar()
	},


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


	methods: {

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
const element = document.querySelector('#my-element');
if (element) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  element.bulmaCalendar.on('select', datepicker => {
    this.blah = datepicker.data.value();
  });
}



},

},


}

</script>
