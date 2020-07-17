
<template>

	<div>

		<!-- Main container -->
		<nav class="level">

			<div class="level-item">
				<div class="field">
					<label class="label"> Search </label>
					<div class="control">
						<input class="input" type="text" placeholder=" Search Order">  </div>
					</div>
				</div>



				<div class="level-item">
					<div class="field">
						<label class="label"> Sort By Date </label>
						<div class="control">
							<input id="my-element" type="date" data-display-mode="dialog"  data-close-on-select="false" data-color="info">
						</div>
					</div>
				</div>


				<div class="level-item">
					<div class="field ">
						<label class="label"> Payment Method </label>
						<div class="control">
							<div class="select">
								<select>
									<option> All </option>
									<option> Online </option>
									<option> Cash On Delivery</option>
								</select>
							</div>
						</div>
					</div>
				</div>

			</nav>



			<div class="columns is-multiline"> <!-- Columns wrapper tag open -->


				<div class="column is-6"> <!-- column tag open-->


					<article class="message">
						<div class="message-body">

							<p class="is-bold purple-color">
								Order ID: 876547 
							</p>

							<!-- Main container -->
							<nav class="level">
								<!-- Left side -->
								<div class="level-left">
									<div class="level-item">
										<p class="">
											<strong>Pizza</strong> x 4 more
										</p>
									</div>
								</div>

								<!-- Right side -->
								<div class="level-right">
									<p class="level-item"><strong>Payment - Cash</strong></p>
								</div>
							</nav>

							<p class="is-bold"> By dash restaurant
								<br>
								Price-₦770.00
								<br> 
							Contact Customer - 080XXXXXXXX </p>

							<time datetime="2016-1-1">11:09 PM - 1 Jan 2020</time>


							<div class="field is-grouped is-grouped-centered">
								<p class="control">
									<router-link :to="{ name: 'view-order' }" class="button is-info" exact>
										View Detail
									</router-link>
								</p>
							</div>			

						</div>
					</article>

				</div> <!-- column tag close -->



				<div class="column is-6"> <!-- column tag open-->


					<article class="message">
						<div class="message-body">

							<p class="is-bold purple-color">
								Order ID: 876547 
							</p>

							<!-- Main container -->
							<nav class="level">
								<!-- Left side -->
								<div class="level-left">
									<div class="level-item">
										<p class="">
											<strong>Pizza</strong> x 4 more
										</p>
									</div>
								</div>

								<!-- Right side -->
								<div class="level-right">
									<p class="level-item"><strong>Payment - Cash</strong></p>
								</div>
							</nav>

							<p class="is-bold"> By dash restaurant
								<br>
								Price-₦770.00
								<br> 
							Contact Customer - 080XXXXXXXX </p>

							<time datetime="2016-1-1">11:09 PM - 1 Jan 2020</time>


							<div class="field is-grouped is-grouped-centered">
								<p class="control">
									<router-link :to="{ name: 'view-order' }" class="button is-info" exact>
										View Detail
									</router-link>
								</p>
							</div>			

						</div>
					</article>

				</div> <!-- column tag close -->


				<div class="column is-6"> <!-- column tag open-->


					<article class="message">
						<div class="message-body">

							<p class="is-bold purple-color">
								Order ID: 876547 
							</p>

							<!-- Main container -->
							<nav class="level">
								<!-- Left side -->
								<div class="level-left">
									<div class="level-item">
										<p class="">
											<strong>Pizza</strong> x 4 more
										</p>
									</div>
								</div>

								<!-- Right side -->
								<div class="level-right">
									<p class="level-item"><strong>Payment - Cash</strong></p>
								</div>
							</nav>

							<p class="is-bold"> By dash restaurant
								<br>
								Price-₦770.00
								<br> 
							Contact Customer - 080XXXXXXXX </p>

							<time datetime="2016-1-1">11:09 PM - 1 Jan 2020</time>


							<div class="field is-grouped is-grouped-centered">
								<p class="control">
									<router-link :to="{ name: 'view-order' }" class="button is-info" exact>
										View Detail
									</router-link>
								</p>
							</div>			

						</div>
					</article>

				</div> <!-- column tag close -->



				<div class="column is-6"> <!-- column tag open-->


					<article class="message">
						<div class="message-body">

							<p class="is-bold purple-color">
								Order ID: 876547 
							</p>

							<!-- Main container -->
							<nav class="level">
								<!-- Left side -->
								<div class="level-left">
									<div class="level-item">
										<p class="">
											<strong>Pizza</strong> x 4 more
										</p>
									</div>
								</div>

								<!-- Right side -->
								<div class="level-right">
									<p class="level-item"><strong>Payment - Cash</strong></p>
								</div>
							</nav>

							<p class="is-bold"> By dash restaurant
								<br>
								Price-₦770.00
								<br> 
							Contact Customer - 080XXXXXXXX </p>

							<time datetime="2016-1-1">11:09 PM - 1 Jan 2020</time>


							<div class="field is-grouped is-grouped-centered">
								<p class="control">
									<router-link :to="{ name: 'view-order' }" class="button is-info" exact>
										View Detail
									</router-link>
								</p>
							</div>			

						</div>
					</article>

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


		</div>


	</template>

	<script>
	import BulmaCalendar from "../../../Mixins/bulmaCalendar.js";


	export default {

		mixins: [
		BulmaCalendar
		],


		data: () => ({


		}),



	}

	</script>
