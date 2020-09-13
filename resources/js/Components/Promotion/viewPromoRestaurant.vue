
<template>
	
	<div> <!-- Root element tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadPromoLoader }"><span class="title"> Bellewise loading </span></div>

		<div class="tabs is-toggle is-fullwidth">
			<ul>
				<li class="purple-bg">
					<a>
						<span class="icon is-small has-text-white"> <i class="fas fa-store-alt" aria-hidden="true"> </i> </span>
						<span class="has-text-white"> Restaurants in promo {{ loadSinglePromo.promo.restaurants.length}} </span>
					</a>
				</li>

			</ul>
		</div>

		<aside class="menu">
			<ul class="menu-list" v-for="(restaurant, index) in  loadSinglePromo.promo.restaurants " :key="index">
				<li class="is-bold mt-1"> {{ index+1 }}. {{ restaurant.name}}  </li>
			</ul>
		</aside>

		<router-link :to="{ name: 'list-promotion' }" class="button is-fullwidth mt-3">
			<span class="icon is-medium">
				<i class="fas fa-arrow-left purple-color"></i>
			</span>
			<span class="is-bold"> Back </span>
		</router-link>


	</div> <!-- Root element tag close -->

</template>

	<script>
	import { mapGetters, mapActions, mapState } from 'vuex';

	export default {

		data: () => ({

		}),

		created() {
			this.setId()
		},

		methods: {
			...mapActions(['fetchSinglePromo']),

			// local methods

			setId() {
				let id = this.$route.params.id
				this.fetchSinglePromo(id)
			},

		},


		computed: {
			...mapGetters(['loadSinglePromo', 'loadPromoLoader']),
    // Local computed  properties here
},


}

</script>
