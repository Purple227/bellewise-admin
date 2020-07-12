
<template>

	<div class="container"> <!-- Container tag open -->

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p>
						<strong class="subtitle is-bold"> Admin Permission </strong> <br>
						<span> purple@gmail.com </span>
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'sub-admin-list' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>



		<div class="columns is-multiline"> <!-- Columns wrapper tag open -->


			<div class="column is-4"> <!-- First column tag open-->

				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Restaurants
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> List </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Create </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Update </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Block </span>
								</label>
							</div>




							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Delete </span>
								</label>
							</div>


						</div>
					</div>

				</div>

			</div> <!-- First column tag close -->



			<div class="column is-4"> <!-- Second column tag open-->



				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Drivers
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> List </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Create </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Update </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Block </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Delete </span>
								</label>
							</div>


						</div>
					</div>

				</div>

			</div> <!-- Second column tag close -->


			<div class="column is-4"> <!-- Column tag open-->


				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Orders
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> List </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Update </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Block </span>
								</label>
							</div>




							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Delete </span>
								</label>
							</div>


						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->




			<div class="column is-4"> <!-- Column tag open-->


				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Banners
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> List </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Update </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Delete </span>
								</label>
							</div>


						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->




			<div class="column is-4"> <!-- Column tag open-->

				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Promotion
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> List </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Update </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Delete </span>
								</label>
							</div>


						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->


			<div class="column is-4"> <!-- Column tag open-->

				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Users
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> List </span>
								</label>
							</div>

							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Block </span>
								</label>
							</div>


						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->





			<div class="column is-4"> <!-- Column tag open-->

				<div class="card">
					<header class="card-header">
						<p class="card-header-title purple-color">
							Sub Admins
						</p>

					</header>
					<div class="card-content">
						<div class="content">
							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> Select all </span>
								</label>
							</div>


							<div class="field">
								<label class="checkbox">
									<input type="checkbox">
									<span class="is-bold"> List </span>
								</label>
							</div>

						</div>
					</div>

				</div>

			</div> <!-- Column tag close -->






		</div> <!-- Columns wrapper tag close -->








	</div> <!-- Container tag close -->
	

</template>


<script>

export default {

	data: () => ({



	}),



}

</script>
