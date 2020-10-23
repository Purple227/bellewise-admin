

<template>

	<div class="container"> <!-- Container tag open -->

		<div class="notification purple-bg-light is-bold has-text-black" v-if="loadRoleNotification">
			Task Succeesful
		</div>

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadSubAdminLoader && loadRoleLoader }"><span class="title"> Bellewise Loading</span></div>

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p>
						<strong class="subtitle is-bold"> {{ loadSubAdminSingleData.admin }} Permission </strong> <br>
						<span> {{ loadSubAdminSingleData.email }} </span>
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'sub-admin-list' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>

		<div class="columns is-multiline"> <!-- Columns wrapper tag open -->


			<div class="column is-4"> <!-- First column tag open-->

				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Restaurants
						</p>

					</header>
					<div class="card-content">
						<div class="content">


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" value="loadRole.restaurant_list" v-model="loadRole.restaurant_list" @click="loadRole.restaurant_list = !loadRole.restaurant_list" >
									<span class="is-bold"> List </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.restaurant_create" @click="loadRole.restaurant_create = !loadRole.restaurant_create">
									<span class="is-bold"> Create </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.restaurant_update" @click="loadRole.restaurant_update = !loadRole.restaurant_update">
									<span class="is-bold"> Update </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.restaurant_block" @click="loadRole.restaurant_block = !loadRole.restaurant_block">
									<span class="is-bold"> Block </span>
								</label>
							</div>




							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.restaurant_delete" @click="loadRole.restaurant_delete = !loadRole.restaurant_delete">
									<span class="is-bold"> Delete </span>
								</label>
							</div>


						</div>
					</div>

				</div>

			</div> <!-- First column tag close -->



			<div class="column is-4"> <!-- Second column tag open-->



				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Drivers
						</p>

					</header>
					<div class="card-content">
						<div class="content">


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.driver_list" @click="loadRole.driver_list = !loadRole.driver_list">
									<span class="is-bold"> List </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.driver_create" @click="loadRole.driver_create = !loadRole.driver_create"> 
									<span class="is-bold"> Create </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.driver_update" @click="loadRole.driver_update = !loadRole.driver_update">
									<span class="is-bold"> Update </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.driver_block" @click="loadRole.driver_block = !loadRole.driver_block">
									<span class="is-bold"> Block </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.driver_delete" @click="loadRole.driver_delete = !loadRole.driver_delete">
									<span class="is-bold"> Delete </span>
								</label>
							</div>


						</div>
					</div>

				</div>

			</div> <!-- Second column tag close -->

			<div class="column is-4"> <!-- Column tag open-->

				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Promotion
						</p>

					</header>
					<div class="card-content">
						<div class="content">

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.promo_create" @click="loadRole.promo_create = !loadRole.promo_create">
									<span class="is-bold"> Create </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.promo_list" @click="loadRole.promo_list = !loadRole.promo_list">
									<span class="is-bold"> List </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.promo_update" @click="loadRole.promo_update = !loadRole.promo_update">
									<span class="is-bold"> Update </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.promo_delete" @click="loadRole.promo_delete = !loadRole.promo_delete">
									<span class="is-bold"> Delete </span>
								</label>
							</div>


						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->


			<div class="column is-4"> <!-- Column tag open-->


				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Orders
						</p>

					</header>
					<div class="card-content">
						<div class="content">

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.order_list" @click="loadRole.order_list = !loadRole.order_list">
									<span class="is-bold"> List </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.order_confirm" @click="loadRole.order_confirm = !loadRole.order_confirm">
									<span class="is-bold"> Confirm </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox" >
									<input type="checkbox" v-model="loadRole.order_reject" @click="loadRole.order_reject = !loadRole.order_reject">
									<span class="is-bold"> Reject </span>
								</label>
							</div>

						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->


			<div class="column is-4"> <!-- Column tag open-->

				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Users
						</p>

					</header>
					<div class="card-content">
						<div class="content">

							<div class="field">
								<label class="checkbox" >
									<input type="checkbox" v-model="loadRole.user_list" @click="loadRole.user_list = !loadRole.user_list">
									<span class="is-bold"> List </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.user_block" @click="loadRole.user_block = !loadRole.user_block">
									<span class="is-bold"> Block </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.user_password_reset" @click="loadRole.user_password_reset = !loadRole.user_password_reset">
									<span class="is-bold"> Reset Password </span>
								</label>
							</div>

						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->


			<div class="column is-4"> <!-- Column tag open-->

				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Sub Admins
						</p>

					</header>
					<div class="card-content">
						<div class="content">

							<div class="field">
								<label class="checkbox">
									<input type="checkbox" v-model="loadRole.sub_admin_list" @click="loadRole.sub_admin_list = !loadRole.sub_admin_list">
									<span class="is-bold"> List </span>
								</label>
							</div>

						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->


		</div> <!-- Columns wrapper tag close -->


		<div class="field">
			<p class="control">
				<button class="button" v-bind:class="{ 'is-loading': loadRoleProgress }" @click="submitForm">
					<span class="icon is-small">
						<i class="fas fa-save purple-color"></i>
					</span>
					<span class="is-bold"> Update </span>
				</button>
			</p>
		</div>


	</div> <!-- Container tag close -->
	

</template>



<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

	data: () => ({
		
	}),

	created() {
		this.setId()
		this.clearRoleNotification()
	},

	methods: {
		...mapActions(['fetchSubAdminSingleData', 'editRole', 'fetchRole', 'clearRoleNotification']),

			//+ this.$route.params.slug

			setId() {
				let id = this.$route.params.id
				this.fetchSubAdminSingleData(id)
				this.fetchRole(id)
			},


			submitForm() {

				let data = new FormData();
				data.append("_method", "patch");
				data.append('restaurant_list', this.loadRole.restaurant_list == true ? this.loadRole.restaurant_list = 1 : this.loadRole.restaurant_list = 0);
				data.append('restaurant_create', this.loadRole.restaurant_create == true ? this.loadRole.restaurant_create = 1 : this.loadRole.restaurant_create = 0);
				data.append('restaurant_block', this.loadRole.restaurant_block == true ? this.loadRole.restaurant_block = 1 : this.loadRole.restaurant_block = 0);
				data.append('restaurant_delete', this.loadRole.restaurant_delete == true ? this.loadRole.restaurant_delete = 1 : this.loadRole.restaurant_delete = 0);
				data.append('restaurant_update', this.loadRole.restaurant_update == true ? this.loadRole.restaurant_update = 1 : this.loadRole.restaurant_update = 0);

				data.append('driver_update', this.loadRole.driver_update == true ? this.loadRole.driver_update = 1 : this.loadRole.driver_update = 0);
				data.append('driver_list', this.loadRole.driver_list == true ? this.loadRole.driver_list = 1 : this.loadRole.driver_list = 0);
				data.append('driver_create', this.loadRole.driver_create == true ? this.loadRole.driver_create = 1 : this.loadRole.driver_create = 0);
				data.append('driver_block', this.loadRole.driver_block == true ? this.loadRole.driver_block = 1 : this.loadRole.driver_block = 0);
				data.append('driver_delete', this.loadRole.driver_delete == true ? this.loadRole.driver_delete = 1 : this.loadRole.driver_delete = 0);

				data.append('promo_list', this.loadRole.promo_list == true ? this.loadRole.promo_list = 1 : this.loadRole.promo_list = 0);
				data.append('promo_create', this.loadRole.promo_create == true ? this.loadRole.promo_create = 1 : this.loadRole.promo_create = 0);
				data.append('promo_delete', this.loadRole.promo_delete == true ? this.loadRole.promo_delete = 1 : this.loadRole.promo_delete = 0);
				data.append('promo_update', this.loadRole.promo_update == true ? this.loadRole.promo_update = 1 : this.loadRole.promo_update = 0);

				data.append('user_list', this.loadRole.user_list == true ? this.loadRole.user_list = 1 : this.loadRole.user_list = 0);
				data.append('user_block', this.loadRole.user_block == true ? this.loadRole.user_block = 1 : this.loadRole.user_block = 0);
				data.append('user_password_reset', this.loadRole.user_password_reset == true ? this.loadRole.user_password_reset = 1 : this.loadRole.user_password_reset = 0);

				data.append('order_list', this.loadRole.order_list == true ? this.loadRole.order_list = 1 : this.loadRole.order_list = 0);
				data.append('order_confirm', this.loadRole.order_confirm == true ? this.loadRole.order_confirm = 1 : this.loadRole.order_confirm = 0);
				data.append('order_reject', this.loadRole.order_reject == true ? this.loadRole.order_reject = 1 : this.loadRole.order_reject = 0);

				data.append('sub_admin_list', this.loadRole.sub_admin_list == true ? this.loadRole.sub_admin_list = 1 : this.loadRole.sub_admin_list = 0);

				let id = this.$store.loadRole.id
				console.log(id)
				this.editRole({data, id}).then(() => this.setId() )
			},

		},


		computed: {
			...mapGetters(['loadSubAdminSingleData', 'loadSubAdminLoader', 'loadRole', 'loadRoleNotification', 'loadRoleProgress', 'loadRoleLoader']),
    // Local computed properties

},


}

</script>

