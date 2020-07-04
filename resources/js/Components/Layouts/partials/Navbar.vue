
<template>

  <nav class="navbar box" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
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
              <span class="fas fa-bell  purple-color bell is-relative"> <span class="has-text-danger is-size-2 dot"> . </span> </span>
              <span class="icon is-small">
                <i class="fas fa-angle-down purple-color" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                Dropdown item
              </a>
              <a class="dropdown-item">
                Other dropdown item
              </a>
              <a href="#" class="dropdown-item is-active">
                Active dropdown item
              </a>
              <a href="#" class="dropdown-item">
                Other dropdown item
              </a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item">
                With a divider
              </a>
            </div>
          </div>
        </div>


      </div>

      <div class="navbar-end">

        <div class="dropdown is-right pointer mt-2" v-bind:class="{ 'is-active': isActive }"  v-on:click="addActiveClass">
          <div class="dropdown-trigger">
            <figure class="image is-48x48" aria-haspopup="true" aria-controls="dropdown-menu">
              <img class="is-rounded" src="/images/rejubi.jpg">
            </figure>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                Dropdown item
              </a>
              <a class="dropdown-item">
                Other dropdown item
              </a>
              <a href="#" class="dropdown-item is-active">
                Active dropdown item
              </a>
              <a href="#" class="dropdown-item">
                Other dropdown item
              </a>
              <hr class="dropdown-divider">
              <a href="#" class="dropdown-item">
                With a divider
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


export default {

  mixins: [
  ClassToggler
  ],


}

</script>