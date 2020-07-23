<template>


	<div class="container"> <!-- Container tag open -->

		<div class="card"> <!-- Card tag open -->

			<div class="card-content table-container"> <!-- Card content tag open -->

				<!-- Main container -->
				<nav class="level">
					<!-- Left side -->
					<div class="level-left">

						<div class="level-item">
							<div class="field has-addons">
								<p class="control">
									<input class="input" type="text" placeholder=" Search User">
								</p>
								<p class="control">
									<button class="button purple-bg has-text-white">
										Search
									</button>
								</p>
							</div>
						</div>
					</div>

				</nav>


				<table class="table is-bordered is-striped is-hoverable"> <!-- Table tag open -->

					<thead>
						<tr>
							<th> <span class="purple-color"> ID </span> </th>
							<th> <span class="purple-color"> Name </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Email </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Phone </span> </th>
							<th> <span class="purple-color"> OTP Verified </span> </th>
							<th> <span class="purple-color"> Joined On </span> </th>
							<th>  Total Orders  </th>
							<th> <span class="purple-color"> Status </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Action </span> </th>
						</tr>
					</thead>

					<tbody>

						<tr>
							<th> <span class="purple-color"> 1 </span> </th>
							<td> Joseph Purple </td>
							<td> Purple@gmail.com </td>
							<td> 080XXXXXXX </td>
							<td> No </td>
							<td> May 11, 2020 </td>
							<td class="has-text-centered"> 23 </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td>  
								<div class="field is-grouped">
									<p class="control">
										<router-link class="button purple-color" :to="{ name: 'edit-user' }" exact>
											Edit
										</router-link>
									</p>
									<p class="control">
										<router-link class="button purple-color" :to="{ name: 'reset-user-password' }" exact>
											Reset Password
										</router-link>
									</p>
								</div>
							</td>
						</tr>

						<tr>
							<th> <span class="purple-color"> 2 </span> </th>
							<td> Joseph Purple </td>
							<td> Purple@gmail.com </td>
							<td> 080XXXXXXX </td>
							<td> No </td>
							<td> May 11, 2020 </td>
							<td class="has-text-centered"> 23 </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td>  
								<div class="field is-grouped">
									<p class="control">
										<router-link class="button purple-color" :to="{ name: 'edit-user' }" exact>
											Edit
										</router-link>
									</p>
									<p class="control">
										<router-link class="button purple-color" :to="{ name: 'reset-user-password' }" exact>
											Reset Password
										</router-link>
									</p>
								</div>
							</td>
						</tr>



						<tr>
							<th> <span class="purple-color"> 3 </span> </th>
							<td> Joseph Purple </td>
							<td> Purple@gmail.com </td>
							<td> 080XXXXXXX </td>
							<td> No </td>
							<td> May 11, 2020 </td>
							<td class="has-text-centered"> 23 </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td>  
								<div class="field is-grouped">
									<p class="control">
										<router-link class="button purple-color" :to="{ name: 'edit-user' }" exact>
											Edit
										</router-link>
									</p>
									<p class="control">
										<router-link class="button purple-color" :to="{ name: 'reset-user-password' }" exact>
											Reset Password
										</router-link>
									</p>
								</div>
							</td>
						</tr>


						<tr>
							<th> <span class="purple-color"> 4 </span> </th>
							<td> Joseph Purple </td>
							<td> Purple@gmail.com </td>
							<td> 080XXXXXXX </td>
							<td> No </td>
							<td> May 11, 2020 </td>
							<td class="has-text-centered"> 23 </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td>  
								<div class="field is-grouped">
									<p class="control">
										<router-link class="button purple-color" :to="{ name: 'edit-user' }" exact>
											Edit
										</router-link>
									</p>
									<p class="control">
										<router-link class="button purple-color" :to="{ name: 'reset-user-password' }" exact>
											Reset Password
										</router-link>
									</p>
								</div>
							</td>
						</tr>


						<tr>
							<th> <span class="purple-color"> 5 </span> </th>
							<td> Joseph Purple </td>
							<td> Purple@gmail.com </td>
							<td> 080XXXXXXX </td>
							<td> No </td>
							<td> May 11, 2020 </td>
							<td class="has-text-centered"> 23 </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td>  
								<div class="field is-grouped">
									<p class="control">
										<router-link class="button purple-color" :to="{ name: 'edit-user' }" exact>
											Edit
										</router-link>
									</p>
									<p class="control">
										<router-link class="button purple-color" :to="{ name: 'reset-user-password' }" exact>
											Reset Password
										</router-link>
									</p>
								</div>
							</td>
						</tr>
					</tbody>

				</table> <!-- Table tag close -->


<!-- Pagination section -->
<div class="buttons has-addons is-centered">
  <a class="button">
    <span class="icon is-small">
      <i class="fas fa-arrow-left green"></i>
    </span>
    <span> Previous </span>
  </a>


  <a class="button">

    5 0f 6
  </a>


  <a class="button">
    <span class="icon is-small">
      <i class="fas fa-arrow-right green"></i>
    </span>
    <span> Next </span>
  </a>

</div>




			</div> <!-- Card content tag open -->


		</div> <!-- Card tag close -->


<ul v-for="user in allUsers" :key="user.id" >
	<li> {{ user.id }} . {{ user.name }} </li>
</ul>





	</div> <!-- Container tag close -->

</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {

	data: () => ({

	}),

	created() {
		this.fetchUsers();
	},

	methods: {
		...mapActions(['fetchUsers'])
	},

	computed: mapGetters(['allUsers'])



}

</script>
