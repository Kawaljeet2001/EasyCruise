<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { FLIGHT_LOGO } from '../../../../utils/Constants.js';
	import { page } from '$app/stores';
	import FlightSchedulesList from '../../../../lib/Admin/FlightDetails/FlightSchedulesList.svelte';

	let flightId = $page.params.flightid;
	let flightDetails = null;
	let flightSchedules = null;

	const getFlightDetails = async (flightId) => {
		try {
			const res = await axios.get(`http://localhost:8000/admin/flight/${flightId}`);
			flightDetails = res.data;
		} catch (err) {
			console.log(err);
		}
	};

	const getFlightSchedules = async (flightId) => {
		try {
			const res = await axios.get(`http://localhost:8000/admin/flightschedules/${flightId}`);
			flightSchedules = res.data;
		} catch (err) {
			console.log(err);
		}
	};

	onMount(async () => {
		await getFlightDetails(flightId);
		await getFlightSchedules(flightId);
	});
</script>

<div class=" w-full p-16 flex bg-gray-50">
	<!-- This is the lulu part in the admin page -->
	{#if flightDetails}
		<div class="w-full grid grid-cols-12 gap-x-8">
			<div class="flex flex-col col-span-3 bg-white rounded-md shadow-lg p-12 h-min">
				<div class="flex items-center">
					<img src={FLIGHT_LOGO[flightDetails.company]} alt="company" class="w-32" />
					<div class="pl-4 flex flex-col">
						<p class="mt-2 text-xl font-medium">{flightDetails.flightCode}</p>
						<p>{flightDetails.company}</p>
					</div>
				</div>
				<div class="flex flex-col mt-8">
					<p class="text-lg font-bold">
						Source : <span class="text-gray-400 font-normal ml-2">{flightDetails.source}</span>
					</p>
					<p class="text-lg font-bold">
						Destination : <span class="text-gray-400 font-normal ml-2"
							>{flightDetails.destination}</span
						>
					</p>
					<p class="text-lg font-bold mt-6">
						Departure Time : <span class="text-gray-400 font-normal ml-2"
							>{flightDetails.departure}</span
						>
					</p>
					<p class="text-lg font-bold">
						Arrival Time : <span class="text-gray-400 font-normal ml-2"
							>{flightDetails.arrival}</span
						>
					</p>
					<div class="mt-6 flex flex-col">
						<h3 class="text-xl font-bold">Seating Capacities</h3>
						<p class="mt-2">
							Economy Class : <span class="text-gray-400 font-normal ml-2"
								>{flightDetails.ecoCap}</span
							>
						</p>
						<p class="mt-1">
							Business Class : <span class="text-gray-400 font-normal ml-2"
								>{flightDetails.busCap}</span
							>
						</p>
						<p class="mt-1">
							Executive Class : <span class="text-gray-400 font-normal ml-2"
								>{flightDetails.execCap}</span
							>
						</p>
					</div>
				</div>
			</div>
			{#if flightSchedules}
				<FlightSchedulesList details={flightSchedules} {flightDetails} />
			{:else}
				<p>No scheudles for this flight yet!</p>
			{/if}
		</div>
	{/if}
</div>
