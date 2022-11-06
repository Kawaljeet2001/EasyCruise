<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import Barcode from 'svelte-barcode';
	import TicketPassangerDetails from '../../../lib/Confirmation/TicketPassangerDetails.svelte';
	import { goto } from '$app/navigation';
	import LoaderFullscreen from '../../../lib/Loader/LoaderFullscreen.svelte';
	import { FlightCodeLookup } from '../../../utils/FlightCodeLookup.js';

	let ticketDetails = null;
	const getTicketInformation = async (pnr) => {
		try {
			const res = await axios.get(`http://localhost:8000/api/journey/${pnr}`);
			ticketDetails = res.data;
			ticketDetails['metaData'] = JSON.parse(ticketDetails['metaData']);
			// localStorage.removeItem('pnr');
		} catch (err) {
			console.log(err);
		}
	};

	const handlePrintTicket = () => {
		window.print();
	};

	const getSourceDestinationString = (source, destination) => {
		//first three letter of both source and destination and then store them

		return FlightCodeLookup[source] + '->' + FlightCodeLookup[destination];
	};
	let pnr = null;
	onMount(async () => {
		pnr = localStorage.getItem('pnr');
		if (!pnr) {
			goto('/404');
		}
		await getTicketInformation(pnr);
	});
</script>

{#if ticketDetails && pnr}
	<div class="min-h-70v w-full flex flex-col items-center bg-gray-100">
		<h3 class="mt-16 mb-4 text-left w-9/12 text-xl font-medium text-orange1">
			Thanks for booking the ticket! Your ticket details are mentioned below.
		</h3>
		<div class="w-11/12 lg:w-9/12 grid grid-cols-12 gap-x-6 h-3/6 ">
			<div class="flex flex-col rounded-xl p-10 bg-white col-span-12 lg:col-span-4">
				<div class="flex flex-col border-b-2 border-dashed border-gray-300 pb-12">
					<div class="flex items-center justify-between">
						<p
							class="border border-orange1 text-orange1 rounded-3xl font-bold py-2.5 px-6 flex items-center justify-center"
						>
							{ticketDetails.metaData.itinery.cabinClass} Class
						</p>
						<p class="text-xl font-medium">
							{getSourceDestinationString(
								ticketDetails.flightDetails.source,
								ticketDetails.flightDetails.destination
							)}
						</p>
					</div>
					<p class="font-bold mt-8 text-2xl">
						{ticketDetails.metaData.travellerDetails.length} Flight Tickets
					</p>
					<div class="mt-4 grid grid-cols-8 gap-x-12 w-full">
						<div class="flex flex-col col-span-4 my-4">
							<p class="text-gray-500 text-sm">Departure Gate</p>
							<p class="text-xl mt-2 font-bold">G 12</p>
						</div>
						<div class="flex flex-col col-span-4 my-4">
							<p class="text-gray-500 text-sm">Passengers</p>
							<p class="text-xl mt-2 font-bold">
								{ticketDetails.metaData.travellerDetails.length} Adults
							</p>
						</div>
						<div class="flex flex-col col-span-4 my-4">
							<p class="text-gray-500 text-sm">Date of Journey</p>
							<p class="text-xl mt-2 font-bold">{ticketDetails.metaData.itinery.date}</p>
						</div>
						<div class="flex flex-col col-span-4 my-4">
							<p class="text-gray-500 text-sm">Flight No</p>
							<p class="text-xl mt-2 font-bold">{ticketDetails.flightDetails.flightCode}</p>
						</div>
						<div class="flex flex-col col-span-4 my-4">
							<p class="text-gray-500 text-sm">Cabin Class</p>
							<p class="text-xl mt-2 font-bold">{ticketDetails.metaData.itinery.cabinClass}</p>
						</div>

						<div class="flex flex-col col-span-4 my-4">
							<p class="text-gray-500 text-sm">Seats</p>
							<p class="text-xl mt-2 font-bold">21B, 22B, 23B</p>
						</div>
					</div>
				</div>
				<div class="my-4 relative w-full">
					<div class="bg-gray-100 h-16 w-16 rounded-full absolute -top-12 -left-16" />
					<div class="bg-gray-100 h-16 w-16 rounded-full absolute -top-12 -right-16" />
				</div>
				<!-- <Barcode
				value="http://localhost:5173/pnr"
				elementTag={'canvas'}
				defaultOptions
				options={{
					format: 'CODE128',
					width: 2,
					height: 100,
					text: '',
					textAlign: 'center',
					textPosition: 'bottom',
					textMargin: 2,
					fontSize: 0,
					background: '#ffffff',
					lineColor: '#000000'
				}}
			/> -->
				<p class="w-full text-center mt-2">PNR : {pnr}</p>
			</div>
			<div class="flex flex-col justify-between rounded-xl p-10 bg-white mt-6 lg:mt-0 col-span-12 lg:col-span-8">
				<div class="w-full shadow-shadow2 bg-white py-6 px-8 rounded-md grid grid-cols-12 gap-x-4">
					<div class="col-span-3 flex flex-col">
						<p class="text-gray-300 text-sm">Departure</p>
						<p class="text-xl mt-1 font-bold">{ticketDetails.flightDetails.departure}</p>
					</div>
					<div class="col-span-3 flex flex-col">
						<p class="text-gray-300 text-sm">Arrival</p>
						<p class="text-xl mt-1 font-bold">{ticketDetails.flightDetails.arrival}</p>
					</div>
					<div class="col-span-6 lg:col-span-3 flex flex-col">
						<p class="text-gray-300 text-sm">Duration</p>
						<p class="text-xl mt-1 font-bold">{ticketDetails.flightDetails.duration}</p>
					</div>
					<div class="col-span-6 lg:mt-0 mt-2 lg:col-span-3 flex flex-col">
						<p class="text-gray-300 text-sm">Payment method</p>
						<p class="text-xl mt-1 font-bold">{ticketDetails.metaData.paymentMethod}</p>
					</div>
				</div>
				<div class="grid grid-cols-2 py-4 lg:gap-4 overflow-y-auto h-40v">
					{#each ticketDetails.metaData.travellerDetails as traveller}
						<TicketPassangerDetails data={traveller} />
					{/each}
				</div>

				<p class="text-sm text-gray-300">
					Note: Please carry the E-copy of this ticket along with your boaring pass while boarding
					the flight. In case of any difficulty, contact the onboard service staff.
				</p>
			</div>
		</div>
		<div class="flex items-center justify-end w-9/12 mb-10 my-6">
			<button
				type="button"
				class="text-white font-medium py-3 px-8 mr-4 text-lg rounded-md bg-blue-600 hover:bg-blue-700"
				on:click={handlePrintTicket}
				>Print ticket
			</button>
			<a
				href="/"
				class="text-white font-medium py-3 px-8 text-lg rounded-md bg-orange1 hover:bg-orange-700"
				>Book another ticket</a
			>
		</div>
	</div>
{:else}
	<div class="confirmscreen" />
	<LoaderFullscreen />
{/if}

<style>
	.confirmscreen {
		min-height: 70vh;
	}
</style>
