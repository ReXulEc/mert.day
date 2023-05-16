<script>
	import "../app.css";
	import Navbar from '$lib/components/Navbar.svelte';

  </script>

<div class="flex justify-center py-20 ">
  <div class="md:w-4/12 w-9/12">
    <Navbar />
    <slot />
  </div>
</div>