

<template>

	<div class="container"> <!-- Container tag open -->

		<div class="box"> <!-- Box container tag open -->

			<div class="tabs is-toggle">
				<ul>

					<li class="" v-bind:class="{ 'active':driverList  }" @click="[driverList = true, blockDriver = false]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': driverList }"><i class="fas fa-truck" aria-hidden="true"></i></span>
							<span v-bind:class="{ 'has-text-white': driverList }"> Drivers </span>
						</a>
					</li>

					<li v-bind:class="{ 'active': blockDriver }" @click="[driverList = false, blockDriver = true]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': blockDriver }"><i class="fas fa-ban" aria-hidden="true"></i></span>
							<span class=" " v-bind:class="{ 'has-text-white': blockDriver }"> Blocked Drivers </span>
						</a>
					</li>

				</ul>
			</div>



			<div v-if="driverList">
				<driver-list> </driver-list>
			</div>

			<div v-if="blockDriver">
				<block-driver> </block-driver>
			</div>


		</div> <!-- Box container tag close -->


	</div> <!-- Container tag close -->

</template>

<script>

import DriverList from "./Modules/driverList.vue"
import BlockDriver from "./Modules/blockDriver.vue"

export default {

	components: {
		'driver-list': DriverList,
		'block-driver': BlockDriver,
	},

	data: () => ({
		driverList: true,
		blockDriver: false,
	}),




}

</script>