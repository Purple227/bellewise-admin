


<template>


	<div class="container"> <!-- Container tag open -->


		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Edit {{promo.name}} </strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'list-promotion' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>




		<div class="box"> <!-- Box container tag open -->


			<div class="field">
				<div class="control">
					<label class="radio is-bold">
						<input type="radio" name="question">
						For All Users
					</label>
					<label class="radio is-bold">
						<input type="radio" name="question">
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
							<input class="input is-info" type="number" v-model.nimber="promo.discount" placeholder="Percentage ">
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
								<select>
									<option>Select</option>
									<option> Restaurant </option>
									<option> bellewise </option>
								</select>
							</div>
						</div>
					</div>


					<div class="field">
						<label class="label"> Total No. Of Vouchers <span class="has-text-danger"> * </span>  </label>
						<div class="control has-icons-left has-icons-right">
							<input class="input is-info" type="number" placeholder="Number input" v-model.number="promo.vouchers"  required autofocus>
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
							<input id="my-element" v-model="promo.date" type="date" data-display-mode="dialog"  data-close-on-select="false" data-color="info">
						</div>
					</div>





					<div class="field">
						<label class="label"> Promo Minimium Amount <span class="has-text-danger"> * </span> </label>
						<div class="control has-icons-right has-icons-left">
							<input class="input is-info" type="number" placeholder="Number input" v-model.number="promo.amount" required>
							<!-- Has icon left -->
							<span class="icon is-small is-left">
								<i class="fas fa-file-invoice-dollar purple-color"></i>
							</span>
							<!-- Has icon right -->
							<span class="icon is-small is-right" v-if="$v.promo.amount.$invalid">
								<i class="fas fa-exclamation-triangle has-text-danger"></i>
							</span>
							<span class="icon is-small is-right" v-else>
								<i class="fas fa-check purple-color"></i>
							</span>
						</div>
					</div>

				</div> <!-- First column tag close -->



				<div class="column"> <!-- Second column tag open-->


					<div class="field">
						<label class="label"> Minimium Basket Value <span class="has-text-danger"> * </span>  </label>
						<div class="control has-icons-left has-icons-right">
							<input class="input is-info" type="number"  v-model.number="promo.basket"  required autofocus>
							<!-- Has icon left -->
							<span class="icon is-small is-left">
								<i class="fas fa-shopping-basket purple-color"></i>
							</span>
							<!-- Has icon right -->
							<span class="icon is-small is-right" v-if="$v.promo.basket.required">
								<i class="fas fa-check purple-color"></i>
							</span>
							<span class="icon is-small is-right" v-else>
								<i class="fas fa-exclamation-triangle has-text-danger"></i>
							</span>
						</div>
					</div>


					<nav class="panel">
						<p class="panel-heading">
							Select Restaurants
						</p>
						<div class="panel-block">
							<p class="control has-icons-left">
								<input class="input" type="text" placeholder="Search">
								<span class="icon is-left">
									<i class="fas fa-search purple-color" aria-hidden="true"></i>
								</span>
							</p>
						</div>
						<p class="panel-tabs">
						<label class="panel-block">
							<input type="checkbox">
							Mark All
						</label>
						</p>

						<label class="panel-block">
							<input type="checkbox">
							Crunchies
						</label>

						<label class="panel-block">
							<input type="checkbox">
							De-choice
						</label>

						<label class="panel-block">
							<input type="checkbox">
							Apple
						</label>


						<label class="panel-block">
							<input type="checkbox">
							Fiesta Fries
						</label>


						<label class="panel-block">
							<input type="checkbox">
							Chicken Republic
						</label>



<!-- Pagination section -->
<div class="buttons has-addons is-centered mt-3">
  <a class="button">
    <span class="icon is-small">
      <i class="fas fa-arrow-left green"></i>
    </span>
    <span> Previous </span>
  </a>


  <a class="button">

    5 0f 8
  </a>


  <a class="button">
    <span class="icon is-small">
      <i class="fas fa-arrow-right green"></i>
    </span>
    <span> Next </span>
  </a>

</div>
					</nav>







				</div> <!-- Second column tag close -->


			</div> <!-- Columns wrapper tag close -->

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

		</div>  <!-- Box container tag open -->


	</div> <!-- Container tag close -->
	

</template>



<script>
import { required, email, numeric, minLength } from 'vuelidate/lib/validators'
import BulmaCalendar from "../../Mixins/bulmaCalendar.js";

export default {

	mixins: [
	BulmaCalendar
	],

	data: () => ({

		promo: {
			name: 'Deal 99',
			vouchers: 0,
			amount: 3000.00,
			discount: 20,
			basket: 4,
			date: 'July 6, 2020'
		},

	}),



	validations: { //Validation calibrace open 

		promo: {

			name: {
				required
			},

			vouchers: {
				required,
			},

			amount: {
				email,
				required
			},

			basket: {
				required,
			},

		}, 

	}, //Validation calibrace close 


}

</script>