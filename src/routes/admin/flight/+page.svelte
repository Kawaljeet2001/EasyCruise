<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { FLIGHT_LOGO } from '../../../utils/Constants.js';
	import { FlightCodeLookup } from '../../../utils/FlightCodeLookup.js';
	import { goto } from '$app/navigation';

	let flights = null;
	const getFlights = async () => {
		try {
			const res = await axios.get('http://localhost:8000/admin/flights');
			flights = res.data;
		} catch (err) {
			console.log(err);
		}
	};

	onMount(async () => {
		await getFlights();
	});
</script>

<div class="bg-gray-50 p-16 w-full overflow-scroll">
	<h3 class="text-5xl font-extrabold">Flights</h3>
	<p class="mt-2 ">List of all aircrafts and their routes.</p>
	<div class="flex flex-col mt-8 overflow-y-scroll">
		{#if flights}
			{#each flights as details}
				<div class="bg-white grid grid-cols-12 rounded-md w-full min-h-12v mb-1 shadow-lg">
					<div class="flex flex-col items-start justify-center col-span-2 py-6 pl-10">
						<img src={FLIGHT_LOGO[details.company]} alt="airline-logo" class="h-14" />
						<h3 class="mt-2 text-gray-400  text-sm ">{details.company}</h3>
						<p class="text-gray-400  text-sm ">{details.flightCode}</p>
					</div>
					<div
						class="relative col-span-5 px-6 py-10 grid grid-cols-11 gap-x-4 border-r-2 border-gray-200 border-dashed"
					>
						<div class="col-span-3 flex flex-col items-end justify-center">
							<p class="font-light">{FlightCodeLookup[details.source]}</p>
							<h3 class="flex items-center text-2xl font-medium">{details.departure}</h3>
							<p class="text-gray-300 text-sm">{details.source}</p>
						</div>
						<div class="col-span-5 flex flex-col items-center justify-center">
							<p class="flex items-center text-gray-300 font-medium text-sm">
								{details.duration}
							</p>
							<div class="h-1v w-full bg-gray-300 my-2" />
							<p class="flex items-center text-gray-300 font-medium text-sm">non-stop</p>
						</div>
						<div class="col-span-3 flex flex-col items-start justify-center">
							<p class="font-light">{FlightCodeLookup[details.destination]}</p>
							<h3 class="flex items-center text-2xl font-medium">{details.arrival}</h3>
							<p class="text-gray-300 text-sm">{details.destination}</p>
						</div>
					</div>

					<div class="flex items-center justify-around col-span-5 p-6 ">
						<button
							class="rounded-md bg-orange1 hover:bg-orange-700 text-white font-extrabold flex items-center justify-center py-4 px-16 shadow-md"
							on:click={async () => {
								await goto(`/admin/flight/${details.id}`);
							}}>View more details</button
						>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>
