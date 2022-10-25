<script>
	export let title, sectionNumber, isActive, titleDesc;
</script>

<div class="flex items-center">
	<div
		class="h-8 w-8 flex items-center justify-center rounded-full border mr-4 {isActive
			? 'border-gray-800 text-black '
			: 'border-gray-400 text-gray-400'}"
	>
		{sectionNumber}
	</div>
	<div class="flex flex-col">
		<h3 class=" {isActive ? 'text-3xl font-bold' : 'text-2xl font-light text-gray-400'}">
			{title}
		</h3>
		{#if isActive && titleDesc}
			<p class="text-xs mt-2 text-gray-500">{titleDesc}</p>
		{/if}
	</div>
</div>
