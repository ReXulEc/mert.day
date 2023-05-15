<script>
	import "../app.css";
	import Navbar from '$lib/components/Navbar.svelte';

  </script>

<div class="flex justify-center py-20 ">
  <div class="w-4/12">
    <Navbar />
    <slot />
  </div>
</div>