
<template>

	<div>


		<div class="box"> <!-- Box tag open -->

      <div class="notification purple-bg-light is-bold has-text-black" v-if="loadSettingErrors">
        <ul>
          <li v-for="(value, name, index) in loadSettingErrors">
            {{ index+1 }}. {{ value[0] }}
          </li>
        </ul>
      </div>

      <form v-on:submit.prevent="submitFormOne"> <!-- Form tag open -->


       <div class="columns"> <!-- Columns wrapper tag open -->


        <div class="column"> <!-- column tag open-->

         <div class="field">
          <label class="label">Landing Page Write-up</label>
          <div class="control">
           <textarea class="textarea" placeholder="Textarea" v-model="writeUp"> </textarea>
           <p class="help is-danger" v-if="$v.writeUp.$invalid"> Not morethan 250 characters</p>
           <p class="help purple-color" v-else> You good to go. </p>
         </div>
       </div>


<!--        <div class="field" v-else>
        <label class="label">Update Landing Page Write-up</label>
        <div class="control">
         <textarea class="textarea" placeholder="Textarea" v-model="loadWriteUp.write_up"> </textarea>
         <p class="help is-danger" v-if="!$v.loadWriteUp.$invalid"> Not morethan 250 characters</p>
         <p class="help purple-color" v-else> You good to go. </p>
       </div>
     </div> -->


   </div> <!-- column tag close -->

 </div> <!-- Columns wrapper tag close -->


 <div class="field">
  <p class="control">
   <button class="button" v-bind:class="{ 'is-loading': loadSettingProgress }" :disabled="$v.writeUp.$invalid">
    <span class="icon is-small">
     <i class="fas fa-save purple-color"></i>
   </span>
   <span class="is-bold"> Save </span>
 </button>
</p>
</div>


</form> <!-- Form tag close -->

</div>	<!-- Box tag close -->



<div class="box"> <!-- Box tag open -->

 <p class="subtitle is-5">
  <strong> Cancellation Policy </strong> 
</p>

<div class="columns"> <!-- Columns wrapper tag open -->

 <div class="column"> <!-- First column tag open-->


  <div class="field">
   <label class="label"> Max. Cancellation Waiting Time  </label>
   <div class="control">
    <input id="my-element" type="date" data-display-mode="dialog"  data-color="info" data-type="time">
  </div>
</div>

</div> <!-- First column tag close -->



<div class="column"> <!-- Second column tag open-->


  <div class="field">
   <label class="label"> <span class="mr-2" > Partial Refund Deduction Charges </span> <input type="radio" value="notification" v-model="picked">
    %  <input type="radio" value="email" v-model="picked">
  Flat</label>
  <div class="control">
    <input  type="number" class="input">
  </div>
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
            <select>
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
            <select>
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
            <select>
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
            <select>
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
            <select>
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
          <div class="select is-fullwidth">
            <select>
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


<div class="field">
  <p class="control">
   <button class="button">
    <span class="icon is-small">
     <i class="fas fa-save purple-color"></i>
   </span>
   <span class="is-bold"> Save </span>
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

export default {

	data: () => ({

   picked: null,
   writeUp : null,


 }),

  validations: {

    writeUp: {
      required,
      maxLength: maxLength(225)
    },

    loadWriteUp: {
      writeUp: {
        required,
        maxLength: maxLength(225)
      }
    },

  },

  created() {
    this.fetchWriteUp()
  },

  methods: {
    ...mapActions(["createWriteUp", "clearSettingErrors", "fetchWriteUp"]),

    // Local method goes here


    submitFormOne() {
      let data = new FormData();
      data.append("_method", "post");
      data.append('write_up', this.writeUp);
      this.createWriteUp(data)
    },

  }, // Method calibrace close


  computed: {
    ...mapGetters(['loadSettingProgress', 'loadSettingErrors', 'loadWriteUp']),
    // Local computed properties

  },


}

</script>
