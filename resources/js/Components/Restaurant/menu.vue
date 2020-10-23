
<template>
	
  <div class="container"> <!-- Container tag open -->

    <div class="box"> <!-- box tag open -->

      <div class="tabs is-toggle">
        <ul>

          <li class="" v-bind:class="{ 'active':menuList  }" @click="[menuList = true, blockedMenu = false, activeMenu = false]">
            <a>
              <span class="icon is-small" v-bind:class="{ 'has-text-white': menuList }"><i class="fas fa-cutlery" aria-hidden="true"></i></span>
              <span v-bind:class="{ 'has-text-white': menuList }"> All Menu </span>
            </a>
          </li>

          <li class="" v-bind:class="{ 'active':activeMenu  }" @click="[menuList = false, blockedMenu = false, activeMenu = true]">
            <a>
              <span class="icon is-small" v-bind:class="{ 'has-text-white': activeMenu }"><i class="fas fa-play" aria-hidden="true"></i></span>
              <span v-bind:class="{ 'has-text-white': activeMenu }"> Active Menu </span>
            </a>
          </li>

          <li v-bind:class="{ 'active': blockedMenu }" @click="[menuList = false, blockedMenu = true, activeMenu = false]">
            <a>
              <span class="icon is-small" v-bind:class="{ 'has-text-white': blockedMenu }"><i class="fas fa-ban" aria-hidden="true"></i></span>
              <span class=" " v-bind:class="{ 'has-text-white': blockedMenu }"> Blocked Menu </span>
            </a>
          </li>

        </ul>
      </div>



      <div v-if="menuList">
        <menu-list> </menu-list>
      </div>

      <div v-if="blockedMenu">
        <blocked-menu> </blocked-menu>
      </div>

      <div v-if="activeMenu">
        <active-menu> </active-menu>
      </div>


    </div>  <!-- box tag close -->

  </div> <!-- Container tag close -->



</template>


<script> 
import MenuList from "./Modules/menuList.vue"
import BlockedMenu from "./Modules/blockedMenu.vue"
import ActiveMenu from "./Modules/activeMenu.vue"

export default {

  components: {
    'menu-list': MenuList,
    'blocked-menu': BlockedMenu,
    'active-menu': ActiveMenu,
  },

  data: () => ({
    menuList: true,
    blockedMenu: false,
    activeMenu: false,
  }),




}

</script>
