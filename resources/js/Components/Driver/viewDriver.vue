
<template>

	<div class="container"> <!-- Container tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadLoading }"><span class="title"> Bellewise Loading</span></div>

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Driver Profile</strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'driver-list' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>
		

		<div class="box">

			<div class="columns is-gapless"> <!-- Columns wrapper tag open -->


				<div class="column"> <!-- First column tag open-->

					<div class="center">
						<div class="content">
							<figure class="image is-256x256">
								<img class="is-rounded" src="/images/default_image.svg" v-if="loadSingleData.image.length <= 'default_image.svg'.length ">
								<img class="is-rounded" :src="imagePath" v-else>
							</figure>

						</div>
					</div>

				</div> <!-- First column tag close -->



				<div class="column"> <!-- Second column tag open-->

					<div class="content">
						<hr class="is-paddingless">
						<p class="subtitle is-bold"> {{ loadSingleData.name }} </p>
						<hr class="is-paddingless">
						<p class="subtitle "> {{ loadSingleData.email }} </p>
						<hr class="is-paddingless">
						<p class="subtitle "> {{ loadSingleData.phone }} </p>
						<hr class="is-paddingless">
						<p class="subtitle "> {{ loadSingleData.occupation }} </p>
						<hr class="is-paddingless">
					</div>

				</div> <!-- Second column tag close -->


			</div> <!-- Columns wrapper tag close -->


			<div class="buttons is-centered">
				<button class="button purple-color is-bold">ID: {{ loadSingleData.driver_id }} </button>
				<button class="button purple-color is-bold">Delivery: {{ loadSingleData.total_delivery }} </button>
			</div>
			

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
	},

	methods: {
		...mapActions(['fetchSingleData']),

			//+ this.$route.params.slug

			setId() {
				let id = this.$route.params.id
				this.fetchSingleData(id)
			},

		},


		computed: {
			...mapGetters(['loadSingleData', 'loadLoading']),

    // Local computed properties

    imagePath () {
    	let LaravelImageDefaultPath = '/storage/'
    	let imageName = this.$store.getters.loadSingleData.image
    	let completedPath = LaravelImageDefaultPath + imageName 
    	return completedPath
    }
},


}

</script>
