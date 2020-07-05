
import bulmaCalendar from 'bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js';

export default {

  data() {

   return{
     date: false,
   }
 },

  mounted() {
    this.bulmaCalendar()
  },

 methods: {

  bulmaCalendar() {
// Initialize all input of date type.
const calendars = bulmaCalendar.attach('[type="date"]', '[color="info"]', );

// Loop on each calendar initialized
calendars.forEach(calendar => {
  // Add listener to date:selected event
  calendar.on('date:selected', date => {
    console.log(date);
  });
});

// To access to bulmaCalendar instance of an element
const element = document.querySelector('#my-element');
if (element) {
  // bulmaCalendar instance is available as element.bulmaCalendar
  element.bulmaCalendar.on('select', datepicker => {
    console.log(datepicker.data.value());
  });
}
},

},

}