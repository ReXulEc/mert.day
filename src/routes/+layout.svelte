<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	 export let data;
	 import PageTransition from '$lib/components/PageTransition.svelte';
</script>

<svelte:head>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
</svelte:head>

<div class="relative" id="content">
	<div class="md:static sticky top-0 z-50">
		<Navbar />
	</div>
	<div class="flex justify-center md:pb-20 pb-10">
		<div class="md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 w-10/12">
			<PageTransition url={data.url}>
				<slot></slot>
			</PageTransition>
		</div>
	</div>
	<div class="fixed bottom-0 right-0 m-5 space-y-3" id="toast-container" />
</div>
