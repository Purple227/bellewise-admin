
<template>
	

	<div class="container"> <!-- Container tag open -->


		<nav class="level">

			<div class="level-item has-text-centered">

				<div class="field has-addons">
					<div class="control">
						<input class="input" type="text" placeholder=" Search By Name">
					</div>
					<div class="control">
						<a class="button purple-color">
							Search
						</a>
					</div>
				</div>

			</div>


			<div class="level-item has-text-centered">

				<div class="field has-addons">
					<p class="control">
						<input id="my-element" type="date" data-display-mode="dialog"  data-close-on-select="false" data-color="info">
					</p>
					<p class="control">
						<a class="button purple-color ">
							By Date
						</a>
					</p>
				</div>

			</div>

			<div class="level-item has-text-centered">
				<div class="tabs is-toggle">
					<ul>

						<li>
							<router-link :to="{ name: 'add-promotion' }" exact>
								<span class="icon is-small"><i class="fas fa-plus purple-color" aria-hidden="true"></i></span>
								<span> Add Promo</span>
							</router-link>
						</li>

					</ul>
				</div>

			</div>

		</nav>



		<div class="columns is-multiline"> <!-- Columns wrapper tag open -->


			<div class="column is-6"> <!-- column tag open-->

				<div class="card is-relative">

					<router-link class="absolute-position-left" :to="{ name: 'edit-promotion' }" exact> <i class="fas fa-edit fa-lg has-text-danger"> </i> </router-link>
					<a class="absolute-position-right"> <i class="fas fa-trash fa-lg has-text-danger"> </i> </a>

					<div class="card-content purple-bg border-curve has-text-centered has-text-white">
						<p class="title has-text-white"> Deal 99 </p>
						<p class="subtitle is-bold has-text-white"> 20% OFF </p>
						<p class=""> Expiry Date - July 6, 2020 </p>
					</div>

					<div class="card-content">
						<div class="content">
							<ul>
								<li>
									Min. Order Amount is -  ₦3000.00
								</li>
								<li>
									Promo quantity is -  4
								</li>
							</ul>
							<div class="card-footer">
								<router-link class="card-footer-item purple-color" :to="{ name: 'view-promo-restaurants' }" exact> View Restaurants </router-link>
							</div>
						</div>
					</div>

				</div>

			</div> <!-- column tag close -->




			<div class="column is-6"> <!-- column tag open-->

				<div class="card">

					<router-link class="absolute-position-left" :to="{ name: 'edit-promotion' }" exact> <i class="fas fa-edit fa-lg has-text-danger"> </i> </router-link>
					<a class="absolute-position-right"> <i class="fas fa-trash fa-lg has-text-danger"> </i> </a>


					<div class="card-content purple-bg border-curve has-text-centered has-text-white">
						<p class="title has-text-white"> Deal 99 </p>
						<p class="subtitle is-bold has-text-white"> 20% OFF </p>
						<p class=""> Expiry Date - July 6, 2020 </p>
					</div>

					<div class="card-content">
						<div class="content">
							<ul>
								<li>
									Min. Order Amount is -  ₦3000.00
								</li>
								<li>
									Promo quantity is -  4
								</li>
							</ul>
							<div class="card-footer">
								<router-link class="card-footer-item purple-color" :to="{ name: 'view-promo-restaurants' }" exact> View Restaurants </router-link>
							</div>
						</div>
					</div>

				</div>

			</div> <!-- column tag close -->




			<div class="column is-6"> <!-- column tag open-->

				<div class="card">

					<router-link class="absolute-position-left" :to="{ name: 'edit-promotion' }" exact> <i class="fas fa-edit fa-lg has-text-danger"> </i> </router-link>
					<a class="absolute-position-right"> <i class="fas fa-trash fa-lg has-text-danger"> </i> </a>

					<div class="card-content purple-bg border-curve has-text-centered has-text-white">
						<p class="title has-text-white"> Deal 99 </p>
						<p class="subtitle is-bold has-text-white"> 20% OFF </p>
						<p class=""> Expiry Date - July 6, 2020 </p>
					</div>

					<div class="card-content">
						<div class="content">
							<ul>
								<li>
									Min. Order Amount is -  ₦3000.00
								</li>
								<li>
									Promo quantity is -  4
								</li>
							</ul>
							<div class="card-footer">
								<router-link class="card-footer-item purple-color" :to="{ name: 'view-promo-restaurants' }" exact> View Restaurants </router-link>
							</div>
						</div>
					</div>

				</div>

			</div> <!-- column tag close -->


			<div class="column is-6"> <!-- column tag open-->

				<div class="card">

					<router-link class="absolute-position-left" :to="{ name: 'edit-promotion' }" exact> <i class="fas fa-edit fa-lg has-text-danger"> </i> </router-link>
					<a class="absolute-position-right"> <i class="fas fa-trash fa-lg has-text-danger"> </i> </a>

					<div class="card-content purple-bg border-curve has-text-centered has-text-white">
						<p class="title has-text-white"> Deal 99 </p>
						<p class="subtitle is-bold has-text-white"> 20% OFF </p>
						<p class=""> Expiry Date - July 6, 2020 </p>
					</div>

					<div class="card-content">
						<div class="content">
							<ul>
								<li>
									Min. Order Amount is -  ₦3000.00
								</li>
								<li>
									Promo quantity is -  4
								</li>
							</ul>
							<div class="card-footer">
								<router-link class="card-footer-item purple-color" :to="{ name: 'view-promo-restaurants' }" exact> View Restaurants </router-link>
							</div>
						</div>
					</div>

				</div>

			</div> <!-- column tag close -->

		</div> <!-- Columns wrapper tag close -->


<!-- Pagination section -->
<div class="buttons has-addons is-centered">
  <a class="button">
    <span class="icon is-small">
      <i class="fas fa-arrow-left green"></i>
    </span>
    <span> Previous </span>
  </a>


  <a class="button">

    4 0f 6
  </a>


  <a class="button">
    <span class="icon is-small">
      <i class="fas fa-arrow-right green"></i>
    </span>
    <span> Next </span>
  </a>

</div>



	</div> <!-- Container tag close -->


</template>

<script>

import BulmaCalendar from "../../Mixins/bulmaCalendar.js";

export default {

	mixins: [
	BulmaCalendar
	],



}

</script>