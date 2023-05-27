<script>
	/**
	 * @type {string}
	 */
	export let emoji;

	/**
	 * @type {string}
	 */
	export let message;

	const originalClassList = 'p-3 px-4 bg-white/10 rounded-xl flex items-center space-x-2.5';

	if ($$restProps.class) {
		$$restProps.class += ` ${originalClassList}`;
	} else {
		$$restProps.class = originalClassList;
	}
</script>

<div {...$$restProps}>
	<p class="text-lg">{emoji} |</p>
	<p class="text-white text-md">{message}</p>
</div>
