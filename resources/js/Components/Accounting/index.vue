
<template>
	
	<div class="container"> <!-- Container tag open -->

		<div class="box"> <!-- Box tag open -->

			<div class="tabs is-toggle">

				<ul>

					<li class="" v-bind:class="{ 'active': statement }" @click="[statement = true, settlement=false]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': statement }"><i class="fas fa-file-invoice-dollar" aria-hidden="true"></i></span>
							<span v-bind:class="{ 'has-text-white': statement }"> Account Statement </span>
						</a>
					</li>

					<li v-bind:class="{ 'active': settlement }" @click="[statement = false, settlement=true]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': settlement }"><i class="fas fa-hand-holding-usd" aria-hidden="true"></i></span>
							<span class=" " v-bind:class="{ 'has-text-white': settlement }"> Account Settlement </span>
						</a>
					</li>

				</ul>
			</div>

			<div class="" v-if="statement">
				<account-statement> </account-statement>
			</div>

			<div class="" v-if="settlement">
				<account-settlement> </account-settlement>
			</div>

		</div> <!-- Box tag close -->

	</div> <!-- Container tag close -->


</template>


<script>
import Accountstatement from "./partials/accountstatement.vue"
import AccountSettlement from "./partials/accountSettlement.vue"

export default {

	components: {
		'account-statement': Accountstatement,
		'account-settlement': AccountSettlement,
	},

	data: () => ({
		statement: true,
		settlement: false,
	}),

}

</script>
