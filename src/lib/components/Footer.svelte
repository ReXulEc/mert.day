<script>
	import Underline from './Underline.svelte';
	import CONFIG from "../config.js"
</script>

<div class="space-y-1.5">
	<div class="flex">
		<p class="texts-07 w-1/2">Contact</p>
	</div>
	<div class="flex justify-between">
		<div class="flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-y-1">
			{#each CONFIG.FOOTER as footer}
				<Underline text={footer.name} href={footer.link} />
			{/each}
		</div>
		<div class="hidden md:flex">
			<a href="mailto:business@mert.day">business@mert.day</a>
		</div>
	</div>
</div>

<style>
	a {
		color: #868686;
	}
</style>
