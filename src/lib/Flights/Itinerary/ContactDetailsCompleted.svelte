<script>
	export let details;
</script>

<div class="flex items-center">
	<div
		class="h-8 w-8 flex items-center justify-center rounded-full border mr-4 bg-green-600 text-white border-green-600"
	>
		<img
			src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/96/ffffff/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
			alt="tick"
		/>
	</div>
	<div class="flex flex-col">
		<p class="font-bold">{details.contactEmail}, {details.contactNo.number}</p>
		<p class="text-sm text-gray-500 mt-1">E ticket will be send here.</p>
	</div>
</div>
