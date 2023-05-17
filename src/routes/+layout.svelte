<script>
	import "../app.css";
	import Navbar from '$lib/components/Navbar.svelte';

  </script>

<div>
  <div class="md:static sticky top-0 z-50">
    <Navbar />
  </div>
<div class="flex justify-center md:pb-20 pb-10">
  <div class="md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 w-9/12">
    <slot />
  </div>
</div>
</div>