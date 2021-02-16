<template>


	<div class="container"> <!-- Container tag open -->


		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadUserLoader }"><span class="title"> Bellewise loading </span></div>
		

		<div class="card"> <!-- Card tag open -->

			<div class="card-content table-container"> <!-- Card content tag open -->

				<!-- Main container -->
				<nav class="level">
					<!-- Left side -->
					<div class="level-left">

						<div class="level-item">
							<div class="field has-addons">
								<p class="control">
									<input class="input" type="text" placeholder=" Search User By Mail " v-model="searchQuery" v-on:keyup="searchMethod">
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
							</ul>
						</div>    	

					</div>

				</nav>


				<table class="table is-bordered is-striped is-hoverable" v-if="loadUserData.length >= 1"> <!-- Table tag open -->

					<thead>
						<tr>
							<th> <span class="purple-color"> ID </span> </th>
							<th> <span class="purple-color"> Name </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Email </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Phone </span> </th>
							<th> <span class="purple-color"> OTP Verified </span> </th>
							<th> <span class="purple-color"> Joined On </span> </th>
						</tr>
					</thead>

					<tbody>

						<tr v-for="user in searchQuery.length  > 1  ? loadUserSearch : loadUserData ">
							<th> <span class="purple-color"> {{ user.id}} </span> </th>
							<td> {{ user.name }} </td>
							<td> {{ user.email}} </td>
							<td> {{ user.phone }} </td>
							<td> {{ verify ? 'Yes' : 'No' }} </td>
							<td> {{ user.created_at }} </td>
							<!--
							<td>  
								<div class="field is-grouped">
									<p class="control">
										<router-link class="button purple-color" :to="{ name: 'edit-user' }" exact>
											Edit
										</router-link>
									</p>
									<p class="control">
										<router-link class="button purple-color" :to="{ name: 'reset-user-password' }" exact>
											Reset Password
										</router-link>
									</p>
								</div>
							</td>
						-->
					</tr>

				</tbody>

			</table> <!-- Table tag close -->


			<!-- Pagination section -->
			<div class="buttons has-addons is-centered" v-if="loadUserData.length >= 1">
				<a class="button" v-if="loadUserPagination.previousPageUrl" @click="paginationHandler(loadUserPagination.previousPageUrl)">
					<span class="icon is-small">
						<i class="fas fa-arrow-left purple-color"></i>
					</span>
					<span> Previous </span>
				</a>


				<a class="button">

					{{ loadUserPagination.to}} 0f {{loadUserPagination.total}}
				</a>


				<a class="button" v-if="loadUserPagination.nextPageUrl" @click="paginationHandler(loadUserPagination.nextPageUrl)">
					<span class="icon is-small">
						<i class="fas fa-arrow-right purple-color"></i>
					</span>
					<span> Next </span>
				</a>
			</div>




		</div> <!-- Card content tag open -->


	</div> <!-- Card tag close -->


	<div class="card" v-if="loadUserData.length <= 0">
		<div class="card-content">
			<div class="content is-bold has-text-centered subtitle">

				<span class="fa"> No user found. </span>

			</div>
		</div>
	</div>


</div> <!-- Container tag close -->

</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

	data: () => ({
		spin: false,
		searchQuery: '',
	}),

	created() {
		this.fetchUsers()
	},

	methods: {
		...mapActions(['fetchUsers', 'searchUser']),
		// Local method

		refresh() {
			this.spin = true
			this.fetchUsers().then(() => this.spin = false)
			this.searchQuery = ""
			this.searchUser(this.searchQuery)
		},


		paginationHandler(uri) {
			this.fetchUsers(uri)
		},

		searchMethod() {
			if(this.searchQuery > 1) {
				this.searchUser(this.searchQuery)
			}
		},

	},


	computed: {
		...mapGetters(['loadUserData', 'loadUserLoader', 'loadUserPagination', 'loadUserSearch', 'loadAuthUser', 'loadAuthRole']),

    // Local computed properties
},


}

</script>
