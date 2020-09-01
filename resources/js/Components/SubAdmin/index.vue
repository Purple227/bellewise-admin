

<template>

	<div class="container"> <!-- Container tag open -->

		<div class="box"> <!-- Box container tag open -->

			<div class="tabs is-toggle">
				<ul>

					<li class="" v-bind:class="{ 'active':subAdminList  }" @click="[subAdminList = true, blockSubAdmin = false]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': subAdminList }"><i class="fas fa-truck" aria-hidden="true"></i></span>
							<span v-bind:class="{ 'has-text-white': subAdminList }"> Sub-admins </span>
						</a>
					</li>

					<li v-bind:class="{ 'active': blockSubAdmin }" @click="[subAdminList = false, blockSubAdmin = true]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': blockSubAdmin }"><i class="fas fa-ban" aria-hidden="true"></i></span>
							<span class=" " v-bind:class="{ 'has-text-white': blockSubAdmin }"> Blocked sub-admin </span>
						</a>
					</li>

				</ul>
			</div>



			<div v-if="subAdminList">
				<sub-admin-list> </sub-admin-list>
			</div>

			<div v-if="blockSubAdmin">
				<block-sub-admin> </block-sub-admin>
			</div>


		</div> <!-- Box container tag close -->


	</div> <!-- Container tag close -->

</template>

<script>

import SubAdminList from "./Modules/subAdminList.vue"
import BlockSubAdmin from "./Modules/blockSubAdmin.vue"

export default {

	components: {
		'sub-admin-list': SubAdminList,
		'block-sub-admin': BlockSubAdmin,
	},

	data: () => ({
		subAdminList: true,
		blockSubAdmin: false,
	}),




}

</script>