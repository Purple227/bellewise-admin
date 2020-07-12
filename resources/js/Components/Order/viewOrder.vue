
<template>

	<div>

		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Order Detail</strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'order-list' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>

		


		<div class="box"> <!-- Box container tag open -->

			<!-- Second section -->

			<div class="column is-half is-offset-one-quarter"> <!-- is half column tag open -->

				<div class="card">


					<nav class="level is-mobile">
						<div class="level-item has-text-centered">
							<div>
								<p class="is-bold"> Status </p>
								<p class="is-bold purple-color"> Placed </p>
							</div>
						</div>
						<div class="level-item has-text-centered">
							<div>
								<p class="is-bold"> Payment </p>
								<p class="is-bold purple-color"> ₦770.00 </p>
							</div>
						</div>
						<div class="level-item has-text-centered">
							<div>
								<p class="is-bold"> Items</p>
								<p class="is-bold purple-color">3</p>
							</div>
						</div>
					</nav>

					<hr>



					<div class="card-content">
						<div class="content">

							<p class="is-bold"> Estimated Delivery Time 40min</p>


							<div class="notification is-light"> <!-- Notifacatin tag open -->

								<div class="columns"> <!-- Columns wrapper tag open -->

									<div class="column"> <!-- First column tag open -->
										<div class="content">
											<strong> Order Items </strong>
										</div>
									</div> <!-- First column tag close -->


									<div class="column"> <!-- Second column tag open -->

										<div class="content"> <!-- Content tag open -->

											<div class="buttons has-addons ">
												<span class="button is-bold"> 4 </span>
												<span class="button"> <i class="fas fa-arrow-down purple-color"> </i> </span>
											</div>

										</div> <!-- Content tag close -->

									</div> <!-- Second column tag close -->


								</div> <!-- Columns wrapper tag close -->

							</div> <!-- Notifacatin tag close -->



							<ul class="steps" style="list-style: none;">
								<li class="steps-segment is-active">
									<span class="steps-marker is-info">
										<span class="icon ">
											<i class="fa fa-shopping-cart"></i>
										</span>
									</span>
									<div class="steps-content" >
										<p class="heading"> Placed </p>

									</div>
								</li>

								<li class="steps-segment">
									<span class="steps-marker">
										<span class="icon">
											<i class="fa fa-check "></i>
										</span>
									</span>
									<div class="steps-content">
										<p class="heading">Confirm</p>
									</div>
								</li>
								<li class="steps-segment">
									<span class="steps-marker">
										<span class="icon">
											<i class="fa fa-truck"></i>
										</span>
									</span>
									<div class="steps-content">
										<p class="heading">On The Way</p>
									</div>
								</li>
								<li class="steps-segment">
									<span class="steps-marker">
										<span class="icon">
											<i class="fa fa-people-carry"></i>
										</span>
									</span>
									<div class="steps-content">
										<p class="heading"> Delivered </p>
									</div>
								</li>

							</ul>



							<hr>
							<strong class="is-size-6"> Order Details </strong>
							<br>
							<strong class="is-size-6"> Order ID: #564328 </strong>


							<br>
							<br>

							<div class="">
								<p class="is-bold is-inline">Order</p> 
								<p class="is-bold is-inline is-pulled-right">₦250.00</p> 
							</div>
							<br>
							<div class="">
								<p class="is-bold is-inline">Delivery</p> 
								<p class="is-bold is-inline is-pulled-right">₦500.00</p> 
							</div>
							<br>
							<div class="">
								<p class="is-bold is-inline"> Summary</p> 
								<p class="is-bold is-inline is-pulled-right">N3250.00</p> 
							</div>

							<hr>

							<div class="">
								<p class="is-inline "> Payment Method</p> 
								<p class="is-inline is-pulled-right"> On Delivery</p> 
							</div>
							<br>
							<div class="">
								<p class=" is-inline"> Placed </p> 
								<p class=" is-inline is-pulled-right"> May 11 Mon, 07:44PM  </p> 
							</div>

						</div>
					</div>
<!--  				<footer class="card-footer">
 					<a href="/contact" class="card-footer-item is-bold has-text-black"> Contact Us </a>
 				</footer> -->
 			</div>

 		</div>

 	</div> <!-- is half column tag close-->


 </div>  <!-- Columns wrapper tag close -->



</div> <!-- Box container tag open -->



</div>


</template>

