
export default {

 data() {

   return{
     isActive: false,
     dropDown: false,
     notification: false,
     sidebar: false,
     spin: false,
   }
 },

 methods: {

  addActiveClass() {
    this.isActive = !this.isActive;
  },

  addDropDown() {
    this.dropDown = !this.dropDown;
  },

},

}