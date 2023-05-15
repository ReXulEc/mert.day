<script>
	import memoji1 from '$lib/images/memoji1.png';
	import Underline from '../lib/components/Underline.svelte';

	let projects = [
{
			'year': '2020 - present',
			'title': 'OpenAnime',
			'description': 'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
			'link': '/projects'
		}
	]

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="flex flex-col pt-20 space-y-24">
		<section class="space-y-5">
			<div class="h-[5rem] w-[5rem] p-1 bg-[#808080]/5 rounded-full relative">
				<img src={memoji1} alt="Mert Dogu" />
				<div class="absolute flex justify-center right-0 bottom-0 bg-white rounded-full h-7 w-7 items-center">
					<p class="text-[1.2rem]">🎉</p>
				</div>
			</div>
			<div class="space-y-3">
				<p class="text-2xl font-medium">I'm a Front-end developer.</p>
				<p class="texts-07 text-[1.1rem] font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
				<Underline href="/projects" />
			</div>
		</section>
		<div class="space-y-5">
			<p class="font-medium text-[1.1rem]">Selected Projects</p>
			<div style="container">
				{#each projects as projects}
				<div class="flex flex-row justify-between items-center h-full">
					<div class="h-full space-y-1 w-8/12">
						<p class="texts-05 text-xs">{projects.year}</p>
						<p class="text-xl">{projects.title}</p>
						<p class="texts-07">{projects.description}</p>
						<Underline href="{projects.link}" text='Try it out' />
					</div>
					<div class=" h-[10rem] aspect-square bg-[#808080]/5 rounded-2xl">
						<img src="" alt="" />
					</div>
				</div>
				{/each}
			</div>
		</div>

	</div>
</section>