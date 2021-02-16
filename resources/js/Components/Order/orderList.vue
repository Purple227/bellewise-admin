<template>	

	<div class="container"> <!-- Container tag open -->


		<div class="tabs is-toggle">

			<ul>

				<li class="" v-bind:class="{ 'active': pending }" @click="[pending = true, active=false, history=false]">
					<a>
						<span class="icon is-small" v-bind:class="{ 'has-text-white': pending }"><i class="fas fa-hourglass-start" aria-hidden="true"></i></span>
						<span v-bind:class="{ 'has-text-white': pending }"> Pending </span>
					</a>
				</li>

				<li v-bind:class="{ 'active': active }" @click="[active = true, pending=false, history=false]">
					<a>
						<span class="icon is-small" v-bind:class="{ 'has-text-white': active }"><i class="fas fa-check" aria-hidden="true"></i></span>
						<span class=" " v-bind:class="{ 'has-text-white': active }"> Confirmed </span>
					</a>
				</li>


				<li v-bind:class="{ 'active': history }" @click="[history = true, active=false, pending=false ]">
					<a>
						<span class="icon is-small" v-bind:class="{ 'has-text-white': history }"><i class="fas fa-history" aria-hidden="true"></i></span>
						<span class=" " v-bind:class="{ 'has-text-white': history }"> History </span>
					</a>
				</li>

			</ul>
		</div>


		<div class="" v-if="pending">
			<pending-order> </pending-order>
		</div>

		<div class="" v-if="active">
			<active-order> </active-order>
		</div>

		<div class="" v-if="history">
			<history-order> </history-order>
		</div>

	</div> <!-- Container tag close -->

</template>


<script>
import PendingOrder from "./partials/pending.vue"
import ActiveOrder from "./partials/active.vue"
import HistoryOrder from "./partials/history.vue"

export default {

	components: {
		'pending-order': PendingOrder,
		'active-order': ActiveOrder,
		'history-order': HistoryOrder,
	},


	data: () => ({

		pending: true,
		active: false,
		history: false,

	}),



}

</script>
