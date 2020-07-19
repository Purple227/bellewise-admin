
<template>




  <div class=""> <!-- Parent tag open -->

    <aside class="menu">

      <router-link :to="{ name: 'home' }"  class="menu-label is-size-3 is-bold orange is-italic mt-1" exact>
        Bellewise
        <br>
        <span class="is-pulled-right has-text-black fa"> Food </span>
      </router-link>

      <i class="fas fa-bars is-hidden-desktop" @click="sidebar = !sidebar"></i>

      <br>

      <hr class="mt-0">



      <ul class="menu-list" v-if="sidebar">

        <li> <router-link :to="{ name: 'home' }" exact> <i class="fas fa-chart-line purple-color"> <span class="ml-3 is-bold has-text-black"> Dashboard </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'list-restaurant' }" exact> <i class="fas fa-store-alt purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Restaurants </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'driver-list' }" exact> <i class="fas fa-truck purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Drivers </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'order-list' }" exact> <i class="fas fa-clipboard purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Orders </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'list-promotion' }" exact> <i class="fas fa-volume-up purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Promotions</span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'users-list' }" exact> <i class="fas fa-users purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Users </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'sub-admin-list' }" exact> <i class="fas fa-users-cog purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Sub Admins </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'report' }" exact> <i class="fas fa-bug purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Reports </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'account' }" exact> <i class="fas fa-calculator purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Accounting </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'setting' }" exact> <i class="fas fa-cogs purple-color mt-3 "> <span class="ml-3 is-bold has-text-black"> Settings </span> </i> </router-link> </li>

      </ul>


      <ul class="menu-list is-hidden-mobile">

        <li> <router-link :to="{ name: 'home' }" exact> <i class="fas fa-chart-line purple-color"> <span class="ml-3 is-bold has-text-black"> Dashboard </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'list-restaurant' }" exact> <i class="fas fa-store-alt purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Restaurants </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'driver-list' }" exact> <i class="fas fa-truck purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Drivers </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'order-list' }" exact> <i class="fas fa-clipboard purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Orders </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'list-promotion' }" exact> <i class="fas fa-volume-up purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Promotions</span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'users-list' }" exact> <i class="fas fa-users purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Users </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'sub-admin-list' }" exact> <i class="fas fa-users-cog purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Sub Admins </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'report' }" exact> <i class="fas fa-bug purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Reports </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'account' }" exact> <i class="fas fa-calculator purple-color mt-3"> <span class="ml-3 is-bold has-text-black"> Accounting </span> </i> </router-link> </li>

        <li> <router-link :to="{ name: 'setting' }" exact> <i class="fas fa-cogs purple-color mt-3 "> <span class="ml-3 is-bold has-text-black"> Settings </span> </i> </router-link> </li>

      </ul>

    </aside>




  </div> <!-- Parent tag close -->


</template>

</template>

<script>
// Navbar.vue
import ClassToggler from '../../../Mixins/classToggler'


export default {

  mixins: [
  ClassToggler
  ],


}

</script>