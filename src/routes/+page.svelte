<script>
	import Memoji from '../lib/components/Memoji.svelte';
	import Underline from '../lib/components/Underline.svelte';
	import Projects from '../lib/components/Projects.svelte';
	import Education from '../lib/components/Education.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Meta from '../lib/components/Meta.svelte';
</script>

<Meta title="/home" />

<section>
	<div class="flex flex-col space-y-24">
		<section class="space-y-5">
			<div>
				<Memoji />
			</div>
			<div class="space-y-3">
				<p class="text-2xl font-medium">I'm a Front-end developer.</p>
				<p class="texts-06 text-[1.1rem] font-normal">
					Hey there! I'm Mert, a front-end developer with a passion for creating beautiful and
					interactive web experiences. I love working with modern web technologies like React, Next,
					Svelte, and Vue, as well as using Node.js for server-side development.
				</p>
				<Underline href="/about" />
			</div>
		</section>
		<div class="space-y-9">
			<p class="font-medium text-[1.1rem]">Selected Projects</p>
			<Projects r={3} />
			<Underline text="View all projects" href="/projects" arrowstyle={'right'} />
		</div>
		<div class="space-y-9">
			<p class="font-medium text-[1.1rem]">My Education</p>
			<Education />
		</div>
		<Footer />
	</div>
</section>

<style>
</style>
