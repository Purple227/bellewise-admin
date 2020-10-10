
<template>

  <nav class="navbar box" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <a role="button" class="navbar-burger burger" v-bind:class="{ 'is-active': isActive }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" v-on:click="addActiveClass">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
      <div class="navbar-start">

        <a class="navbar-item">
          <a class="button">
            <span class="icon is-small">
              <i class="fas fa-globe purple-color"></i>
            </span>
            <span>View Website</span>
          </a>
        </a>

        <div class="dropdown navbar-item" v-bind:class="{ 'is-active': dropDown }"  v-on:click="addDropDown">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span class="fas fa-bell  purple-color bell is-relative"> <!--span class="has-text-danger is-size-2 dot"--> . </span> </span>
              <span class="icon is-small">
                <i class="fas fa-angle-down purple-color" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">

            <div class="dropdown-content">

              <a class="dropdown-item">
                No Notification
              </a>

            </div>

          </div>
        </div>


      </div>

      <div class="navbar-end">

        <div class="dropdown is-left pointer mt-2" v-bind:class="{ 'is-active': notification }"  v-on:click="notification = !notification">
          <div class="dropdown-trigger">

            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" v-if="user.image.length <= 'default_image.svg'.length">
              <span class="fas fa-user purple-color"> {{ user.name.substring(0,6) }} </span>
              <span class="icon is-small">
                <i class="fas fa-angle-down purple-color" aria-hidden="true"></i>
              </span>
            </button>


            <figure class="image is-48x48" aria-haspopup="true" aria-controls="dropdown-menu" v-else>
              <img class="is-rounded" :src="imagePath">
            </figure>

          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">

              <router-link :to="{name: 'auth-edit', params: {id: user.id} }" class="dropdown-item" exact>
                Update profile
              </router-link>

              <router-link :to="{name: 'auth-security', params: {id: user.id} }" class="dropdown-item" exact>
                Update Password
              </router-link>

              <a class="dropdown-item" @click="Logout">
                Logout
              </a>

            </div>
          </div>
        </div>

      </div>
    </div>
  </nav>

</div> <!-- parent tag close -->


</template>

<script>
// Navbar.vue
import ClassToggler from '../../../Mixins/classToggler'
import { mapActions, mapGetters, mapState } from 'vuex';


export default {

  props: ['user'],

  mixins: [
  ClassToggler
  ],

  methods: {
    ...mapActions(['signOut']),
    // Local method goes here
    
    Logout() {
      this.signOut()
    },

  }, // Method calibrace close


  computed: {
    ...mapGetters(['']),
    // Local computed properties

    imagePath () {
      let LaravelImageDefaultPath = '/Storage/'
      let imageName = this.user.image
      let completedPath = LaravelImageDefaultPath + imageName 
      return completedPath
    }


  },

}

</script>