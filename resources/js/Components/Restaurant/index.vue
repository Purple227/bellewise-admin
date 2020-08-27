
<template>
	
  <div class="container"> <!-- Container tag open -->

    <div class="box"> <!-- box tag open -->

      <div class="tabs is-toggle">
        <ul>

          <li class="" v-bind:class="{ 'active':restaurantList  }" @click="[restaurantList = true, blockRestaurant = false]">
            <a>
              <span class="icon is-small" v-bind:class="{ 'has-text-white': restaurantList }"><i class="fas fa-store-alt" aria-hidden="true"></i></span>
              <span v-bind:class="{ 'has-text-white': restaurantList }"> Restaurants </span>
            </a>
          </li>

          <li v-bind:class="{ 'active': blockRestaurant }" @click="[restaurantList = false, blockRestaurant = true]">
            <a>
              <span class="icon is-small" v-bind:class="{ 'has-text-white': blockRestaurant }"><i class="fas fa-ban" aria-hidden="true"></i></span>
              <span class=" " v-bind:class="{ 'has-text-white': blockRestaurant }"> Blocked Restaurant </span>
            </a>
          </li>

        </ul>
      </div>



      <div v-if="restaurantList">
        <restaurant-list> </restaurant-list>
      </div>

      <div v-if="blockRestaurant">
        <block-restaurant> </block-restaurant>
      </div>



    </div>  <!-- box tag close -->

  </div> <!-- Container tag close -->



</template>


<script> 
import RestaurantList from "./Modules/restaurantList.vue"
import BlockRestaurant from "./Modules/blockedRestaurant.vue"

export default {

  components: {
    'restaurant-list': RestaurantList,
    'block-restaurant': BlockRestaurant,
  },

  data: () => ({
    restaurantList: true,
    blockRestaurant: false,
  }),




}

</script>
