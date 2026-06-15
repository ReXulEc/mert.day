<script>
	import CONFIG from '../config.js';
	import Underline from '../../lib/components/Underline.svelte';
	export let r = CONFIG.PROJECTS.length;
	let slicedprojects = CONFIG.PROJECTS.slice(0, r);
</script>

{#if CONFIG.PROJECTS_MODE == 0}
	{#each slicedprojects as projects}
		<div
			class="flex md:flex-row flex-col-reverse md:justify-between md:items-center h-full pb-4 md:pb-0"
		>
			<div class="h-full space-y-1.5 md:w-8/12 w-10/12">
				<p class="texts-05 text-xs">{projects.year}</p>
				<div class="flex items-center space-x-4">
					<p class="text-xl font-medium">{projects.title}</p>
					{#if projects.job}
						<p class="texts-06 font-light text-base ml-2">|</p>
						<p class="texts-06 font-light text-base ml-2">{projects.job}</p>
					{/if}
				</div>
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
{:else if CONFIG.PROJECTS_MODE == 1}
	{#each slicedprojects as projects}
		<div
			class="flex md:flex-row flex-col-reverse md:justify-between md:items-center h-full pb-4 md:pb-0"
		>
			<div class="h-full space-y-1.5 md:w-8/12 w-10/12">
				<p class="texts-05 text-xs">{projects.year}</p>
				<div class="flex items-center space-x-4">
					{#if projects.job}
						<p class="text-xl leading-tight">
							<span class="inline-flex items-center gap-2 flex-wrap">
								<span>{projects.job}</span>
								<span class="font-normal text-base opacity-80">@</span>
								<span class="font-medium">{projects.title}</span>
							</span>
						</p>
					{:else}
						<p class="text-xl font-medium">{projects.title}</p>
					{/if}
				</div>
				<p class="texts-07">{projects.description}</p>
				<div class="flex items-center space-x-4 pt-2">
					{#if projects.link != ''}
						<Underline href={projects.link} text={projects.linkText || 'Try it out'} />
					{/if}
					{#if projects.mdlink}
						<Underline
							href="/projects/{projects.slug || projects.title.toLowerCase().replace(/ /g, '-')}"
							text="Read Blog"
						/>
					{/if}
				</div>
			</div>
			<div
				class=" h-[10rem] md:w-auto w-[10rem] aspect-square bg-[#808080]/5 rounded-2xl overflow-hidden relative flex justify-center items-center mb-3 md:mb-0"
			>
				<img class="absolute {projects.css}" src={projects.image} alt="" />
			</div>
		</div>
	{/each}
{:else if CONFIG.PROJECTS_MODE == 2}
	{#each slicedprojects as projects}
		<div
			class="flex md:flex-row flex-col-reverse md:justify-between md:items-center h-full pb-4 md:pb-0"
		>
			<div class="h-full space-y-1.5 md:w-8/12 w-10/12">
				<div class="flex items-center space-x-4">
					{#if projects.job}
						<div class="w-full flex justify-between items-center">
							<p class="text-xl flex space-x-2 items-center">
								<span>{projects.job}</span> <span class="font-normal text-base opacity-80">@</span>
								<span class="font-medium">{projects.title}</span>
							</p>
							<p class="texts-05 text-sm">{projects.year}</p>
						</div>
					{:else}
						<p class="text-xl font-medium">{projects.title}</p>
					{/if}
				</div>
				<p class="texts-07">{projects.description}</p>
				{#if projects.link != ''}
					<Underline href={projects.link} text={projects.linkText || 'Try it out'} />
				{/if}
			</div>
			<div
				class=" h-[10rem] md:w-auto w-[10rem] aspect-square bg-[#808080]/5 rounded-2xl overflow-hidden relative flex justify-center items-center mb-3 md:mb-0"
			>
				<img class="absolute {projects.css}" src={projects.image} alt="" />
			</div>
		</div>
	{/each}
{/if}
