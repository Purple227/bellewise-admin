<template>


	<div class="container"> <!-- Container tag open -->


		<!-- Main container -->
		<nav class="level">

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
					<label class="label"> By Restaurant </label>
					<div class="control">
						<div class="select">
							<select>
								<option> All </option>
								<option> Crunchies </option>
								<option> De-choice</option>
								<option> Apple </option>
							</select>
						</div>
					</div>
				</div>
			</div>

		</nav>




		<div class="card"> <!-- Card tag open -->

			<div class="card-content table-container"> <!-- Card content tag open -->


				<table class="table is-bordered is-striped is-hoverable"> <!-- Table tag open -->

					<thead>
						<tr>
							<th> <span class="purple-color"> User ID </span> </th>
							<th> <span class="purple-color"> Customer Name </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Order Delivery Date </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Delivery Charges </span> </th>
							<th> <span class="purple-color"> Order Amount </span> </th>
							<th> <span class="purple-color"> Total Amount </span> </th>
							<th> <span class="purple-color"> Transaction Status </span> </th>
						</tr>
					</thead>

					<tbody>

						<tr>
							<th> <span class="purple-color"> 51 </span> </th>
							<td> Joseph Purple </td>
							<td> May 11, 2020 </td>
							<td> <span class="has-text-centered"> ₦1000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦8000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦9000.00 </span> </td>
							<td> <span class="purple-color is-bold"> Recieved </span> </td>	
						</tr>

						<tr>
							<th> <span class="purple-color"> 51 </span> </th>
							<td> Joseph Purple </td>
							<td> May 11, 2020 </td>
							<td> <span class="has-text-centered"> ₦1000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦8000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦9000.00 </span> </td>
							<td> <span class="purple-color is-bold"> Recieved </span> </td>	
						</tr>



						<tr>
							<th> <span class="purple-color"> 51 </span> </th>
							<td> Joseph Purple </td>
							<td> May 11, 2020 </td>
							<td> <span class="has-text-centered"> ₦1000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦8000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦9000.00 </span> </td>
							<td> <span class="purple-color is-bold"> Recieved </span> </td>	
						</tr>


						<tr>
							<th> <span class="purple-color"> 51 </span> </th>
							<td> Joseph Purple </td>
							<td> May 11, 2020 </td>
							<td> <span class="has-text-centered"> ₦1000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦8000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦9000.00 </span> </td>
							<td> <span class="purple-color is-bold"> Recieved </span> </td>	
						</tr>


						<tr>
							<th> <span class="purple-color"> 51 </span> </th>
							<td> Joseph Purple </td>
							<td> May 11, 2020 </td>
							<td> <span class="has-text-centered"> ₦1000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦8000.00 </span> </td>
							<td> <span class="has-text-centered"> ₦9000.00 </span> </td>
							<td> <span class="purple-color is-bold"> Recieved </span> </td>	
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


	</div> <!-- Container tag open -->

</template>


<script>
import BulmaCalendar from "../../../Mixins/bulmaCalendar.js";

export default {

	mixins: [
	BulmaCalendar,
	],

	data: () => ({



	}),



}

</script>
