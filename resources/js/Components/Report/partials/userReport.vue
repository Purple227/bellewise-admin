
<template>

	<div class="container"> <!-- Container tag open -->

<div class="pageloader purple-bg" v-bind:class="{ 'is-active': loadUserLoader }"><span class="title"> Bellewise loading </span></div>


		<nav class="level">

			<div class="level-item has-text-centered">
				<div class="field has-addons">
					<div class="control">
						<input class="input" type="text" placeholder=" Search " v-model="searchQuery" v-on:keyup="searchMethod">
					</div>
					<div class="control">
						<a class="button purple-color">
							Search
						</a>
					</div>
				</div>
			</div>

		</nav>


		<div class="notification is-light is-bold pointer" @click="display=!display">
			<span> Send NOtification and Email </span> <span class="fas fa-angle-down purple-color is-pulled-right"></span>
		</div>


		<div class="box" v-if="display"> <!-- Box container tag open -->

			<div class="field">
				<div class="control">
					<label class="radio">
						<input type="radio" value="notification" v-model="picked">
						Send Notification 
					</label>
					<label class="radio">
						<input type="radio" value="email" v-model="picked">
						Send Email
					</label>
				</div>
			</div>

			<div class="notification purple-bg-light is-bold has-text-black" v-if="success">
				Task Succeesful
			</div>

			<!-- Notification section -->
			<form v-on:submit.prevent="submitNotification" v-if=""> <!-- Form tag open -->
				<div class="" v-if=" 'notification' == picked"> 


					<div class="notification purple-bg-light is-bold has-text-black" v-if="loadReportErrors">
								Task failed
					</div>


					<div class="field">
						<label class="label"> Notification / SMS </label>
						<div class="control">
							<textarea class="textarea" v-model.trim="SMSMessage" placeholder=" Enter Notification Content"></textarea>
							<p class="help is-danger is-bold" v-if="($v.SMSMessage.$invalid || $v.selectedNotification.$invalid)"> You have to select atleast one recipent and field is required. </p>
							<p class="help purple-color is-bold" v-else> You good to go. </p>
						</div>
					</div>


					<div class="field is-grouped is-grouped-right">
						<div class="control">
							<button class="button purple-color is-bold" v-bind:class="{ 'is-loading': loadReportProgress }" :disabled="($v.SMSMessage.$invalid || $v.selectedNotification.$invalid)"> Send </button>
						</div>
					</div>

				</div>
			</form> <!-- Form tag close -->
			<!-- Notification section -->


			<!-- Email section -->
			<form v-on:submit.prevent="submitEmail" v-if=""> <!-- Form tag open -->
				<div class="" v-if=" 'email' == picked ">
					<div class="field">
						<label class="label"> Subject </label>
						<div class="control has-icons-left has-icons-right">
							<input class="input" type="text" placeholder="Text input" v-model="mail.subject">
							<!-- Has icon left -->
							<span class="icon is-small is-left">
								<i class="fas fa-header purple-color"></i>
							</span>
							<!-- Has icon right -->
							<span class="icon is-small is-right" v-if="$v.mail.subject.required">
								<i class="fas fa-check purple-color"></i>
							</span>
							<span class="icon is-small is-right" v-else>
								<i class="fas fa-exclamation-triangle has-text-danger"></i>
							</span>
						</div>
					</div>


					<div class="field">
						<label class="label">Message</label>
						<div class="control">
							<tinymce-editor api-key="API_KEY" :init="{plugins: 'wordcount'}" v-model="mail.message" />
						</div>
					</div>

					<div class="field is-grouped is-grouped-right">
						<div class="control">
							<button class="button purple-color is-bold" v-bind:class="{ 'is-loading': loadReportProgress }" :disabled="$v.mail.$invalid">Send</button>
						</div>
					</div>
				</div>
			</form> <!-- Form tag close -->
			<!-- Email section -->

		</div> <!-- Box container tag close -->


		<div class="card"> <!-- Card tag open -->

			<div class="card-content table-container"> <!-- Card content tag open -->

				<label class="panel-block is-bold" v-if=" 'notification' == picked">
					<input type="checkbox" v-model="markNotification" true-value="on" false-value="off" @click =" markNotification  == 'on'  ? selectedNotification = [] : selectedNotification = markAllNotification">
					Mark All
				</label>

				<label class="panel-block is-bold" v-if=" 'email' == picked ">
					<input type="checkbox" v-model="mail.mark" true-value="on" false-value="off" @click =" mail.mark  == 'on'  ? mail.selectedMail = [] : mail.selectedMail = markAllMail">
					Mark All
				</label>

				<table class="table is-bordered is-striped is-hoverable"> <!-- Table tag open -->

					<thead>
						<tr>
							<th> </th>
							<th> <span class="purple-color"> ID </span> </th>
							<th> <span class="purple-color"> Name </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Email </span> </th>
							<th class="has-text-centered"> <span class="purple-color"> Phone </span> </th>
							<th> <span class="purple-color"> Joined On </span> </th>
						</tr>
					</thead>

					<tbody>

						<tr v-for="user in searchQuery.length  > 1  ? loadOrderSearch : loadOrderHistory" :key="index">
							<td class="has-text-centered"> 
							<input type="checkbox" :value="user.phone" v-model="selectedNotification" v-if=" 'notification' == picked">
							<input type="checkbox" :value="user.email" v-model="mail.selectedMail" v-else>
							 </td>
							<th> <span class="purple-color"> {{ index+1 }} </span> </th>
							<td> {{ user.name }} </td>
							<td> {{ user.email }} </td>
							<td> {{ user.phone }} </td>
							<td> {{ user.created_at }} </td>
						</tr>

					</tbody>

				</table> <!-- Table tag close -->


				<!-- Pagination section -->
				<div class="buttons has-addons is-centered" v-if="loadUserData.length >= 1">
					<a class="button" v-if="loadUserPagination.previousPageUrl" @click="paginationHandler(loadUserPagination.previousPageUrl)">
						<span class="icon is-small">
							<i class="fas fa-arrow-left purple-color"></i>
						</span>
						<span> Previous </span>
					</a>


					<a class="button">

						{{ loadUserPagination.to }} 0f {{ loadUserPagination.total }}
					</a>


					<a class="button" v-if="loadUserPagination.nextPageUrl" @click="paginationHandler(loadUserPagination.nextPageUrl)">
						<span class="icon is-small">
							<i class="fas fa-arrow-right purple-color"></i>
						</span>
						<span> Next </span>
					</a>
				</div>

			</div> <!-- Card content tag open -->

		</div> <!-- Card tag close -->


		<div class="card" v-if="loadUserData.length <= 0">
			<div class="card-content">
				<div class="content is-bold has-text-centered subtitle">
					<span class="fa"> No user found  </span>
				</div>
			</div>
		</div>

	</div> <!-- Container tag close -->


</template>

<script>

import { required, email, minLength } from 'vuelidate/lib/validators'
import Editor from "../../../Mixins/tinymceEditor.js";
import { mapGetters, mapActions, mapState } from 'vuex';

export default {

	mixins: [
	Editor,
	],

	data: () => ({
		display: false,
		picked: "notification",
		showModal: false,
		searchQuery: '',
		markNotification: "On",
		selectedNotification: [],
		SMSMessage: "",
		success: false,

		mail: {
			subject: null,
			message: null,
			error: null,
			selectedMail: [],
			mark: "On",
		}

	}),


	validations: { //Validation calibrace open 

		SMSMessage: {
			required,
			minLength: minLength(6)
		},

		selectedNotification: {
			required
		},

		mail: {
			message: {
				required
			},
			subject: {
				required
			}
		}

	}, //Validation calibrace close 

	validations2: { //Validation calibrace open 

		SMSMessage: {
			required,
			minLength: minLength(6)
		},

		selectedNotification: {
			required
		},

	}, //Validation calibrace close 



	created() {
		this.clearNotification()
		this.fetchUsers()
		this.fetchAllUser()
	},



	methods: {
		...mapActions(['fetchUsers', 'clearNotification', 'searchUser', 'sendSMS', 'sendMail', 'fetchAllUser']),
		// Local method

		paginationHandler(uri) {
			this.fetchUsers(uri)
		},

		searchMethod() {
			if(this.searchQuery > 1) {
				this.searchUser(this.searchQuery)
			}
		},

		submitNotification() {
			let data = new FormData();
			data.append("_method", "post");
			data.append('message', this.SMSMessage);
			data.append('phones', JSON.stringify(this.selectedNotification));
			this.sendSMS(data)
			if (this.$store.getters.loadReportNotification == true) {
				this.picked == false
				this.success = true 
			}
		},

		submitEmail() {
			let data = new FormData();
			data.append("_method", "post");
			data.append('message', this.mail.message);
			data.append('mail', JSON.stringify(this.mail.selectedMail));
			this.sendMail(data)
			if (this.$store.getters.loadReportNotification == true) {
				this.picked == false
				this.success = true 
			}
		}

	},


	computed: {
		...mapGetters(['loadUserData', 'loadAllUser', 'loadUserPagination', 'loadUserSearch', 'loadReportNotification', 'loadReportProgress', 'loadReportErrors', 'loadUserLoader']),
    // Local computed properties
    markAllNotification() {
    	let active = this.$store.getters.loadAllUser
    	let arrayLength = this.$store.getters.loadAllUser.length
    	let selectAll = []
    	for (let i = 0; i < arrayLength; i++) {
    		selectAll.push(active[i].phone)
    	}
    	return  selectAll
    },

    markAllMail() {
    	let active = this.$store.getters.loadAllUser
    	let arrayLength = this.$store.getters.loadAllUser.length
    	let selectAll = []
    	for (let i = 0; i < arrayLength; i++) {
    		selectAll.push(active[i].email)
    	}
    	return  selectAll
    },

},


}

</script>
