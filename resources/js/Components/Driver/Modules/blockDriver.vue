

	<template>

		<div> <!-- Root element tag open -->

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
									<input class="input" type="text" placeholder=" Search Driver by ID" v-model="searchQuery" v-on:keyup="searchMethod">
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

								<li v-on:click="refresh">
									<a>
										<span class="icon is-small"><i class="fas fa-sync-alt  purple-color" v-bind:class="{ 'fa-spin': spin }"aria-hidden="true"></i></span>
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


				<table class="table is-bordered is-striped is-hoverable" v-if="loadBlockedDatas.length >= 1"> <!-- Table tag open -->

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

						<tr v-for="(driver, index) in searchQuery.length  > 1  ? loadSearch : loadBlockedDatas " :key="index">
							<th> <span class="purple-color">  {{ driver.driver_id}}  </span> </th>
							<td> {{ driver.name.substring(0,6) }} </td>
							<td> {{ driver.email.substring(0,10) }} </td>
							<td> {{ driver.phone }} </td>
							<td> {{ driver.occupation.substring(0,6) }} </td>
							<td class="has-text-centered"> {{ driver.total_delivery}} </td>
							<td class="has-text-centered"> <input type="checkbox" @change="[driver.status = !driver.status, statusMethod(driver.id, driver.status)]" :checked="driver.status == 1 ? true : false"> </td>
							<td>  
								<div class="field is-grouped">
									<p class="control">
										<router-link :to="{name: 'view-driver', params: {id: driver.id}}" class="button purple-color" exact>
											View
										</router-link>
									</p>
									<p class="control">
										<router-link :to="{name: 'edit-driver', params: {id: driver.id} }" class="button purple-color" exact>
											Edit
										</router-link>
									</p>
									<p class="control" @click="showModal = true">
										<button class="button purple-color">
											Delete 
										</button>

										<!-- Delete modal option -->
										<div class="modal is-active" v-if="showModal">
											<div class="modal-background"></div>
											<div class="modal-content">
												<!-- Any other Bulma elements you want -->
												<div class="card">
													<div class="card-content has-text-centered">
														<p class="subtitle is-bold">
															Are you sure
														</p>
													</div>
													<footer class="card-footer">
														<p class="card-footer-item is-bold purple-color pointer" v-on:click="deleteData(driver.id)">
															Delete
														</p>
														<p class="card-footer-item is-bold purple-color pointer" @click="showModal = false">
															Cancel
														</p>
													</footer>
												</div>							
											</div>
											<button class="modal-close is-large" aria-label="close" @click="showModal = false"></button>
										</div>
									</p>
								</div>
							</td>
						</tr>

					</tbody>

				</table> <!-- Table tag close -->


				<!-- Pagination section -->
				<div class="buttons has-addons is-centered" v-if="loadBlockedDatas.length >= 1">
					<a class="button" v-if="loadPagination.previousPageUrl" @click="paginationHandler(loadPagination.previousPageUrl)">
						<span class="icon is-small">
							<i class="fas fa-arrow-left purple-color"></i>
						</span>
						<span> Previous </span>
					</a>


					<a class="button">

						{{ loadPagination.to}} 0f {{loadPagination.total}}
					</a>


					<a class="button" v-if="loadPagination.nextPageUrl" @click="paginationHandler(loadPagination.nextPageUrl)">
						<span class="icon is-small">
							<i class="fas fa-arrow-right purple-color"></i>
						</span>
						<span> Next </span>
					</a>

				</div>


			</div> <!-- Card content tag open -->


		</div> <!-- Card tag close -->

<div class="card" v-if="loadBlockedDatas.length <= 0">
  <div class="card-content">
    <div class="content is-bold has-text-centered subtitle">

  <span class="fa"> No blocked driver. </span>

    </div>
  </div>
</div>




	</div> <!-- Root element tag open -->

	</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

	data: () => ({
		spin: false,
		showModal: false,
		searchQuery: '',
	}),

	created() {
		this.fetchBlockedDatas()
		this.clearNotification()
	},

	methods: {
		...mapActions(['fetchBlockedDatas', 'clearNotification', 'destroyData', 'searchDatas', 'updateStatus']),
		// Local method
		refresh() {
			this.spin = true
			this.fetchBlockedDatas().then(() => this.spin = false)
			this.searchQuery = ""
			this.searchDatas(this.searchQuery)
		},

		deleteData(id) {
			this.destroyData(id)
			this.fetchBlockedDatas()
			this.showModal = false
		},

		paginationHandler(uri) {
			this.fetchBlockedDatas(uri)
		},

		searchMethod() {
			if(this.searchQuery > 1) {
				this.searchDatas(this.searchQuery)
			}
		},

		statusMethod(id,status) {
			this.updateStatus({id, status})
			this.refresh()
		},

	},


	computed: {
		...mapGetters(['loadBlockedDatas', 'loadLoading', 'loadNotification', 'loadPagination', 'loadSearch']),

    // Local computed properties

},


}

</script>
