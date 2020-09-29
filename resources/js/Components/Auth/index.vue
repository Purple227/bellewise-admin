

<template>

	<div class="container"> <!-- Container tag open -->

		<div class="box"> <!-- Box container tag open -->

			<div class="tabs is-toggle">
				<ul>

					<li class="" v-bind:class="{ 'active':login  }" @click="[login = true, createAdmin = false]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': login }"><i class="fas fa-key" aria-hidden="true"></i></span>
							<span v-bind:class="{ 'has-text-white': login }"> Login </span>
						</a>
					</li>

					<li v-bind:class="{ 'active': createAdmin }" @click="[login = false, createAdmin = true]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': createAdmin }"><i class="fas fa-user" aria-hidden="true"></i></span>
							<span class=" " v-bind:class="{ 'has-text-white': createAdmin }"> Register </span>
						</a>
					</li>

				</ul>
			</div>



			<div v-if="login">
				<login> </login>
			</div>

			<div v-if="createAdmin">
				<create-admin> </create-admin>
			</div>


		</div> <!-- Box container tag close -->


	</div> <!-- Container tag close -->

</template>

<script>

import CreateAdmin from "../Admin/create.vue"
import Login from "./Modules/login.vue"
import { mapGetters } from 'vuex';

export default {

	components: {
		'create-admin': CreateAdmin,
		'login': Login,
	},

	data: () => ({
		login: true,
		createAdmin: false,
	}),

	computed: {
		...mapGetters(['loadAdminNotification']),
    // Local computed properties
},


}

</script>