<script>
	import OpenAnimeMobile from '../images/projects/openanime.png';
	import SettleCoLogo from '../images/projects/settleco_logo.png';
	import IsolationLogo from '../images/projects/isolation.png';

	import Underline from '../../lib/components/Underline.svelte';
	let projects = [
		{
			year: '2020 - present',
			title: 'OpenAnime',
			description:
				'OpenAnime is an open source anime platform that aims on community, security and speed. It provides some of the unique features that you will rarely see on an anime platform.',
			link: 'https://openani.me',
			image: OpenAnimeMobile,
			css: 'w-4/6 top-5'
		},
		{
			year: '2021 - 2022',
			title: 'SettleCo',
			description:
				'Hi! We are a tiny development company with fully remote team working throughout Turkey, Izmir. Our main goal is to produce creative and innovative solutions.',
			link: 'https://settleco.net',
			image: SettleCoLogo,
			css: 'w-1/2'
		},
		{
			year: '2022 - 2022',
			title: 'Isolation',
			description: 'Isolation is a start page with some widgets to keep you focused.',
			link: '',
			image: IsolationLogo,
			css: 'w-3/4 rounded-2xl'
		}
	];
	export let r = projects.length;
	let slicedprojects = projects.slice(0, r);
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
