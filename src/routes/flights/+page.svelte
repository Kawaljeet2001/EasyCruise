<script>
	import axios from 'axios';
	import FlightJourney from '$lib/Flights/FlightJourney.svelte';
	import LoaderFullscreen from '$lib/Loader/LoaderFullscreen.svelte';
	import { onMount } from 'svelte';
	import CheapestFareCard from '../../lib/Flights/FlightJourney/CheapestFareCard.svelte';
	import { setFlightDetailsToLocalStorage } from '../../utils/localStorge.svelte';

	export let data;
	const { params } = data;
	let flightSearchDetais = null;
	let loadPage = false;

	let orderOfFlights = 'cheapest';
	let availableFlights = [];
	const getFlights = async () => {
		try {
			const res = await axios.get(
				`http://localhost:8000/api/scheduledflights/${flightSearchDetais.from}/${flightSearchDetais.to}/${flightSearchDetais.class}/${flightSearchDetais.depart_date}`
			);
			availableFlights = res.data;
			loadPage = true;
		} catch (err) {
			console.log(err);
		}
	};
	onMount(async () => {
		//storing the parameters in localstorage
		setFlightDetailsToLocalStorage(params);
		flightSearchDetais = JSON.parse(localStorage.getItem('flightDetails'));
		await getFlights();
	});
</script>

<main class="flex flex-col items-center bg-gray1 min-h-80v lg:min-h-screen">
	{#if loadPage}
		{#if availableFlights.length}
			<div class="grid grid-cols-12 mt-6 gap-x-4 w-7/12">
				<CheapestFareCard />
				<div class="bg-white col-span-3 flex flex-col items-start px-4 py-3 rounded-sm shadow-lg">
					<p class="text-gray-400">Sort by:</p>
					<select class="bg-transparent mt-2 -ml-1 text-orange1 font-medium">
						<option value="cheapest">CHEAPEST</option>
						<option value="quickest">QUICKEST</option>
					</select>
				</div>
			</div>
			<!-- <CheapestFareCard /> -->
			<div class="grid grid-cols-8 gap-x-6 w-11/12 md:w-7/12 mt-4">
				<div class="col-span-8 flex flex-col  rounded-lg">
					{#each availableFlights as item, index}
						<FlightJourney details={item} />
					{/each}
				</div>
			</div>
		{:else}
			<div
				class="w-11/12 lg:w-6/12 mt-16 grid grid-cols-9 lg:grid-cols-5 gap-x-2 justify-center"
			>
				<div class="col-span-1 flex flex-col items-end justify-start">
					<p class="errorText -mt-8 font-extrabold text-orange1">!</p>
				</div>
				<div class="col-span-8 lg:col-span-4 flex flex-col">
					<p class="text-2xl lg:text-3xl font-bold w-full lg:w-8/12">
						No flights available. Please try for a different date.
					</p>
					<div class="mt-4 flex items-center w-10/12 lg:w-6/12">
						<a
							href="/"
							class="bg-orange1 hover:bg-orange-700  rounded-md text-white font-bold px-12 py-2.5"
							>Back to Home</a
						>
					</div>
				</div>
			</div>
		{/if}
	{:else}
		<LoaderFullscreen />
	{/if}
</main>

<style>
	.errorText {
		font-size: 90px;
	}
</style>
