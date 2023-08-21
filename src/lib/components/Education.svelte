<script>
	import { listen } from 'svelte/internal';
    import Underline from '../../lib/components/Underline.svelte';
    import CONFIG from '../config';
    const edu = CONFIG.EDUCATION
</script>

    <!-- svelte-ignore empty-block -->
    {#each edu as item}
	<div
		class="flex md:flex-row flex-col-reverse md:justify-between md:items-center h-full pb-4 md:pb-0"
	>
		<div class="h-full space-y-1.5 md:w-8/12 w-10/12">
			<p class="texts-05 text-xs">{item.start} - {item.end}</p>
			<p class="text-xl">{item.name}</p>
			<p class="texts-07">{item.description}</p>
			{#if item.link != ''}
				<Underline href={item.link} text="Try it out" />
			{/if}
		</div>
	</div>
    {/each}