
<template>

	<div class="container"> <!-- Container tag open -->

		<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadSubAdminLoader }"><span class="title"> Bellewise Loading</span></div>

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Sub-admin Profile</strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'sub-admin-list' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>
		

		<div class="box">

			<div class="columns is-gapless"> <!-- Columns wrapper tag open -->


				<div class="column"> <!-- First column tag open-->

					<div class="center">
						<div class="content">
							<figure class="image is-256x256">
								<img class="is-rounded" src="/images/default_image.svg" v-if="loadSubAdminSingleData.image.length <= 'default_image.svg'.length ">
								<img class="is-rounded" :src="imagePath" v-else>
							</figure>

						</div>
					</div>

				</div> <!-- First column tag close -->



				<div class="column"> <!-- Second column tag open-->

					<div class="content">
						<hr class="is-paddingless">
						<p class="subtitle is-bold"> {{ loadSubAdminSingleData.name }} </p>
						<hr class="is-paddingless">
						<p class="subtitle "> {{ loadSubAdminSingleData.email }} </p>
						<hr class="is-paddingless">
						<p class="subtitle "> {{ loadSubAdminSingleData.phone }} </p>
						<hr class="is-paddingless">
					</div>

				</div> <!-- Second column tag close -->


			</div> <!-- Columns wrapper tag close -->


			<div class="buttons is-centered">
				<button class="button purple-color is-bold">ID: {{ loadSubAdminSingleData.sub_admin_id }} </button>

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
		this.fetchSubAdminSingleData()
		this.setId()
	},

	methods: {
		...mapActions(['fetchSubAdminSingleData']),

			//+ this.$route.params.slug

			setId() {
				let id = this.$route.params.id
				this.fetchSubAdminSingleData(id)
			},

		},


		computed: {
			...mapGetters(['loadSubAdminSingleData', 'loadSubAdminLoader']),

    // Local computed properties

    imagePath () {
    	let LaravelImageDefaultPath = '/Storage/'
    	let imageName = this.$store.getters.loadSubAdminSingleData.image
    	let completedPath = LaravelImageDefaultPath + imageName 
    	return completedPath
    }
},


}

</script>
