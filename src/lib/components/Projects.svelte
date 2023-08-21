<script>
	import CONFIG from "../config.js"
	import Underline from '../../lib/components/Underline.svelte';
	export let r = CONFIG.PROJECTS.length;
	let slicedprojects = CONFIG.PROJECTS.slice(0, r);
</script>

{#each slicedprojects as projects}
	<div
		class="flex md:flex-row flex-col-reverse md:justify-between md:items-center h-full pb-4 md:pb-0"
	>
		<div class="h-full space-y-1.5 md:w-8/12 w-10/12">
			<p class="texts-05 text-xs">{projects.year}</p>
			<p class="text-xl">{projects.title}</p>
			<p class="texts-07">{projects.description}</p>
			{#if projects.link != ''}
				<Underline href={projects.link} text="Try it out" />
			{/if}
		</div>
		<div
			class=" h-[10rem] md:w-auto w-[10rem] aspect-square bg-[#808080]/5 rounded-2xl overflow-hidden relative flex justify-center items-center mb-3 md:mb-0"
		>
			<img class="absolute {projects.css}" src={projects.image} alt="" />
		</div>
	</div>
{/each}
