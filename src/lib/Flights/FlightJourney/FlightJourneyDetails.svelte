<script>
	import { onMount } from 'svelte';
	export let details;
	export let closeSection;
	import { journeyDepartureDateString, arrivalDateParser } from '../../../utils/dateParser.svelte';
	import { FlightCodeLookup } from '../../../utils/FlightCodeLookup.js';
	import {FLIGHT_LOGO} from "../../../utils/Constants.js";
	let flightDetails = false;
	onMount(() => {
		flightDetails = JSON.parse(localStorage.getItem('flightDetails'));
	});
</script>

{#if flightDetails}
	<div class="col-span-12 border-t-2 border-dashed border-gray-200 rounded-sm w-full">
		<div class="border-b-2 py-3 border-dashed border-gray-200 flex items-center justify-end px-4">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<p class="text-gray-400 text-xl cursor-pointer" on:click={closeSection}>X</p>
		</div>
		<div
			class="border-b-2 py-3 px-6 border-dashed border-gray-200 flex items-center justify-between "
		>
			<div class="flex items-center">
				<img
					src={FLIGHT_LOGO[details.flightDetails.company]}
					alt="airline-logo"
					class="h-6"
				/>
				<li class="font-light mx-4 list-none">{details.flightDetails.company} {details.flightDetails.flightCode}</li>
				<li class="font-light mx-4">{details.flightDetails.flightCode}</li>
				<li class="font-light mx-4">{flightDetails.class}</li>
			</div>
			<p class="hidden lg:block text-green-700 text-sm">usually on time</p>
		</div>
		<div class="px-4 grid grid-cols-12">
			<div class="col-span-12 lg:col-span-8 gap-x-4 grid grid-cols-12 lg:border-r-2 border-gray-200 border-dashed">
				<div class="py-6 px-4 col-span-4 flex flex-col items-start">
					<p class="text-3xl font-light">
						{FlightCodeLookup[details.source]} <span class="font-medium">{details.flightDetails.departure}</span>
					</p>
					<p class="text-gray-400 text-sm mt-1">
						{journeyDepartureDateString(flightDetails)}
					</p>
					<p class="text-gray-400 text-sm">Indira Gandhi Intl Airport</p>
					<p class="text-gray-400 text-sm">{details.source}</p>
				</div>
				<div class="py-6 col-span-4 lg:col-span-2 flex items-center justify-center">
					<p class="flex items-center text-gray-400">{details.flightDetails.duration}</p>
				</div>
				<div class="py-6 px-4 col-span-4 lg:col-span-5 flex flex-col items-start lg:items-end">
					<p class="text-3xl font-light">
						{FlightCodeLookup[details.destination]} <span class="font-medium">{details.flightDetails.arrival}</span>
					</p>
					<p class="text-gray-400 text-sm mt-1">
						{arrivalDateParser(flightDetails.depart_date, details.arrivalDay)}
					</p>
					<p class="text-gray-400 text-sm">Indira Gandhi Intl Airport</p>
					<p class="text-gray-400 text-sm">{details.destination}</p>
				</div>
			</div>
			<div class="col-span-4" />
		</div>
	</div>
{/if}
