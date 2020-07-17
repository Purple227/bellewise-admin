
<template>
	

	<div class="container"> <!-- Container tag open -->

		<div class="columns"> <!-- Columns wrapper tag open -->


			<div class="column"> <!-- column tag open-->

				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p> 
							<span> Total Amount </span>
							<br>
							<span class="is-bold"> To Restaurant For Online User </span> 
							<br>
							<span class="subtitle is-bold purple-color"> ₦20000.00 </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->

			</div> <!-- column tag close -->



			<div class="column"> <!-- column tag open-->

				<div class="box border-bottom"> <!-- Box container tag open -->
					<div class="content"> <!-- Content tag open -->
						<p> 
							<span> Total Amount </span>
							<br>
							<span class="is-bold"> To Admin For Cash Orders </span> 
							<br>
							<span class="subtitle is-bold purple-color"> ₦40000.00 </span>
						</p>
					</div> <!-- Content tag close -->
				</div> <!-- Box container tag close -->

			</div> <!-- column tag close -->


		</div> <!-- Columns wrapper tag close -->



		<!-- Main container -->
		<nav class="level">

				<div class="level-item">
					<div class="field ">
						<label class="label"> Select Restaurant </label>
						<div class="control">
							<div class="select">
								<select>
									<option> All </option>
									<option> Crunchies </option>
									<option> Apple </option>
									<option> De-choice</option>
								</select>
							</div>
						</div>
					</div>
				</div>



				<div class="level-item">
					<div class="field">
						<label class="label"> Sort By Date </label>
						<div class="control">
							<input id="my-element" type="date" data-display-mode="dialog"  data-close-on-select="false" data-color="info">
						</div>
					</div>
				</div>


				<div class="level-item">
					<div class="field ">
						<label class="label"> Payment Method </label>
						<div class="control">
							<div class="select">
								<select>
									<option> All </option>
									<option> Online </option>
									<option> Cash On Delivery</option>
								</select>
							</div>
						</div>
					</div>
				</div>

				<div class="level-item mt-5">
					<button class="button purple-color is-bold"> Download CSV</button>
				</div>

			</nav>



		<div class="card"> <!-- Card tag open -->

			<div class="card-content table-container"> <!-- Card content tag open -->

				<!-- Main container -->
				<nav class="level">
					<!-- Left side -->
					<div class="level-left">

						<div class="level-item">
							<div class="field has-addons">
								<p class="control">
									<input class="input" type="text" placeholder=" Search Order ID">
								</p>
								<p class="control">
									<button class="button purple-bg has-text-white">
										Search
									</button>
								</p>
							</div>
						</div>
					</div>

				</nav>


				<table class="table is-bordered is-striped is-hoverable"> <!-- Table tag open -->

					<thead>
						<tr>
							<th> <span class="purple-color"> Order No </span> </th>
							<th> <span class="purple-color"> Restaurant Name </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Customer Name </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Order Delivery Date </span> </th>
							<th> <span class="purple-color"> Commission </span> </th>
							<th> <span class="purple-color"> Delivery Charges </span> </th>
							<th> <span class="purple-color"> Order Amount </span> </th>
							<th> <span class="purple-color"> Total Amount </span> </th>
							<th> <span class="purple-color"> Payment Status </span> </th>
						</tr>
					</thead>

					<tbody>

						<tr>
							<th> <span class="purple-color"> 51 </span> </th>
							<td> Crunchies </td>
							<td> Joseph Purple </td>
							<td> <span class="has-text-centered"> May 11, 2020 </span> </td>
							<td> <span class="has-text-centered"> 8 </span> </td>
							<td> <span class="has-text-centered"> ₦1000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦9000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦10000.00 </span> </td>
							<td> <span class="purple-color is-bold"> Paid </span> </td>	
						</tr>

						<tr>
							<th> <span class="purple-color"> 51 </span> </th>
							<td> Crunchies </td>
							<td> Joseph Purple </td>
							<td> <span class="has-text-centered"> May 11, 2020 </span> </td>
							<td> <span class="has-text-centered"> 8 </span> </td>
							<td> <span class="has-text-centered"> ₦1000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦9000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦10000.00 </span> </td>
							<td> <span class="purple-color is-bold"> Paid </span> </td>	
						</tr>



						<tr>
							<th> <span class="purple-color"> 51 </span> </th>
							<td> Crunchies </td>
							<td> Joseph Purple </td>
							<td> <span class="has-text-centered"> May 11, 2020 </span> </td>
							<td> <span class="has-text-centered"> 8 </span> </td>
							<td> <span class="has-text-centered"> ₦1000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦9000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦10000.00 </span> </td>
							<td> <span class="purple-color is-bold"> Paid </span> </td>	
						</tr>


						<tr>
							<th> <span class="purple-color"> 51 </span> </th>
							<td> Crunchies </td>
							<td> Joseph Purple </td>
							<td> <span class="has-text-centered"> May 11, 2020 </span> </td>
							<td> <span class="has-text-centered"> 8 </span> </td>
							<td> <span class="has-text-centered"> ₦1000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦9000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦10000.00 </span> </td>
							<td> <span class="purple-color is-bold"> Paid </span> </td>	
						</tr>


						<tr>
							<th> <span class="purple-color"> 51 </span> </th>
							<td> Crunchies </td>
							<td> Joseph Purple </td>
							<td> <span class="has-text-centered"> May 11, 2020 </span> </td>
							<td> <span class="has-text-centered"> 8 </span> </td>
							<td> <span class="has-text-centered"> ₦1000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦9000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦10000.00 </span> </td>
							<td> <span class="purple-color is-bold"> Paid </span> </td>	
						</tr>

					</tbody>

				</table> <!-- Table tag close -->


				<!-- Pagination section -->
				<div class="buttons has-addons is-centered">
					<a class="button">
						<span class="icon is-small">
							<i class="fas fa-arrow-left green"></i>
						</span>
						<span> Previous </span>
					</a>


					<a class="button">

						5 0f 6
					</a>


					<a class="button">
						<span class="icon is-small">
							<i class="fas fa-arrow-right green"></i>
						</span>
						<span> Next </span>
					</a>

				</div>


			</div> <!-- Card content tag open -->


		</div> <!-- Card tag close -->












		</div> <!-- Container tag close -->


	</template>

	<script>
	import BulmaCalendar from "../../../Mixins/bulmaCalendar.js";


	export default {

		mixins: [
		BulmaCalendar
		],


		data: () => ({


		}),



	}

	</script>
