
<template>
	
<div class="container main-container"> <!-- Container tag open -->


<div class="columns"> <!-- Columns wrapper tag open -->


<div class="column is-3 box mt-3"> <!-- First column tag open -->
<sidebar> </sidebar>
</div> <!-- First column tag close -->


<div class="column is-9"> <!-- Second column tag open -->
<navbar> </navbar>

  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>

</div> <!-- Second column tag close -->

</div> <!-- Columns wrapper tag close -->


</div> <!-- Container tag close -->

</template>

<script>

import Navbar from './partials/Navbar.vue';
import Sidebar from './partials/Sidebar.vue';

export default {

	components: {
		'navbar': Navbar,
		'sidebar': Sidebar,
	}

}

</script>











