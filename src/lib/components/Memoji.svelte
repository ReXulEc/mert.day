<script>
	export let r = 0;

	import memoji1 from '$lib/images/memoji/memoji1.png';
	import memoji2 from '$lib/images/memoji/memoji3.png';
	import memoji3 from '$lib/images/memoji/memoji4.png';
	import memoji4 from '$lib/images/memoji/memoji2.png';
	import memoji5 from '$lib/images/memoji/memoji5.png';
	import memoji6 from '$lib/images/memoji/memoji6.png';

	const emojis = [memoji1, memoji2, memoji3, memoji4, memoji5, memoji6];

	let keycount = r;

	function keyemoji() {
		if (keycount == 5) {
			keycount = 0;
		} else {
			keycount = keycount + 1;
		}
	}
	setInterval(() => {
		keyemoji();
	}, 5000);
</script>

<svelte:head>
  {#each emojis as image}
    <link rel="preload" as="image" href={image} />
  {/each}
</svelte:head>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={keyemoji}
	class="h-[5rem] w-[5rem] p-1 bg-[#808080]/5 rounded-full relative flex justify-center items-center"
>
	{#key emojis[keycount]}
		<img src={emojis[keycount]} class="imagesy" alt="Mert Dogu" />
	{/key}
	<div
		class="absolute flex justify-center right-0 bottom-0 bg-white rounded-full h-7 w-7 items-center"
	>
		<p class="text-[1.2rem]">🎉</p>
	</div>
</div>

<style>
	@keyframes fadein {
		0% {
			scale: 0.9;
			opacity: 0.1;
		}

		100% {
			scale: 1;
			opacity: 1;
		}
	}

	.imagesy {
		animation: fadein 0.9s;
		animation-timing-function: ease;
	}
</style>
