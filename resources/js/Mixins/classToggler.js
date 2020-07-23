
import { mixin as clickaway } from 'vue-clickaway';

export default {
 mixins: [ clickaway ],

 data() {

   return{
     isActive: false,
     dropDown: false,
     notification: false,
     sidebar: false,
   }
 },

 methods: {

  addActiveClass() {
    this.isActive = !this.isActive;
  },

  addDropDown() {
    this.dropDown = !this.dropDown;
  },


  away: function() {
    this.isActive = false;
      setTimeout(() => { // Timeout calibrace open 
        this.sidebar = false;
 }, 5000) // Timeout calibrace close

    },

  },

}