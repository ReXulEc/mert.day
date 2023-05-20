<script>
	import Memoji from '../lib/components/Memoji.svelte';
	import Underline from '../lib/components/Underline.svelte';
	import Projects from '../lib/components/Projects.svelte';
	import Footer from '../lib/components/Footer.svelte';


	import Inbox from '../lib/images/inbox.png';

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="flex flex-col space-y-24">
		<section class="space-y-5">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div>
				<Memoji  />
			</div>
			<div class="space-y-3">
				<p class="text-2xl font-medium">I'm a Front-end developer.</p>
				<p class="texts-06 text-[1.1rem] font-normal">Hey there! I'm Mert, a front-end developer with a passion for creating beautiful and interactive web experiences. I love working with modern web technologies like React, Next, Svelte, and Vue, as well as using Node.js for server-side development.</p>
				<Underline href="/about" />
			</div>
		</section>
		<div class="space-y-9">
			<p class="font-medium text-[1.1rem]">Selected Projects</p>
			    <Projects r={2}/>
				<Underline text="View all projects" href="/projects" arrowstyle={'right'} />
		</div>

		<div class="flex bg-[#808080]/5 w-full p-6 rounded-3xl gap-10 justify-between">
			<div class="space-y-1.5 flex flex-col md:w-3/4">
				<p>Sign up to my newsletter</p>
				<p class="texts-07">I regularly share my professional or personal updates on substack!</p>
				<div class="flex space-x-2">
					<input class="bg-[#4F4F4F] p-3 w-full rounded-lg ring-0 placeholder-white/50 flex text-white" placeholder="email adress" type="email" name="" id="">
					<button class="bg-[#4F4F4F] p-3 px-7 rounded-lg text-white flex">Subscribe</button>
				</div>
			</div>
			<div class="md:flex hidden justify-center items-center bg-[#808080]/5 aspect-square rounded-2xl">
				<img class="h-7 w-7" src="{Inbox}" alt="">
			</div>
		</div>
		<Footer />
	</div>
</section>

<style>

</style>