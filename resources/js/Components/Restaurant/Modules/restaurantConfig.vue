
<template>



	<div class="">


		<p class="subtitle is-5">
			<strong> Delivery Timing  </strong> 
		</p>




		<div class="field">
			<label class="label"> Preparation Time  </label>
			<div class="control">
				<input id="my-element" type="date" data-display-mode="dialog"  data-color="info" data-type="time">
			</div>
		</div>

		<div class="columns"> <!-- Columns wrapper tag open -->

			<div class="column"> <!-- First column tag open-->


				<div class="field">
					<label class="label"> Minimium DeliveryTime  </label>
					<div class="control">
						<input id="my-element" type="date" data-display-mode="dialog"  data-color="info" data-type="time">
					</div>
				</div>

			</div> <!-- First column tag close -->



			<div class="column"> <!-- Second column tag open-->


				<div class="field">
					<label class="label"> Maximum DeliveryTime  </label>
					<div class="control">
						<input id="my-element" type="date" data-display-mode="dialog"  data-color="info" data-type="time">
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
				<label class="label"> Tue</label>
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


	</div>
	


</template>

<script>
import { required, email, numeric } from 'vuelidate/lib/validators'
import BulmaCalendar from '../../../Mixins/bulmaCalendar.js'

export default {

	mixins: [
	BulmaCalendar
	],

	data: () => ({


		restaurantConfig: {
			preparationTime: null,
			minimiumDeliveryTime: null,
			maximiumDeliveryTime: null,
		},


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
