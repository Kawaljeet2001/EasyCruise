<script>
	import FlightJourneyDetails from './FlightJourney/FlightJourneyDetails.svelte';
	export let details;

	let detailsView = false;
</script>

<div class="bg-white grid grid-cols-12 rounded-md w-full min-h-12v mb-4 shadow-lg">
	<div class="flex flex-col items-start justify-center col-span-2 p-6">
		<img
			src="https://images.ixigo.com/img/common-resources/airline-new/AI.png"
			alt="airline-logo"
			class="h-3/6"
		/>
		<h3 class="mt-2 text-gray-400 ml-2.5 text-sm ">{details.name}</h3>
		<p class="text-gray-400 ml-2.5 text-sm ">{details.flightCode}</p>
	</div>
	<div
		class="relative col-span-5 px-6 py-10 grid grid-cols-11 gap-x-4 border-r-2 border-gray-200 border-dashed"
	>
		{#if !detailsView}
			<button
				type="button"
				class="absolute bottom-2 right-4 text-xs text-orange2"
				on:click={() => {
					detailsView = true;
				}}>Flight Detail v</button
			>
		{/if}
		<div class="col-span-3 flex flex-col items-end justify-center">
			<p class="font-light">DEL</p>
			<h3 class="flex items-center text-2xl font-mediuim">{details.departureTime}</h3>
			<p class="text-gray-300 mt-2 text-sm">Mon, 24 Oct</p>
			<p class="text-gray-300 text-sm">New Delhi</p>
		</div>
		<div class="col-span-5 flex flex-col items-center justify-center">
			<p class="flex items-center text-gray-300 font-medium text-sm">{details.duration}</p>
			<div class="h-1v w-full bg-gray-300 my-2" />
			<p class="flex items-center text-gray-300 font-medium text-sm">non-stop</p>
		</div>
		<div class="col-span-3 flex flex-col items-start justify-center">
			<p class="font-light">DEL</p>
			<h3 class="flex items-center text-2xl font-mediuim">{details.arrivalTime}</h3>
			<p class="text-gray-300 mt-2 text-sm">Mon, 24 Oct</p>
			<p class="text-gray-300 text-sm">New Delhi</p>
		</div>
	</div>

	<div class="flex items-center justify-around col-span-5 p-6 ">
		<h3 class="flex items-center text-3xl text-orange2">&#8377;{details.pricePerPerson}</h3>
		<a
			class="rounded-sm bg-orange1 text-white font-extrabold flex items-center justify-center py-2.5 px-16 shadow-md"
			href="/flights/itinerary">BOOK</a
		>
	</div>
	{#if detailsView}
		<FlightJourneyDetails
			{details}
			closeSection={() => {
				detailsView = false;
			}}
		/>
	{/if}
</div>
