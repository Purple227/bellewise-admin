
<template>

	<div class="container"> <!-- Container tag open -->

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Driver Profile</strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'driver-list' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>
		

		<div class="box">

			<div class="columns is-gapless"> <!-- Columns wrapper tag open -->


				<div class="column"> <!-- First column tag open-->

					<div class="center">
						<div class="content">
							<figure class="image is-128x128">
								<img class="is-rounded" src="/images/rejubi.jpg">
							</figure>

						</div>
					</div>

				</div> <!-- First column tag close -->



				<div class="column"> <!-- Second column tag open-->


					<div class="content">
						<p class="title is-bold"> Joseph Purple</p>
						<p class="subtitle "> Purple@gmail.com </p>
						<p class="subtitle "> 080XXXXXX</p>
					</div>

				</div> <!-- Second column tag close -->


			</div> <!-- Columns wrapper tag close -->

<div class="buttons is-centered">
  <button class="button"> ID:874387	 </button>
  <button class="button"> Student </button>
</div>



		</div>




	</div> <!-- Container tag close -->

</template>

<script>




</script>

