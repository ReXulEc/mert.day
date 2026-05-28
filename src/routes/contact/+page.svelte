<script>
	import Meta from '../../lib/components/Meta.svelte';
    import CONFIG from '../../lib/config.js';


</script>

<Meta title="/contact" />

<div class="flex justify-center items-center">
	<div class="space-y-10 w-full">
		<div class="space-y-2">
			<p class="font-medium text-[1.1rem]">Get in touch.</p>
			<p class="text-sm text-neutral-400 leading-relaxed">
				Have a project in mind or just want to say hi? Feel free to reach out.
			</p>
		</div>
		<div class="flex flex-col gap-6">
			{#each CONFIG.FOOTER as link}
				<div class="flex items-baseline gap-8">
					<span class="text-xs text-neutral-500 w-16 shrink-0">{link.name}</span>
					<a
						href={link.link}
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-neutral-200 underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300 transition-all"
					>
						{link.value}
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>
