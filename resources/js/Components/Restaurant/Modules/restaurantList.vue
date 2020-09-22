
<template>

<div> <!-- Root element tag open -->

    <div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadRestaurantLoader }"><span class="title"> Bellewise loading </span></div>


    <div class="card"> <!-- Card tag open -->

     <div class="card-content table-container"> <!-- Card content tag open -->

        <div class="notification purple-bg-light is-bold has-text-black" v-if="loadRestaurantNotification">
          Task Succeesful
        </div>

      <!-- Main container -->
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">

          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" placeholder=" Search restaurant by name" v-model="searchQuery" v-on:keyup="searchMethod">
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

              <li v-on:click="refresh">
                <a>
                  <span class="icon is-small"><i class="fas fa-sync-alt purple-color" v-bind:class="{ 'fa-spin': spin }"  aria-hidden="true"></i></span>
                  <span>  Refresh</span>
                </a>
              </li>
              <li>
                <router-link :to="{ name: 'add-restaurant' }" exact>
                  <span class="icon is-small"><i class="fas fa-plus purple-color" aria-hidden="true"></i></span>
                  <span> Add Restaurant</span>
                </router-link>
              </li>
            </ul>
          </div>      

        </div>
      </nav>

      <table class="table is-bordered is-striped is-hoverable" v-if="loadRestaurants.length >= 1"> <!-- Table tag open -->

        <thead>
          <tr>
            <th> <span class="purple-color"> ID </span> </th>
            <th> <span class="purple-color"> Restaurant Name </span> </th>
            <th class="has-text-centered"> <span class="purple-color"> Address </span> </th>
            <th class="has-text-centered"> <span class="purple-color"> Phone </span> </th>
            <th class="has-text-centered"> <span class="purple-color"> Email </span> </th>
            <th> <span class="purple-color"> Delivery Commission </span> </th>
            <th> <span class="purple-color"> Revenue </span> </th>
            <th> <span class="purple-color"> Status </span> </th>
            <th> <span class="purple-color"> Action </span> </th>
          </tr>
        </thead>

        <tbody>

            <tr v-for="(restaurant, index) in searchQuery.length  > 1  ? loadRestaurantSearch : loadRestaurants " :key="index">

            <th> <span class="purple-color"> {{ index+1 }} </span> </th>
            <td>  {{ restaurant.name.substring(0,6) }}  </td>
            <td> {{ restaurant.address.substring(0,8) }} </td>
            <td> {{ restaurant.phone}} </td>
            <td> {{ restaurant.email.substring(0,10) }} </td>
            <td class="has-text-centered"> {{ restaurant.commmission }} </td>
            <td> ₦{{restaurant.revenue}} </td>
            <td class="has-text-centered"> <input type="checkbox" @change="[restaurant.status = !restaurant.status, statusMethod(restaurant.id, restaurant.status)]" :checked="restaurant.status == 1 ? true : false"> 
            </td>
              <td>  
                <div class="field is-grouped">
                  <p class="control">
                    <router-link :to="{name: 'restaurant-menu', params: {id: restaurant.id}}" class="button purple-color" exact>
                      Menu
                    </router-link>
                  </p>
                  <p class="control">
                    <router-link :to="{name: 'restaurant-setting', params: {id: restaurant.id}}" class="button purple-color" exact>
                      Settings
                    </router-link>
                  </p>
                  <p class="control">
                    <router-link :to="{name: 'view-restaurant', params: {id: restaurant.id}}" class="button purple-color" exact>
                      View
                    </router-link>
                  </p>
                  <p class="control">
                    <router-link :to="{name: 'edit-restaurant', params: {id: restaurant.id} }" class="button purple-color" exact>
                      Edit
                    </router-link>
                  </p>
                  <p class="control" @click="showModal = true">
                    <button class="button purple-color">
                      Delete 
                    </button>

                    <!-- Delete modal option -->
                    <div class="modal is-active" v-if="showModal">
                      <div class="modal-background"></div>
                      <div class="modal-content">
                        <!-- Any other Bulma elements you want -->
                        <div class="card">
                          <div class="card-content has-text-centered">
                            <p class="subtitle is-bold">
                              Are you sure
                            </p>
                          </div>
                          <footer class="card-footer">
                            <p class="card-footer-item is-bold purple-color pointer" v-on:click="deleteData(restaurant.id)">
                              Delete
                            </p>
                            <p class="card-footer-item is-bold purple-color pointer" @click="showModal = false">
                              Cancel
                            </p>
                          </footer>
                        </div>              
                      </div>
                      <button class="modal-close is-large" aria-label="close" @click="showModal = false"></button>
                    </div>
                  </p>
                </div>
              </td>

          </tr>


        </tbody>

      </table> <!-- Table tag close -->

        <!-- Pagination section -->
        <div class="buttons has-addons is-centered" v-if="loadRestaurants.length >= 1">
          <a class="button" v-if="loadRestaurantPagination.previousPageUrl" @click="paginationHandler(loadRestaurantPagination.previousPageUrl)">
            <span class="icon is-small">
              <i class="fas fa-arrow-left purple-color"></i>
            </span>
            <span> Previous </span>
          </a>


          <a class="button">

            {{ loadRestaurantPagination.to}} 0f {{loadRestaurantPagination.total}}
          </a>


          <a class="button" v-if="loadRestaurantPagination.nextPageUrl" @click="paginationHandler(loadRestaurantPagination.nextPageUrl)">
            <span class="icon is-small">
              <i class="fas fa-arrow-right purple-color"></i>
            </span>
            <span> Next </span>
          </a>
        </div>

    </div> <!-- Card content tag open -->


  </div> <!-- Card tag close -->


<div class="card" v-if="loadRestaurants.length <= 0">
  <div class="card-content">
    <div class="content is-bold has-text-centered subtitle">

  <span class="fa"> No restaurant found. Add a restaurant instead. </span>

    </div>
  </div>
</div>


</div> <!-- Root element tag close -->

</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

  data: () => ({
    spin: false,
    showModal: false,
    searchQuery: '',
  }),

  created() {
    this.fetchRestaurantDatas()
    this.clearRestaurantNotification()
  },

  methods: {
    ...mapActions(['fetchRestaurantDatas', 'clearRestaurantNotification', 'destroyRestaurantData', 'searchRestaurantDatas', 'updateRestaurantStatus']),
    // Local method
    refresh() {
      this.spin = true
      this.fetchRestaurantDatas().then(() => this.spin = false)
      this.searchQuery = ""
      this.searchRestaurantDatas(this.searchQuery)
    },

    deleteData(id) {
      this.destroyRestaurantData(id)
      this.fetchRestaurantDatas()
      this.showModal = false
    },

    paginationHandler(uri) {
      this.fetchRestaurantDatas(uri)
    },

    searchMethod() {
      if(this.searchQuery.length > 1) {
        this.searchRestaurantDatas(this.searchQuery)
      }
    },

    statusMethod(id,status) {
      this.updateRestaurantStatus({id, status})
    },

  },


  computed: {
    ...mapGetters(['loadRestaurants', 'loadRestaurantLoader', 'loadRestaurantNotification', 'loadRestaurantPagination', 'loadRestaurantSearch']),

    // Local computed properties
},


}

</script>
