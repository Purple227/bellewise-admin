
<template>

	<div> <!-- Root element tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadSubAdminLoader }"><span class="title"> Bellewise loading </span></div>

		<div class="card"> <!-- Card tag open -->

			<div class="card-content table-container"> <!-- Card content tag open -->

				<div class="notification purple-bg-light is-bold has-text-black" v-if="loadSubAdminNotification">
					Task Succeesful
				</div>

				<!-- Main container -->
				<nav class="level">
					<!-- Left side -->
					<div class="level-left">

						<div class="level-item">
							<div class="field has-addons">
								<p class="control">
									<input class="input" type="text" placeholder=" Search Sub-admin by ID" v-model="searchQuery" v-on:keyup="searchMethod">
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
										<span class="icon is-small"><i class="fas fa-sync-alt  purple-color" v-bind:class="{ 'fa-spin': spin }" aria-hidden="true"></i></span>
										<span>  Refresh</span>
									</a>
								</li>
								<li>
									<router-link :to="{ name: 'add-sub-admin' }" exact>
										<span class="icon is-small"><i class="fas fa-plus purple-color" aria-hidden="true"></i></span>
										<span> Add Sub-Admin</span>
									</router-link>
								</li>
							</ul>
						</div>    	

					</div>
				</nav>


				<table class="table is-bordered is-striped is-hoverable" v-if="loadSubAdminDatas.length >= 1"> <!-- Table tag open -->

					<thead>
						<tr>
							<th> <span class="purple-color"> ID </span> </th>
							<th> <span class="purple-color"> Name </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Email </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Phone </span> </th>
							<th> Status </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Action </span> </th>
						</tr>
					</thead>

					<tbody>

						<tr v-for="subadmin in searchQuery.length  > 1  ? loadSubAdminSearch : loadSubAdminDatas " >
							<th> <span class="purple-color">  {{ subadmin.sub_admin_id}}  </span> </th>
							<td> {{ subadmin.name.substring(0,6) }} </td>
							<td> {{ subadmin.email.substring(0,10) }} </td>
							<td> {{ subadmin.phone }} </td>
							<td class="has-text-centered"> <input type="checkbox" @change="[subadmin.status = !subadmin.status, statusMethod(subadmin.id, subadmin.status)]" :checked="subadmin.status == 1 ? true : false" v-if="loadAuthUser.admin == 'super_admin' "> </td>
							<td>  
								<div class="field is-grouped">

									<p class="control">  
										<router-link :to="{name: 'sub-admin-permission', params: {id: subadmin.id}}" class="button purple-color" :disabled="subadmin.id == 1" exact>
											Permission
										</router-link>
									</p>

									<p class="control">
										<router-link :to="{name: 'view-sub-admin', params: {id: subadmin.id}}" class="button purple-color" exact>
											View
										</router-link>
									</p>
									<p class="control">
										<router-link :to="{name: 'edit-sub-admin', params: {id: subadmin.id} }" class="button purple-color" exact>
											Edit
										</router-link>
									</p>
									<p class="control" @click="[showModal = true, getDestroyId(subadmin.id)]" v-if="loadAuthUser.admin == 'super_admin' ">
										<button class="button purple-color" :disabled="subadmin.id == 1">
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
														<p class="card-footer-item is-bold purple-color pointer" v-on:click="deleteData">
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
				<div class="buttons has-addons is-centered" v-if="loadSubAdminDatas.length >= 1">
					<a class="button" v-if="loadSubAdminPagination.previousPageUrl" @click="paginationHandler(loadSubAdminPagination.previousPageUrl)">
						<span class="icon is-small">
							<i class="fas fa-arrow-left purple-color"></i>
						</span>
						<span> Previous </span>
					</a>


					<a class="button">

						{{ loadSubAdminPagination.to}} 0f {{loadSubAdminPagination.total}}
					</a>


					<a class="button" v-if="loadSubAdminPagination.nextPageUrl" @click="paginationHandler(loadSubAdminPagination.nextPageUrl)">
						<span class="icon is-small">
							<i class="fas fa-arrow-right purple-color"></i>
						</span>
						<span> Next </span>
					</a>
				</div>


			</div> <!-- Card content tag open -->


		</div> <!-- Card tag close -->


		<div class="card" v-if="loadSubAdminDatas.length <= 0">
			<div class="card-content">
				<div class="content is-bold has-text-centered subtitle">

					<span class="fa"> No sub-admin found. Add a sub-admin instead. </span>

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
		destroyId: null,
	}),

	created() {
		this.fetchSubAdminDatas()
		this.clearSubAdminNotification()
	},

	methods: {
		...mapActions(['fetchSubAdminDatas', 'clearSubAdminNotification', 'destroySubAdminData', 'searchSubAdminDatas', 'updateSubAdminStatus']),
		// Local method
		refresh() {
			this.spin = true
			this.fetchSubAdminDatas().then(() => this.spin = false)
			this.searchQuery = ""
			this.searchSubAdminDatas(this.searchQuery)
		},

		getDestroyId(id) {
			this.destroyId = id
		},

		deleteData() {
			this.destroySubAdminData(this.destroyId)
			this.fetchSubAdminDatas()
		    this.showModal = false
		},

		paginationHandler(uri) {
			this.fetchSubAdminDatas(uri)
		},

		searchMethod() {
			if(this.searchQuery > 1) {
				this.searchSubAdminDatas(this.searchQuery)
			}
		},

		statusMethod(id,status) {
			this.updateSubAdminStatus({id, status})
		},

	},


	computed: {
		...mapGetters(['loadSubAdminDatas', 'loadSubAdminLoader', 'loadSubAdminNotification', 'loadSubAdminPagination', 'loadSubAdminSearch', 'loadAuthUser']),

    // Local computed properties
},


}

</script>
