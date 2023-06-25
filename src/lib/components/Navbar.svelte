<script>
	import { fly } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { confetti } from '@neoconfetti/svelte'
	import useToast from '../hooks/useToast';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';


	let isNavOpen = false;

	const items = [
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];

	const handleNav = () => {
		isNavOpen = !isNavOpen;

		if (isNavOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	};

	$: if($navigating) {
		new Audio("/switch-page.mp3").play();
 	}

	let success = false;

	 onMount(() => {
		if ($page.url.searchParams.get('mailconfirm') === 'true') {
			success = true;
			useToast('👋', 'You have successfully subscribed to my newsletter!');
		}
	});
</script>


<div class="confetticlass">
	{#if success===true}
		<div class="confettioverlay" use:confetti={{ stageHeight: document.body.scrollHeight, colors: ['#fc3232', '#3239fc', '#32fcde', '#f2fc32'] }}  />
	{/if}
</div>

<nav
	class="flex w-full justify-center text-lg md:py-16 md:bg-black/0 bg-[#2A2A2A]"
>
	<div
		class="flex justify-between items-center w-10/12 py-4 md:p-0 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12"
	>
	{#if isNavOpen}
		<a on:click={handleNav} data-sveltekit-prefetch href="/" class="text-white z-[9999]">Mert Dogu</a>
	{:else}
		<a data-sveltekit-prefetch href="/" class="text-white">Mert Dogu</a>
	{/if}
		<div class="space-x-6 md:flex hidden">
			{#each items as item}
				<a data-sveltekit-prefetch href={item.href} class="texts-05">{item.name}</a>
			{/each}
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<svg
			class="hamburger md:hidden h-10 cursor-pointer transition-[transform] duration-[400ms] select-none z-[9999]"
			viewBox="0 0 100 100"
			aria-expanded={isNavOpen}
			on:click={handleNav}
		>
			<path
				class="line top fill-none transition-[stroke-dasharray,stroke-dashoffset] duration-[400ms] stroke-[5.5]"
				d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
			/>
			<path
				class="line middle fill-none transition-[stroke-dasharray,stroke-dashoffset] duration-[400ms] stroke-[5.5]"
				d="m 70,50 h -40"
			/>
			<path
				class="line bottom fill-none transition-[stroke-dasharray,stroke-dashoffset] duration-[400ms] stroke-[5.5]"
				d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
			/>
		</svg>
	</div>
</nav>

{#if isNavOpen}
	<div
		class="flex flex-col items-center justify-center w-full h-screen text-2xl text-white bg-[#2A2A2A] absolute top-0 left-0 z-10  space-y-3"
		in:fly={{ y: 100, duration: 400 }}
		out:fly={{ y: 100, duration: 400 }}
	>
		{#each items as item}
			<a
				type="button"
				role="button"
				href={item.href}
				class="py-3 rounded-md w-10/12 font-medium"
				on:click={handleNav}
				in:fly={{ y: 100, duration: 400 }}
				out:fly={{ y: 100, duration: 400 }}
			>
				{item.name}
			</a>
		{/each}
	</div>
{/if}

<style>
	.hamburger[aria-expanded='true'] {
		transform: rotate(45deg);
	}

	.line {
		transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
		stroke: rgb(255 255 255 / 0.8);
		stroke-linecap: round;
	}

	.hamburger .top {
		stroke-dasharray: 40 82;
	}
	.hamburger .middle {
		stroke-dasharray: 40 111;
	}
	.hamburger .bottom {
		stroke-dasharray: 40 161;
	}
	.hamburger[aria-expanded='true'] .top {
		stroke-dasharray: 17 82;
		stroke-dashoffset: -62px;
	}
	.hamburger[aria-expanded='true'] .middle {
		stroke-dashoffset: 23px;
	}
	.hamburger[aria-expanded='true'] .bottom {
		stroke-dashoffset: -83px;
	}

	.confetticlass {
		display: flex;
		justify-content: center;
	}

</style>
