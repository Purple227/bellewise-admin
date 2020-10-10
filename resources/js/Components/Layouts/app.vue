
<template>
	
	<div class="container main-container"> <!-- Container tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadAuthLoader }"><span class="title"> Bellewise loading </span></div>


		<div class="columns"> <!-- Columns wrapper tag open -->


			<div class="column is-3 box mt-3"> <!-- First column tag open -->
				<sidebar v-bind:authenticated ='loadAuthenticated' > </sidebar>
			</div> <!-- First column tag close -->


			<div class="column is-9"> <!-- Second column tag open -->
				<navbar v-if="loadAuthenticated" v-bind:user="loadAuthUser"> </navbar>

				<!-- route outlet -->
				<!-- component matched by the route will render here -->
				<router-view></router-view>

			</div> <!-- Second column tag close -->

		</div> <!-- Columns wrapper tag close -->


	</div> <!-- Container tag close -->

</template>

<script>

import Navbar from './partials/Navbar.vue';
import Sidebar from './partials/Sidebar.vue';
import { mapActions, mapGetters } from 'vuex';

export default {

	components: {
		'navbar': Navbar,
		'sidebar': Sidebar,
	},

/*	created() {
		this.me()
	},*/

	methods: {
		...mapActions(['me']),
    // Local method goes here


  }, // Method calibrace close


  computed: {
  	...mapGetters(['loadAuthUser', 'loadAuthenticated', 'loadAuthLoader', 'loadAuthRole']),

    // Local computed properties
},



}

</script>











