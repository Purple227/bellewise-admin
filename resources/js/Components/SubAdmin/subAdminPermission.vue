
<template>
	
  <div class="container"> <!-- Container tag open -->

      <div v-if="Object.keys(loadRole).length == 0">
        <add-permission> </add-permission>
      </div>

      <div v-else>
        <edit-permission> </edit-permission>
      </div>


  </div> <!-- Container tag close -->



</template>


<script> 
import AddPermission from "./Modules/addPermission.vue"
import EditPermission from "./Modules/editPermission.vue"
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

  components: {
    'add-permission': AddPermission,
    'edit-permission': EditPermission,
  },

  data: () => ({
/*    addPermission: true,
    editPermission: false,*/
  }),

  created() {
    this.setId()
  },

  methods: {
    ...mapActions(['fetchRole']),

      setId() {
        let id = this.$route.params.id
        this.fetchRole(id)
      },


    }, // Method calibrace close

    computed: {
      ...mapGetters(['loadRole']),
    // Local computed properties

},


}

</script>
