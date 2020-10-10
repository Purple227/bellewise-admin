

<template>

	<div> <!-- Root element tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadMenuLoader }"><span class="title"> Bellewise loading </span></div>

		<div class="card"> <!-- Card tag open -->

			<router-link  :to="{name: 'list-restaurant' }"  exact> <strong class="purple-color is-pulled-right mb-4 mr-1"> Back</strong> </router-link>


			<div class="card-content table-container"> <!-- Card content tag open -->

				<div class="notification purple-bg-light is-bold has-text-black" v-if="loadMenuNotification">
					Task Succeesful
				</div>

				<!-- Main container -->
				<nav class="level">
					<!-- Left side -->
					<div class="level-left">

						<div class="level-item">
							<div class="field has-addons">
								<p class="control">
									<input class="input" type="text" placeholder=" Search menu by name" v-model="searchQuery" v-on:keyup="searchMethod">
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
										<span class="icon is-small"><i class="fas fa-sync-alt purple-color" v-bind:class="{ 'fa-spin': spin }"  aria-hidden="true"></i></span>
										<span>  Refresh</span>
									</a>
								</li>
								<li>
									<router-link :to="{name: 'add-menu', params: {id: id} }" exact>
										<span class="icon is-small"><i class="fas fa-plus purple-color" aria-hidden="true"></i></span>
										<span> Add Menu</span>
									</router-link>
								</li>
							</ul>
						</div>      

					</div>
				</nav>

				<div class="center"> <!-- Center table tag -->

				<table class="table is-bordered is-striped is-hoverable" v-if="loadMenuDatas.length >= 1"> <!-- Table tag open -->

					<thead>
						<tr>
							<th> <span class="purple-color"> ID </span> </th>
							<th> <span class="purple-color"> Name </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Description </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Price </span> </th>
							<th> <span class="purple-color"> Action </span> </th>
						</tr>
					</thead>

					<tbody>

						<tr v-for="(menu, index) in searchQuery.length  > 1  ? loadMenuSearch : loadMenuDatas " :key="index">

							<th> <span class="purple-color"> {{ index+1 }} </span> </th>
							<td>  {{ menu.name.substring(0,6) }}  </td>
							<td> {{ menu.description.substring(0,15) }} </td>
							<td> ₦ {{ menu.price }} </td>
							<td>  
								<div class="field is-grouped" v-if=" (loadAuthUser.admin == 'super_admin') || (loadAuthRole.restaurant_delete == 1) ">
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
														<p class="card-footer-item is-bold purple-color pointer" v-on:click="deleteData(menu.id, index)">
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

			</div> <!-- Center table tag close-->

				<!-- Pagination section -->
				<div class="buttons has-addons is-centered" v-if="loadMenuDatas.length >= 1">
					<a class="button" v-if="loadMenuPagination.previousPageUrl" @click="paginationHandler(loadMenuPagination.previousPageUrl)">
						<span class="icon is-small">
							<i class="fas fa-arrow-left purple-color"></i>
						</span>
						<span> Previous </span>
					</a>


					<a class="button">

						{{ loadMenuPagination.to}} 0f {{loadMenuPagination.total}}
					</a>


					<a class="button" v-if="loadMenuPagination.nextPageUrl" @click="paginationHandler(loadMenuPagination.nextPageUrl)">
						<span class="icon is-small">
							<i class="fas fa-arrow-right purple-color"></i>
						</span>
						<span> Next </span>
					</a>
				</div>

			</div> <!-- Card content tag open -->


		</div> <!-- Card tag close -->


		<div class="card" v-if="loadMenuDatas.length <= 0">
			<div class="card-content">
				<div class="content is-bold has-text-centered subtitle">

					<span class="fa"> No menu found. Add a menu. </span>

				</div>
			</div>
		</div>


	</div> <!-- Root element tag close -->

</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

	data: () => ({
		spin: false,
		showModal: false,
		searchQuery: '',
		id: null,
	}),

	created() {
		this.getMenus()
		this.clearMenuNotification()
		this.id = this.$route.params.id
	},

	methods: {
		...mapActions(['fetchMenuDatas', 'clearMenuNotification', 'destroyMenuData', 'searchMenuDatas']),
    // Local method
    
    refresh() {
    	this.spin = true
    	this.fetchMenuDatas().then(() => this.spin = false)
    	this.searchQuery = ""
    	this.searchMenuDatas(this.searchQuery)
    },

    async deleteData(id, index) {
    	this.destroyMenuData(id).then(() => this.$store.getters.loadMenuDatas.splice(index, 1) )
    	this.fetchMenuDatas()
    	this.showModal = false
    },

    getMenus() {
    	let id = this.$route.params.id
    	this.fetchMenuDatas({id})
    },

    paginationHandler(uri) {
    	this.fetchMenuDatas({uri})
    },

    searchMethod() {
    	if(this.searchQuery.length > 1) {
    		let id = this.$route.params.id
    		let searchQuery = this.searchQuery
    		this.searchMenuDatas( {searchQuery, id} )
    	}
    },

},


computed: {
	...mapGetters(['loadMenuDatas', 'loadMenuLoader', 'loadMenuNotification', 'loadMenuPagination', 'loadMenuSearch', 'loadAuthRole', 'loadAuthUser']),

    // Local computed properties
},


}

</script>
