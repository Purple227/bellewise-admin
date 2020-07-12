<template>
	
<div class="box"> <!-- Box container tag open -->



		<!-- Main container -->
		<nav class="level">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<p class="subtitle is-5">
						<strong> Reset User Password </strong> 
					</p>
				</div>
			</div>

			<!-- Right side -->
			<div class="level-right">
				<p class="level-item"> <router-link :to="{ name: 'users-list' }" exact> <strong class="purple-color"> Back</strong> </router-link> </p>
			</div>
		</nav>



    <div class="columns is-marginless is-centered">
        <div class="column ">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">Reset User Password</p>
                </header>

                <div class="card-content">

                        <div class="field is-horizontal">
                            <div class="field-label">
                                <label class="label">E-Mail Address</label>
                            </div>

                            <div class="field-body">
                                <div class="field">
                                    <p class="control has-icons-right has-icons-left">
                                        <input class="input" id="email" type="email" v-model="reset.email"
                                              required autofocus>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-envelope fa-lg purple-color"></i>
                                    </span>
                                    <span class="icon is-small is-right">
                                        <i class="fas fa-exclamation-triangle has-text-danger" v-if="$v.reset.email.$invalid"> </i>
                                        <i class="fas fa-check has-text-primary" v-else> </i>
                                    </span>    
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div class="field is-horizontal">
                            <div class="field-label"></div>

                            <div class="field-body">
                                <div class="field is-grouped">
                                    <div class="control">
                                        <button type="submit" class="button purple-color" disabled>Send Password Reset Link
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

</div> <!-- Box container tag close -->
</template>


<script>
import { email, required } from 'vuelidate/lib/validators'

export default {


	data: () => ({

		reset: {
			email: null,
		},

	}),



	validations: { //Validation calibrace open 

		reset: {

			email: {
				email,
				required
			},

		}, 

	}, //Validation calibrace close 


}

</script>
