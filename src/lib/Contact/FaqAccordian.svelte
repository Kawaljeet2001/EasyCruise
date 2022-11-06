<script>
	export let title, desc;
	let isSectionOpen = false;
</script>

<div class="border-b border-gray-200 min-h-10v pb-10 flex flex-col mb-8">
	<div class="flex justify-between py-4">
		<h2 class="font-medium text-xl">{title}</h2>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img
			src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png"
			alt="pop-open-section"
			class="h-6 {isSectionOpen ? 'rotate-180' : 'rotate-0'}"
			on:click={() => (isSectionOpen = !isSectionOpen)}
		/>
	</div>
	{#if isSectionOpen}
		<div class="py-3 w-full">
			<p class="font-light text-lg w-10/12">{desc}</p>
		</div>
	{/if}
</div>
