
<template>
	

				<div class="field">
					<label class="label"> About </label>
					<div class="control">
						<tinymce-editor api-key="API_KEY" :init="{plugins: 'wordcount'}" />
					</div>
				</div>


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