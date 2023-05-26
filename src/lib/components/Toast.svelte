<script>
	import { fade } from 'svelte/transition';

	export let data = {
		emoji: '',
		message: ''
	};
</script>

<div
	in:fade={{ delay: 250, duration: 300 }}
	out:fade={{ delay: 250, duration: 300 }}
	class="p-3 px-6 bg-white/10 rounded-xl flex items-center space-x-2"
>
	<p class="text-xl">{data.emoji}</p>
	<p class="text-white text-md">{data.message}</p>
</div>
