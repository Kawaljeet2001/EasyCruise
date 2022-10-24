<script>
	import axios from 'axios';
	import FlightJourney from '$lib/Flights/FlightJourney.svelte';
	import LoaderFullscreen from '$lib/Loader/LoaderFullscreen.svelte';
	import { onMount } from 'svelte';
	import CheapestFareCard from '../../lib/Flights/FlightJourney/CheapestFareCard.svelte';

	export let data;
	const { params } = data;
	let loadPage = false;

	let availableFlights = [];
	const setFlightDetails = () => {
		let flightDetails = {};
		flightDetails['from'] = params.get('from');
		flightDetails['to'] = params.get('to');
		flightDetails['depart_date'] = params.get('depart_date');
		flightDetails['class'] = params.get('class');

		localStorage.setItem('flightDetails', JSON.stringify(flightDetails));
	};
	const getFlights = async () => {
		try {
			const res = await axios.get('http://localhost:5000/api/flights');
			availableFlights = res.data.data;
			loadPage = true;
		} catch (err) {
			console.log(err);
		}
	};
	onMount(async () => {
		//storing the parameters in localstorage
		setFlightDetails();
		await getFlights();
	});
</script>

<main class="flex flex-col items-center bg-gray1 min-h-screen">
	{#if loadPage}
		<CheapestFareCard />
		<div class="grid grid-cols-8 gap-x-6 w-7/12 mt-4">
			<div class="col-span-8 flex flex-col  rounded-lg">
				{#each availableFlights as item, index}
					<FlightJourney details={item} />
				{/each}
			</div>
		</div>
	{:else}
		<LoaderFullscreen />
	{/if}
</main>
