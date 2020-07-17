
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
									<input class="input" type="text" placeholder=" Search Admin">
								</p>
								<p class="control">
									<button class="button purple-bg has-text-white">
										Search
									</button>
								</p>
							</div>
						</div>
					</div>

					<!-- Right side -->
					<div class="level-right">

						<div class="tabs is-toggle level-item">
							<ul>
								<li>
									<router-link :to="{ name: 'add-admin' }" exact>
										<span class="icon is-small"><i class="fas fa-plus purple-color" aria-hidden="true"></i></span>
										<span> Add Admin</span>
									</router-link>
								</li>
							</ul>
						</div>    	

					</div>
				</nav>



				<table class="table is-bordered is-striped is-hoverable"> <!-- Table tag open -->

					<thead>
						<tr>
							<th> <span class="purple-color"> ID </span> </th>
							<th class="has-text-centered"> Name </th> 
							<th class="has-text-centered"> <span class="purple-color"> Email </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Phone </span> </th>
							<th> <span class="purple-color"> Joined On </span> </th>
							<th> <span class="purple-color"> Super Admin </span> </th>
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
							<td> May 11, 2020 </td>
							<td class="has-text-centered"> No </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td>  
										<router-link class="button purple-color" :to="{ name: 'admin-permission' }" exact>
											Permission
										</router-link>
							</td>
						</tr>

						<tr>
							<th> <span class="purple-color"> 2 </span> </th>
							<td> Joseph Purple </td>
							<td> Purple@gmail.com </td>
							<td> 080XXXXXXX </td>
							<td> May 11, 2020 </td>
							<td class="has-text-centered"> No </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td>  
										<router-link class="button purple-color" :to="{ name: 'admin-permission' }" exact>
											Permission
										</router-link>
							</td>
						</tr>

						<tr>
							<th> <span class="purple-color"> 3 </span> </th>
							<td> Joseph Purple </td>
							<td> Purple@gmail.com </td>
							<td> 080XXXXXXX </td>
							<td> May 11, 2020 </td>
							<td class="has-text-centered"> No </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td>  
										<router-link class="button purple-color" :to="{ name: 'admin-permission' }" exact>
											Permission
										</router-link>
							</td>
						</tr>


						<tr>
							<th> <span class="purple-color"> 4 </span> </th>
							<td> Joseph Purple </td>
							<td> Purple@gmail.com </td>
							<td> 080XXXXXXX </td>
							<td> May 11, 2020 </td>
							<td class="has-text-centered"> No </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td>  
										<router-link class="button purple-color" :to="{ name: 'admin-permission' }" exact>
											Permission
										</router-link>
							</td>
						</tr>


						<tr>
							<th> <span class="purple-color"> 5 </span> </th>
							<td> Joseph Purple </td>
							<td> Purple@gmail.com </td>
							<td> 080XXXXXXX </td>
							<td> May 11, 2020 </td>
							<td class="has-text-centered"> No </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td>  
										<router-link class="button purple-color" :to="{ name: 'admin-permission' }" exact>
											Permission
										</router-link>
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

	</div> <!-- Container tag close -->

</template>



<script>
import { required, email, numeric, minLength } from 'vuelidate/lib/validators'

export default {


	data: () => ({

		admin: {
			email: null,
			phone: null,
			password: null,
			name: null,
		},

	}),



	validations: { //Validation calibrace open 

		admin: {

			name: {
				required
			},

			phone: {
				required,
			},

			email: {
				email,
				required
			},

			password: {
				required,
				minLength: minLength(6)
			},

		}, 

	}, //Validation calibrace close 


}

</script>
