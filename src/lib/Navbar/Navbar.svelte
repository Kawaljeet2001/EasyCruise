<script>
	let isVisible = true;
</script>

{#if isVisible}
	<nav class="bg-white p-4 w-full sticky top-0 shadow-xl h-16 flex items-center justify-end z-20">
		<div class="flex items-center justify-between">
			<a class="mx-4 text-lg" href="/">Flights</a>
			<a class="mx-4 text-lg" href="/support">Support</a>
			<a class="mx-4 text-lg" href="/signin">Signin</a>
		</div>
	</nav>
{/if}
