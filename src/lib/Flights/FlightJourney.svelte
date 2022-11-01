<script>
	//props
	export let details;
	//props
	import { onMount } from 'svelte';
	import FlightJourneyDetails from './FlightJourney/FlightJourneyDetails.svelte';
	import { journeyDepartureDateString, arrivalDateParser } from '../..//utils/dateParser.svelte';
	import { addFlightDetailsToLocalStorage } from '../../utils/localStorge.svelte';
	import LoaderFullscreen from '../Loader/LoaderFullscreen.svelte';
	import { FlightCodeLookup } from '../../utils/FlightCodeLookup.js';
	import { goto } from '$app/navigation';

	//state
	let detailsView = false;
	let flightDetails = false;
	//state

	onMount(() => {
		flightDetails = JSON.parse(localStorage.getItem('flightDetails'));
	});
</script>

{#if flightDetails}
	<div class="bg-white grid grid-cols-12 rounded-md w-full min-h-12v mb-4 shadow-lg">
		<div class="flex flex-col items-start justify-center col-span-2 p-6">
			<img
				src="https://images.ixigo.com/img/common-resources/airline-new/AI.png"
				alt="airline-logo"
				class="h-3/6"
			/>
			<h3 class="mt-2 text-gray-400 ml-2.5 text-sm ">{details.flightDetails.company}</h3>
			<p class="text-gray-400 ml-2.5 text-sm ">{details.flightDetails.flightCode}</p>
		</div>
		<div
			class="relative col-span-5 px-6 py-10 grid grid-cols-11 gap-x-4 border-r-2 border-gray-200 border-dashed"
		>
			{#if !detailsView}
				<button
					type="button"
					class="absolute bottom-2 right-4 text-xs text-orange2 hover:underline"
					on:click={() => {
						detailsView = true;
					}}
					>Flight Detail
				</button>
			{/if}
			<div class="col-span-3 flex flex-col items-end justify-center">
				<p class="font-light">{FlightCodeLookup[details.source]}</p>
				<h3 class="flex items-center text-2xl font-mediuim">{details.flightDetails.departure}</h3>
				<p class="text-gray-300 mt-2 text-sm">{journeyDepartureDateString(flightDetails)}</p>
				<p class="text-gray-300 text-sm">{details.source}</p>
			</div>
			<div class="col-span-5 flex flex-col items-center justify-center">
				<p class="flex items-center text-gray-300 font-medium text-sm">
					{details.flightDetails.duration}
				</p>
				<div class="h-1v w-full bg-gray-300 my-2" />
				<p class="flex items-center text-gray-300 font-medium text-sm">non-stop</p>
			</div>
			<div class="col-span-3 flex flex-col items-start justify-center">
				<p class="font-light">{FlightCodeLookup[details.destination]}</p>
				<h3 class="flex items-center text-2xl font-mediuim">{details.flightDetails.arrival}</h3>
				<p class="text-gray-300 mt-2 text-sm">
					{arrivalDateParser(flightDetails.depart_date, details.arrivalDay)}
				</p>
				<p class="text-gray-300 text-sm">{details.destination}</p>
			</div>
		</div>

		<div class="flex items-center justify-around col-span-5 p-6 ">
			<div class="flex flex-col items-start">
				<h3 class="flex items-end text-3xl font-semibold">
					&#8377;{details.ticketPrice} <span class="text-xs font-light mb-1.5 ml-1">/person</span>
				</h3>
				<p class="text-xs mt-1"><span class="text-orange1 font-bold">{details.ecoRem + details.busRem + details.execRem}</span> Seats left</p>
			</div>
			<button
				class="rounded-sm bg-orange1 hover:bg-orange-700 text-white font-extrabold flex items-center justify-center py-2.5 px-16 shadow-md"
				on:click={async () => {
					//setting the details also in the localStorage section
					addFlightDetailsToLocalStorage(details);
					await goto('/flights/itinerary')
					// window.location.href = '/flights/itinerary';
				}}>BOOK</button
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
{:else}
	<LoaderFullscreen />
{/if}
