
<template>
	
	<div class="container"> <!-- Container tag open -->

		<div class="box"> <!-- Box tag open -->

			<div class="tabs is-toggle">

				<ul>

					<li class="" v-bind:class="{ 'active': basic }" @click="[basic = true, tc=false, about=false]">
						<a>
							<span v-bind:class="{ 'has-text-white': basic }"> Basic </span>
						</a>
					</li>

					<li v-bind:class="{ 'active': tc }" @click="[basic = false, tc=true, about=false]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': tc }"><i class="fas fa-copyright" aria-hidden="true"></i></span>
							<span class=" " v-bind:class="{ 'has-text-white': tc }"> T&C/Privacy Policy </span>
						</a>
					</li>

				</ul>

			</div>

 			<div class="" v-if="basic">
				<basic-section> </basic-section>
			</div>

			<div class="" v-if="tc">
				<tc-pp> </tc-pp>
			</div>


		</div> <!-- Box tag close -->

	</div> <!-- Container tag close -->


</template>


<script>
import Basic from "./partials/basic.vue"
import TCPP from "./partials/TC-PP.vue"

export default {

	components: {
		'basic-section': Basic,
		'tc-pp': TCPP,
	},

	data: () => ({
		basic: true,
		tc: false,
	}),

}

</script>
