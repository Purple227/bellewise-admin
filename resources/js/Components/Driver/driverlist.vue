

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
									<input class="input" type="text" placeholder=" Search Drivers">
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
									<a>
										<span class="icon is-small"><i class="fas fa-sync-alt purple-color" aria-hidden="true"></i></span>
										<span>  Refresh</span>
									</a>
								</li>
								<li>
									<router-link :to="{ name: 'add-driver' }" exact>
										<span class="icon is-small"><i class="fas fa-plus purple-color" aria-hidden="true"></i></span>
										<span> Add Driver</span>
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
							<th> <span class="purple-color"> Name </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Email </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Phone </span> </th>
							<th> <span class="purple-color"> Occupation </span> </th>
							<th> <span class="purple-color"> Status </span> </th>
							<th> <span class="purple-color"> Action </span> </th>
						</tr>
					</thead>

					<tbody>

						<tr>
							<th> <span class="purple-color"> 874387 </span> </th>
							<td> Joseph Purple </td>
							<td> Purple@gmail.com </td>
							<td> 080XXXXXXX </td>
							<td> Assasin </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td>  
								<div class="field is-grouped">
									<p class="control">
										<button class="button is-link">
											Save changes
										</button>
									</p>
									<p class="control">
										<button class="button">
											Cancel
										</button>
									</p>
									<p class="control">
										<button class="button is-danger">
											Delete post
										</button>
									</p>
								</div>
							</td>
						</tr>


						<tr>
							<th> <span class="purple-color"> 2 </span> </th>
							<td> <router-link :to="{ name: 'view-restaurant' }" exact> Crunchies </router-link> </td>
							<td> 8 Mary Slessor Ave, Bogoberi, Calabar </td>
							<td> 080XXXXXXX </td>
							<td> Bellewise@bellewise.com</td>
							<td class="has-text-centered"> 8 </td>
							<td> N54398.00 </td>
							<td class="has-text-centered"> <input type="checkbox" value="1"> </td>
							<td> <a class="fas fa-eye has-text-centered purple-color"> View </a>  </td>
						</tr>


						<tr>
							<th> <span class="purple-color"> 3 </span> </th>
							<td> <router-link :to="{ name: 'view-restaurant' }" exact> Crunchies </router-link> </td>
							<td> 8 Mary Slessor Ave, Bogoberi, Calabar </td>
							<td> 080XXXXXXX </td>
							<td> Bellewise@bellewise.com</td>
							<td class="has-text-centered"> 8 </td>
							<td> N54398.00 </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td> <a class="fas fa-eye has-text-centered purple-color"> View </a>  </td>
						</tr>

						<tr>
							<th> <span class="purple-color"> 4 </span> </th>
							<td> <router-link :to="{ name: 'view-restaurant' }" exact> Crunchies </router-link> </td>
							<td> 8 Mary Slessor Ave, Bogoberi, Calabar </td>
							<td> 080XXXXXXX </td>
							<td> Bellewise@bellewise.com</td>
							<td class="has-text-centered"> 8 </td>
							<td> N54398.00 </td>
							<td class="has-text-centered"> <input type="checkbox"> </td>
							<td> <a class="fas fa-eye has-text-centered purple-color"> View </a>  </td>
						</tr>



					</tbody>

				</table> <!-- Table tag close -->














			</div> <!-- Card content tag open -->


		</div> <!-- Card tag close -->

	</div> <!-- Container tag close -->

</template>


<script>

export default {

	data: () => ({



	}),



}

</script>
