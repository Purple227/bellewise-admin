
<template>
	
	<div class="columns"> <!-- Columns wrapper tag open -->


		<div class="column"> <!-- column tag open-->

				<div class="field">
					<label class="label"> Terms & Conditions</label>
					<div class="control">
						<tinymce-editor api-key="API_KEY" :init="{plugins: 'wordcount'}" />
					</div>
				</div>

		</div> <!-- column tag close -->



		<div class="column"> <!-- column tag open-->

				<div class="field">
					<label class="label"> Privacy Policy </label>
					<div class="control">
						<tinymce-editor api-key="API_KEY" :init="{plugins: 'wordcount'}" />
					</div>
				</div>

		</div> <!-- column tag close -->


	</div> <!-- Columns wrapper tag close -->

</template>

<script>
import Editor from "../../../Mixins/tinymceEditor.js";

export default {

	mixins: [
	Editor,
	],

	data: () => ({

	}),

}

</script>
