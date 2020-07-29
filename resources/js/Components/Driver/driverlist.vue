

<template>


	<div class="container"> <!-- Container tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadLoading }"><span class="title"> Loading Bellewise </span></div>

		<div class="card"> <!-- Card tag open -->

			<div class="card-content table-container"> <!-- Card content tag open -->


<div class="notification purple-bg-light is-bold has-text-black" v-if="loadNotification">
		Task Succeesful
</div>



				<!-- Main container -->
				<nav class="level">
					<!-- Left side -->
					<div class="level-left">

						<div class="level-item">
							<div class="field has-addons">
								<p class="control">
									<input class="input" type="text" placeholder=" Search Drivers">
								</p>
								<p class="control">
									<button class="button purple-bg has-text-white">
										Search 
									</button>
								</p>
							</div>
						</div>
					</div>

					<!-- Right side -->
					<div class="level-right">

						<div class="tabs is-toggle level-item">
							<ul>

								<li>
									<a>
										<span class="icon is-small"><i class="fas fa-sync-alt purple-color" aria-hidden="true"></i></span>
										<span>  Refresh</span>
									</a>
								</li>
								<li>
									<router-link :to="{ name: 'add-driver' }" exact>
										<span class="icon is-small"><i class="fas fa-plus purple-color" aria-hidden="true"></i></span>
										<span> Add Driver</span>
									</router-link>
								</li>
							</ul>
						</div>    	

					</div>
				</nav>


				<table class="table is-bordered is-striped is-hoverable"> <!-- Table tag open -->

					<thead>
						<tr>
							<th> <span class="purple-color"> ID </span> </th>
							<th> <span class="purple-color"> Name </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Email </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Phone </span> </th>
							<th> <span class="purple-color"> Occupation </span> </th>
							<th> <span class="purple-color"> Total Delivery </span> </th>
							<th> <span class="purple-color"> Status </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Action </span> </th>
						</tr>
					</thead>

					<tbody>

						<tr v-for="driver in loadDrivers" :key="driver.driver_id">
							<th> <span class="purple-color">  {{ driver.driver_id}}  </span> </th>
							<td> {{ driver.name }} </td>
							<td> {{ driver.email }} </td>
							<td> {{ driver.phone }} </td>
							<td> {{ driver.occupation }} </td>
							<td class="has-text-centered"> {{ driver.total_delivery}} </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td>  
								<div class="field is-grouped">
									<p class="control">
										<router-link :to="{name: 'view-driver', params: {driver_id: driver.driver_id}}" class="button purple-color" exact>
											View
										</router-link>
									</p>
									<p class="control">
										<router-link :to="{name: 'edit-driver', params: {driver_id: driver.driver_id} }" class="button purple-color" exact>
											Edit
										</router-link>
									</p>
									<p class="control">
										<button class="button purple-color">
											Delete 
										</button>
									</p>
								</div>
							</td>
						</tr>

					</tbody>

				</table> <!-- Table tag close -->




				<!-- Pagination section -->
				<div class="buttons has-addons is-centered">
					<a class="button">
						<span class="icon is-small">
							<i class="fas fa-arrow-left purple-color"></i>
						</span>
						<span> Previous </span>
					</a>


					<a class="button">

						5 0f 6
					</a>


					<a class="button">
						<span class="icon is-small">
							<i class="fas fa-arrow-right purple-color"></i>
						</span>
						<span> Next </span>
					</a>

				</div>




			</div> <!-- Card content tag open -->


		</div> <!-- Card tag close -->

	</div> <!-- Container tag close -->

</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

	data: () => ({
      
	}),

	created() {
		this.fetchDrivers()
		this.clearSucceeded()
		this.clearNotification()
	},

	methods: {
		...mapActions(['fetchDrivers','clearSucceeded', 'clearNotification']),

	},


	computed: {
		...mapGetters(['loadDrivers', 'loadLoading', 'loadNotification']),

    // Local computed properties

},


}

</script>