
<template>

	<div>

    <div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadSettingLoader }"><span class="title"> Loading Bellewise</span></div>

    <div class="box"> <!-- Box tag open -->

      <div class="notification purple-bg-light is-bold has-text-black" v-if="loadSettingErrors">
        <ul>
          <li v-for="(value, name, index) in loadSettingErrors">
            {{ index+1 }}. {{ value[0] }}
          </li>
        </ul>
      </div>


      <div class="notification purple-bg-light is-bold has-text-black" v-if="loadWriteUpNotification">
        Task Succeesful
      </div>


      <div class="columns"> <!-- Columns wrapper tag open -->


        <div class="column"> <!-- column tag open-->

          <div class="field" v-if="Object.keys(loadWriteUp).length == 0">
            <label class="label">Landing Page Write-up</label>
            <div class="control">
             <textarea class="textarea" placeholder="Textarea" v-model="writeUp"> </textarea>
             <p class="help is-danger" v-if="$v.writeUp.$invalid"> Not morethan 250 characters</p>
             <p class="help purple-color" v-else> You good to go. </p>
           </div>
         </div>


         <div class="field" v-else>
          <label class="label">Update Landing Page Write-up</label>
          <div class="control">
           <textarea class="textarea" placeholder="Textarea" v-model="loadWriteUp.write_up"> </textarea>
           <p class="help is-danger" v-if="$v.loadWriteUp.$invalid"> Not morethan 250 characters</p>
           <p class="help purple-color" v-else> You good to go. </p>
         </div>
       </div>


       <div class="field" v-if="Object.keys(loadWriteUp).length == 0">
        <p class="control">
         <button class="button" v-bind:class="{ 'is-loading': loadSettingProgress }" :disabled="$v.writeUp.$invalid" @click="submitFormOne">
          <span class="icon is-small">
           <i class="fas fa-save purple-color"></i>
         </span>
         <span class="is-bold"> Save </span>
       </button>
     </p>
   </div>

   <div class="field" v-else>
    <p class="control">
     <button class="button" v-bind:class="{ 'is-loading': loadSettingProgress }" :disabled="$v.loadWriteUp.$invalid" @click="submitFormOneUpdate">
      <span class="icon is-small">
       <i class="fas fa-save purple-color"></i>
     </span>
     <span class="is-bold"> Update </span>
   </button>
 </p>
</div>

</div> <!-- column tag close -->



<div class="column"> <!-- column tag open-->

  <label class="label "> Delivery Charges </label>

  <div class="field has-addons" v-if="Object.keys(loadDeliveryCharge).length == 0">
    <p class="control">
      <span class="select">
        <select>
          <option>₦</option>
        </select>
      </span>
    </p>
    <p class="control is-expanded has-icons-left">
      <input class="input is-info" type="number" min="0" oninput="validity.valid||(value='');" placeholder="Amount of money" v-model="delivery.charges">
      <!-- Has icon right -->
      <span class="icon is-small is-left">
        <i class="fas fa-cash purple-color"></i>
      </span>
    </p>
  </div>

  <div class="field has-addons" v-else>
    <p class="control">
      <span class="select">
        <select>
          <option>₦</option>
        </select>
      </span>
    </p>
    <p class="control is-expanded has-icons-left">
      <input class="input is-info" type="number" min="0" oninput="validity.valid||(value='');" placeholder="Amount of money" v-model=" loadDeliveryCharge.delivery_charge">
      <!-- Has icon right -->
      <span class="icon is-small is-left">
        <i class="fas fa-cash purple-color"></i>
      </span>
    </p>
  </div>


   <div class="field" v-if="Object.keys(loadDeliveryCharge).length == 0">
    <p class="control">
     <button class="button" v-bind:class="{ 'is-loading': loadSettingProgress }" :disabled="$v.delivery.$invalid" @click="submitFormThree">
      <span class="icon is-small">
       <i class="fas fa-save purple-color"></i>
     </span>
     <span class="is-bold"> Save </span>
   </button>
 </p>
</div>

<div class="field" v-else>
  <p class="control">
   <button class="button" v-bind:class="{ 'is-loading': loadSettingProgress }" :disabled="$v.loadDeliveryCharge.$invalid" @click="submitFormThreeUpdate">
    <span class="icon is-small">
     <i class="fas fa-save purple-color"></i>
   </span>
   <span class="is-bold"> Update </span>
 </button>
</p>
</div>

</div> <!-- column tag close -->



</div> <!-- Columns wrapper tag close -->

</div>	<!-- Box tag close -->



<div class="box"> <!-- Box tag open -->


  <div class="notification purple-bg-light is-bold has-text-black" v-if="loadCancellationPolicyNotification">
    Task Succeesful
  </div>


  <p class="subtitle is-5">
    <strong> Cancellation Policy </strong> 
  </p>

  <div class="columns"> <!-- Columns wrapper tag open -->

   <div class="column"> <!-- First column tag open-->


    <label class="label"> Max. Cancellation Waiting Time  </label>
    <div class="field has-addons">
      <p class="control is-expanded ">
        <input id="my-element" type="date" data-display-mode="dialog"  data-color="info" data-type="time" data-time-format="HH:MM" required>
      </p>
      <p class="control">
        <a class="button is-bold">
          Currently : {{ loadCancellationPolicy.max_canellation_time == 'null' ? "00:00" : loadCancellationPolicy.max_canellation_time }}
        </a>
      </p>
    </div>


  </div> <!-- First column tag close -->



  <div class="column"> <!-- Second column tag open-->

    <label class="label "> Partial Refund Deduction Charges </label>
    <div class="field has-addons" v-if="Object.keys(loadCancellationPolicy).length == 0">
      <p class="control">
        <span class="select">
          <select>
            <option>₦</option>
          </select>
        </span>
      </p>
      <p class="control is-expanded has-icons-right">
        <input class="input is-info" type="number" min="0" oninput="validity.valid||(value='');" placeholder="Amount of money" v-model="cancellationPolicy.partialRefundDeductionCharge">
        <!-- Has icon right -->
        <span class="icon is-small is-right" v-if="$v.cancellationPolicy.partialRefundDeductionCharge.required">
          <i class="fas fa-check purple-color"></i>
        </span>
        <span class="icon is-small is-right" v-else>
          <i class="fas fa-exclamation-triangle has-text-danger"></i>
        </span>
      </p>
    </div>

    <div class="field has-addons" v-else>
      <p class="control">
        <span class="select">
          <select>
            <option>₦</option>
          </select>
        </span>
      </p>
      <p class="control is-expanded has-icons-right">
        <input class="input is-info" type="number" min="0" oninput="validity.valid||(value='');" placeholder="Amount of money" v-model="loadCancellationPolicy.partial_deduction_charge">
        <!-- Has icon right -->
        <span class="icon is-small is-right" v-if="$v.loadCancellationPolicy.partial_deduction_charge.required">
          <i class="fas fa-check purple-color"></i>
        </span>
        <span class="icon is-small is-right" v-else>
          <i class="fas fa-exclamation-triangle has-text-danger"></i>
        </span>
      </p>
    </div>

  </div> <!-- Second column tag close -->

</div> <!-- Columns wrapper tag close -->


<div class="content is-bold"> <!-- Content tag open -->

  <span class="mr-6 ml-5 mb-3 purple-color"> Status </span> <span class="ml-6 mb-3 purple-color"> Refund Type </span>

  <div class="field is-horizontal">
    <div class="field-label is-normal ">
      <label class="label"> Pending </label>
    </div>
    <div class="field-body">
      <div class="field is-narrow">
        <div class="control">
          <div class="select is-fullwidth">

            <select v-model="pending.selected" v-if="loadCancellationPolicy.pending == null">
              <option disabled value=""> Please select one </option>
              <option> Full Refund </option>
              <option> Partial Refund </option>
              <option> No Refund </option>
            </select>

            <select v-model="loadCancellationPolicy.pending" v-else>
              <option disabled value=""> {{ loadCancellationPolicy.pending }} </option>
              <option> Full Refund </option>
              <option> Partial Refund </option>
              <option> No Refund </option>
            </select>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal ">
      <label class="label"> Confirmed </label>
    </div>
    <div class="field-body">
      <div class="field is-narrow">
        <div class="control">
          <div class="select is-fullwidth">

            <select v-model="confirmed.selected" v-if="loadCancellationPolicy.confirmed == null ">
              <option disabled value=""> Please select one </option>
              <option> Full Refund </option>
              <option> Partial Refund </option>
              <option> No Refund </option>
            </select>

            <select v-model="loadCancellationPolicy.confirmed" v-else>
              <option disabled value=""> {{ loadCancellationPolicy.confirmed }} </option>
              <option> Full Refund </option>
              <option> Partial Refund </option>
              <option> No Refund </option>
            </select>


          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="field is-horizontal">
    <div class="field-label is-normal ">
      <label class="label"> On The Way </label>
    </div>
    <div class="field-body">
      <div class="field is-narrow">
        <div class="control">
          <div class="select is-fullwidth">

            <select v-model="onTheWay.selected" v-if="loadCancellationPolicy.on_the_way == null ">
              <option disabled value=""> Please select one </option>
              <option> Full Refund </option>
              <option> Partial Refund </option>
              <option> No Refund </option>
            </select>

            <select v-model="loadCancellationPolicy.on_the_way" v-else>
              <option disabled value=""> {{ loadCancellationPolicy.on_the_way }} </option>
              <option> Full Refund </option>
              <option> Partial Refund </option>
              <option> No Refund </option>
            </select>

          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="field is-horizontal">
    <div class="field-label is-normal ">
      <label class="label"> Delivered </label>
    </div>
    <div class="field-body">
      <div class="field is-narrow">
        <div class="control">
          <div class="select is-fullwidth">


            <select v-model="delivered.selected" v-if="loadCancellationPolicy.delivered == null ">
              <option disabled value=""> Please select one </option>
              <option> Full Refund </option>
              <option> Partial Refund </option>
              <option> No Refund </option>
            </select>

            <select v-model="loadCancellationPolicy.delivered" v-else>
              <option disabled value=""> {{ loadCancellationPolicy.delivered }} </option>
              <option> Full Refund </option>
              <option> Partial Refund </option>
              <option> No Refund </option>
            </select>


          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="field is-horizontal">
    <div class="field-label is-normal ">
      <label class="label"> Ready To Be Picked </label>
    </div>
    <div class="field-body">
      <div class="field is-narrow">
        <div class="control">
          <div class="select is-fullwidth">


            <select v-model="readyToBePicked.selected" v-if="loadCancellationPolicy.ready_to_be_picked == null ">
              <option disabled value=""> Please select one </option>
              <option> Full Refund </option>
              <option> Partial Refund </option>
              <option> No Refund </option>
            </select>

            <select v-model="loadCancellationPolicy.ready_to_be_picked" v-else>
              <option disabled value=""> {{ loadCancellationPolicy.ready_to_be_picked }} </option>
              <option> Full Refund </option>
              <option> Partial Refund </option>
              <option> No Refund </option>
            </select>


          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="field is-horizontal">
    <div class="field-label is-normal ">
      <label class="label"> In Kitchen </label>
    </div>
    <div class="field-body">
      <div class="field is-narrow">
        <div class="control">
          <div class="select  has-addons-fullwidth">


            <select v-model="inKitchen.selected" v-if="loadCancellationPolicy.in_kitchen == null ">
              <option disabled value=""> Please select one </option>
              <option> Full Refund </option>
              <option> Partial Refund </option>
              <option> No Refund </option>
            </select>

            <select v-model="loadCancellationPolicy.in_kitchen" v-else>
              <option disabled value=""> {{ loadCancellationPolicy.in_kitchen }} </option>
              <option> Full Refund </option>
              <option> Partial Refund </option>
              <option> No Refund </option>
            </select>


          </div>
        </div>
      </div>
    </div>
  </div>

</div> <!-- Content tag open -->


<div class="field" v-if="Object.keys(loadCancellationPolicy).length == 0">
  <p class="control">
   <button class="button" v-bind:class="{ 'is-loading': loadSettingProgress }" @click="submitFormTwo" :disabled="$v.cancellationPolicy.$invalid">
    <span class="icon is-small">
     <i class="fas fa-save purple-color"></i>
   </span>
   <span class="is-bold"> Save </span>
 </button>
</p>
</div>


<div class="field" v-else>
  <p class="control">
   <button class="button" v-bind:class="{ 'is-loading': loadSettingProgress }" @click="submitFormTwoUpdate" :disabled="$v.loadCancellationPolicy.$invalid">
    <span class="icon is-small">
     <i class="fas fa-save purple-color"></i>
   </span>
   <span class="is-bold"> Update </span>
 </button>
</p>
</div>



</div> <!-- column tag close -->


</div> <!-- Columns wrapper tag close -->


</div> <!-- Box tag close -->



</div>


</template>


<script>
import { required, maxLength} from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex';
import bulmaCalendar from 'bulma-extensions/bulma-calendar/dist/js/bulma-calendar.min.js';

export default {

	data: () => ({

   writeUp : null,

   cancellationPolicy: {
     maxCancellationTime: null,
     partialRefundDeductionCharge: null,
   },

   pending : {
    selected: '',
  },

  confirmed : {
    selected: '',
  },

  onTheWay : {
    selected: '',
  },

  delivered : {
    selected: '',
  },


  readyToBePicked : {
    selected: '',
  },

  inKitchen : {
    selected: '',
  },

  delivery: {
    charges: null,
  }

}),

  validations: {

    writeUp: {
      required,
      maxLength: maxLength(225)
    },

    delivery: {
      charges: {
        required
      }
    },

    loadDeliveryCharge: {
      delivery_charge: {
        required
      }
    },

    cancellationPolicy: {
      maxCancellationTime: {
        required,
      },
      partialRefundDeductionCharge: {
        required
      }
    },

    loadWriteUp: {
      write_up: {
        required,
        maxLength: maxLength(225)
      }
    },

    loadCancellationPolicy: {
      max_canellation_time: { 
        required,
      },
      partial_deduction_charge: { 
        required,
      }
    },

  },

  mounted() {
    this.setWriteUpId()
    this.setcancellationPolicy()
    this.setDeliveryCharge()
   //Object.keys(this.$store.getters.loadWriteUp == 0) ? console.log('yes') : console.log('no')
   //Object.keys(this.$store.getters.loadCancellationPolicy == 0) ? this.fetchCancellationPolicy() : ''
   this.bulmaCalendar()
   this.clearWriteUpNotification()
   this.clearCancellatonPolicyNotification()
 },

 methods: {
  ...mapActions(["createWriteUp", "clearSettingErrors", "fetchWriteUp", "editWriteUp", "createCancellationPolicy", "fetchCancellationPolicy", "editCancellationPolicy", "clearWriteUpNotification", "clearCancellatonPolicyNotification", "fetchDeliveryCharge", "createDeliveryCharge", "editDeliveryCharge"]),

    // Local method goes here

    setWriteUpId() {
      let id = 1
      this.fetchWriteUp(id)
    },


    setDeliveryCharge() {
      let id = 1
      this.fetchDeliveryCharge(id)
    },


    setcancellationPolicy() {
      let id = 1
      this.fetchCancellationPolicy(id)
    },

    submitFormOne() {
      let data = new FormData();
      data.append("_method", "post");
      data.append('write_up', this.writeUp);
      this.createWriteUp(data).then(() => this.setWriteUpId() )
    },

    submitFormTwo() {
      let data = new FormData();
      data.append("_method", "post");
      data.append('max_canellation_time', this.cancellationPolicy.maxCancellationTime);
      data.append('partial_deduction_charge', this.cancellationPolicy.partialRefundDeductionCharge);
      data.append('pending', this.pending.selected);
      data.append('confirmed', this.confirmed.selected);
      data.append('on_the_way', this.onTheWay.selected);
      data.append('delivered', this.delivered.selected);
      data.append('ready_to_be_picked', this.readyToBePicked.selected);
      data.append('in_kitchen', this.inKitchen.selected);
      this.createCancellationPolicy(data).then(() => this.setcancellationPolicy() )
    },

    submitFormThree() {
      let data = new FormData();
      data.append("_method", "post");
      data.append('delivery_charges', this.delivery.charges);
      this.createDeliveryCharge(data).then(() => this.setDeliveryCharge() )
    },


    submitFormOneUpdate() {
      let data = new FormData();
      data.append("_method", "patch");
      data.append('write_up', this.$store.getters.loadWriteUp.write_up );
      let id = this.$store.getters.loadWriteUp.id
      this.editWriteUp({data, id}).then(() => this.setWriteUpId() )
    },

    submitFormTwoUpdate() {
      let data = new FormData();
      data.append("_method", "patch");
      data.append('max_canellation_time', this.$store.getters.loadCancellationPolicy.max_canellation_time);
      data.append('partial_deduction_charge', this.$store.getters.loadCancellationPolicy.partial_deduction_charge);
      data.append('pending', this.$store.getters.loadCancellationPolicy.pending == null ? this.pending.selected : this.$store.getters.loadCancellationPolicy.pending );
      data.append('confirmed', this.$store.getters.loadCancellationPolicy.confirmed == null ? this.confirmed.selected : this.$store.getters.loadCancellationPolicy.confirmed);
      data.append('on_the_way', this.$store.getters.loadCancellationPolicy.on_the_way == null ? this.onTheWay.selected : this.$store.getters.loadCancellationPolicy.on_the_way);
      data.append('delivered', this.$store.getters.loadCancellationPolicy.delivered == null ? this.delivered.selected : this.$store.getters.loadCancellationPolicy.delivered);
      data.append('ready_to_be_picked', this.$store.getters.loadCancellationPolicy.ready_to_be_picked == null ? this.readyToBePicked.selected : this.$store.getters.loadCancellationPolicy.ready_to_be_picked);
      data.append('in_kitchen', this.$store.getters.loadCancellationPolicy.in_kitchen == null ? this.inKitchen.selected : this.$store.getters.loadCancellationPolicy.in_kitchen);
      let id = this.$store.getters.loadCancellationPolicy.id
      this.editCancellationPolicy({data, id}).then(() => this.setcancellationPolicy() )
    },


    submitFormThreeUpdate() {
      let data = new FormData();
      data.append("_method", "patch");
      data.append('delivery_charges', this.$store.getters.loadDeliveryCharge.delivery_charge );
      let id = this.$store.getters.loadDeliveryCharge.id
      this.editDeliveryCharge({data, id}).then(() => this.setDeliveryCharge() )
    },


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
    this.cancellationPolicy.maxCancellationTime = datepicker.data.value();
    Object.keys(this.$store.getters.loadCancellationPolicy == 0) ? '' : this.$store.getters.loadCancellationPolicy.max_canellation_time = datepicker.data.value();
  });
}

},


  }, // Method calibrace close


  computed: {
    ...mapGetters(['loadSettingProgress', 'loadSettingErrors', 'loadWriteUp', 'loadSettingLoader','loadWriteUpNotification', 'loadCancellationPolicy', 'loadCancellationPolicyNotification', 'loadDeliveryCharge', 'loadDeliveryCharge', 'loadDeliveryChargeNotification']),
    // Local computed properties

  },


}

</script>
