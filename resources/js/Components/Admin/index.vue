

<template>

	<div class="container"> <!-- Container tag open -->

		<div class="box"> <!-- Box container tag open -->


			<div class="tabs is-toggle">
				<ul>

					<li class="" v-bind:class="{ 'active':signIn }" @click="[signIn = true, signUp = false]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': signIn }"><i class="fas fa-truck" aria-hidden="true"></i></span>
							<span v-bind:class="{ 'has-text-white': signIn }"> Sign-in </span>
						</a>
					</li>

					<li v-bind:class="{ 'active': signUp }" @click="[signIn = false, signUp = true]">
						<a>
							<span class="icon is-small" v-bind:class="{ 'has-text-white': signUp }"><i class="fas fa-ban" aria-hidden="true"></i></span>
							<span class=" " v-bind:class="{ 'has-text-white': signUp }"> Sign-up </span>
						</a>
					</li>

				</ul>
			</div>





			<div v-if="signIn">
				<sign-in> </sign-in>
			</div>

			<div v-if="signUp">
				<sign-up> </sign-up>
			</div>


		</div> <!-- Box container tag close -->


	</div> <!-- Container tag close -->

</template>

<script>

import SignUp from "./Modules/signUp.vue"
import SignIn from "./Modules/signIn.vue"

export default {

	components: {
		'sign-up': SignUp,
		'sign-in': SignIn,
	},

	data: () => ({
		signIn: true,
		signUp: false,
	}),




}

</script>