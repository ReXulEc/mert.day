<script>
	import Memoji from '../lib/components/Memoji.svelte';
	import Underline from '../lib/components/Underline.svelte';
	import OpenAnimeMobile from '../lib/images/projectmockups/openanime.png';

	let projects = [
		{
			'year': '2020 - present',
			'title': 'OpenAnime',
			'description': 'OpenAnime is an open source anime platform that aims on community, security and speed. It provides some of the unique features that you will rarely see on an anime platform.',
			'link': '/projects',
			'image': OpenAnimeMobile,
			'css': 'w-4/6 top-5'
		},
		/*
		{
			'year': '2021 - 2022 Q4',
			'title': 'SettleCo',
			'description': 'SettleCo is a tiny development company which located on Turkey, Izmir. We are a relatively small company that aims to grow by making new projects.',
			'link': '/projects',
			'image': OpenAnimeMacbook

		},
		{
			'year': '2022 - 2022',
			'title': 'Isolation',
			'description': 'Isolation is a start page with some widgets to keep you focused.',
			'link': '/projects',
			'image': OpenAnimeMacbook

		},
		*/
	]

	let clickedMemojiCount = 0;

	function easteregg() {
		clickedMemojiCount++;
		if (clickedMemojiCount == 20) {
			clickedMemojiCount = 0;
		}
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="flex flex-col pt-20 space-y-24">
		<section class="space-y-5">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={easteregg}>
				<Memoji  />
			</div>
			<div class="space-y-3">
				<p class="text-2xl font-medium">I'm a Front-end developer.</p>
				<p class="texts-06 text-[1.1rem] font-normal">Hey there! I'm Mert, a front-end developer with a passion for creating beautiful and interactive web experiences. I love working with modern web technologies like React, Next, Svelte, and Vue, as well as using Node.js for server-side development.</p>
				<Underline href="/projects" />
			</div>
		</section>
		<div class="space-y-6">
			<p class="font-medium text-[1.1rem]">Selected Projects</p>
				{#each projects as projects}
				<div class="flex flex-row justify-between items-center h-full">
					<div class="h-full space-y-1.5 w-8/12">
						<p class="texts-05 text-xs">{projects.year}</p>
						<p class="text-xl">{projects.title}</p>
						<p class="texts-07">{projects.description}</p>
						<Underline href="{projects.link}" text='Try it out' />
					</div>
					<div class=" h-[10rem] aspect-square bg-[#808080]/5 rounded-2xl overflow-hidden relative flex justify-center">
						<img class="absolute {projects.css}" src={projects.image} alt="" />
					</div>
				</div>
				{/each}
		</div>

	</div>
</section>