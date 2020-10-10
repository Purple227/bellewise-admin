
<template>

	<div> <!-- Root tag open -->


		<div class="notification purple-bg-light is-bold has-text-black" v-if="loadSettingTwoNotification">
			Task Succeesful
		</div>

		<div class="columns"> <!-- Columns wrapper tag open -->


			<div class="column"> <!-- column tag open-->

				<div class="field" v-if="Object.keys(loadTerm).length == 0">
					<label class="label"> Terms & Conditions</label>
					<div class="control">
						<tinymce-editor api-key="4ymiwyb7xhvd2y5d6vn50bm6xxunax0esbivxl24engxupex" :init="{plugins: 'wordcount'}" v-model="term" />
						<p class="help is-danger" v-if="$v.term.$invalid"> Field is required</p>
						<p class="help purple-color" v-else> You good to go. </p>
					</div>
				</div>



				<div class="field" v-else>
					<label class="label"> Update Terms & Conditions</label>
					<div class="control">
						<tinymce-editor api-key="4ymiwyb7xhvd2y5d6vn50bm6xxunax0esbivxl24engxupex" :init="{plugins: 'wordcount'}" v-model="loadTerm.terms" />
						<p class="help is-danger" v-if="$v.loadTerm.$invalid"> Field is required</p>
						<p class="help purple-color" v-else> You good to go. </p>
					</div>
				</div>



				<div class="field" v-if="Object.keys(loadTerm).length == 0">
					<p class="control">
						<button class="button" v-bind:class="{ 'is-loading': loadSettingTwoProgress }" :disabled="$v.term.$invalid" @click="submitFormOne">
							<span class="icon is-small">
								<i class="fas fa-save purple-color"></i>
							</span>
							<span class="is-bold"> Save </span>
						</button>
					</p>
				</div>

				<div class="field" v-else>
					<p class="control">
						<button class="button" v-bind:class="{ 'is-loading': loadSettingTwoProgress }" :disabled="$v.loadTerm.$invalid" @click="submitFormOneUpdate">
							<span class="icon is-small">
								<i class="fas fa-save purple-color"></i>
							</span>
							<span class="is-bold"> Update </span>
						</button>
					</p>
				</div>


			</div> <!-- column tag close -->



			<div class="column"> <!-- column tag open-->

				<div class="field" v-if="Object.keys(loadPolicy).length == 0">
					<label class="label"> Privacy Policy </label>
					<div class="control">
						<tinymce-editor api-key="API_KEY" :init="{plugins: 'wordcount'}" v-model="policy" />
						<p class="help is-danger" v-if="$v.policy.$invalid"> Field is required</p>
						<p class="help purple-color" v-else> You good to go. </p>
					</div>
				</div>

				<div class="field" v-else>
					<label class="label"> Update Privacy Policy </label>
					<div class="control">
						<tinymce-editor api-key="API_KEY" :init="{plugins: 'wordcount'}" v-model="loadPolicy.policy" />
						<p class="help is-danger" v-if="$v.loadPolicy.$invalid"> Field is required</p>
						<p class="help purple-color" v-else> You good to go. </p>
					</div>
				</div>


				<div class="field" v-if="Object.keys(loadPolicy).length == 0">
					<p class="control">
						<button class="button" v-bind:class="{ 'is-loading': loadSettingTwoProgress }" :disabled="$v.policy.$invalid" @click="submitFormTwo">
							<span class="icon is-small">
								<i class="fas fa-save purple-color"></i>
							</span>
							<span class="is-bold"> Save </span>
						</button>
					</p>
				</div>

				<div class="field" v-else>
					<p class="control">
						<button class="button" v-bind:class="{ 'is-loading': loadSettingTwoProgress }" :disabled="$v.loadPolicy.$invalid" @click="submitFormTwoUpdate">
							<span class="icon is-small">
								<i class="fas fa-save purple-color"></i>
							</span>
							<span class="is-bold"> Update </span>
						</button>
					</p>
				</div>




			</div> <!-- column tag close -->


		</div> <!-- Columns wrapper tag close -->

	</div> <!-- Root tag close -->

</template>

<script>
import { required, maxLength} from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex';
import Editor from "../../../Mixins/tinymceEditor.js";

export default {

	mixins: [
	Editor,
	],


	data: () => ({

		term : null,
		policy: null,

	}),

	validations: {

		term: {
			required,
		},

		policy: {
			required
		},

		loadTerm: {
			terms: {
				required
			}
		},

		loadPolicy: {
			policy: {
				required
			}
		}


	},

	mounted() {
		this.setFetchPolicy()
		this.setFetchTerm()
		this.clearSettingTwoNotification()
	},

	methods: {
		...mapActions(["createPolicy", "clearSettingTwoErrors", "fetchPolicy", "editPolicy", "createTerm", "fetchTerm", "editTerm", "clearSettingTwoNotification"]),

    // Local method goes here

    setFetchPolicy() {
    	let id = 1
    	this.fetchPolicy(id)
    },

    setFetchTerm() {
    	let id = 1
    	this.fetchTerm(id)
    },

    submitFormOne() {
    	let data = new FormData();
    	data.append("_method", "post");
    	data.append('term', this.term);
    	this.createTerm(data).then(() => this.setFetchTerm() )
    },

    submitFormTwo() {
    	let data = new FormData();
    	data.append("_method", "post");
    	data.append('policy', this.policy);
    	this.createPolicy(data).then(() => this.setFetchPolicy() )
    },

    submitFormOneUpdate() {
    	let data = new FormData();
    	data.append("_method", "patch");
    	data.append('term', this.$store.getters.loadTerm.terms );
    	let id = this.$store.getters.loadTerm.id
    	this.editTerm({data, id}).then(() => this.setFetchTerm() )
    },

    submitFormTwoUpdate() {
    	let data = new FormData();
    	data.append("_method", "patch");
    	data.append('policy', this.$store.getters.loadPolicy.policy );
    	let id = this.$store.getters.loadPolicy.id
    	this.editPolicy({data, id}).then(() => this.setFetchPolicy() )
    },

  }, // Method calibrace close


  computed: {
  	...mapGetters(['loadSettingTwoProgress', 'loadSettingTwoErrors', 'loadTerm', 'loadSettingTwoLoader','loadSettingTwoNotification', 'loadPolicy']),
    // Local computed properties

},


}

</script>
