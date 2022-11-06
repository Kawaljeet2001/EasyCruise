<script>
	export let paymentMethod;
	import { onMount } from 'svelte';
	import { ticketBookingDetails, finalPayabaleAmount, user } from '../../stores/store.js';
	import LoaderFullscreen from '../Loader/LoaderFullscreen.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import axios from 'axios';

	let transactionFee = 35;
	let grandTotalPayable = 0;
	let submitPayment = 'none';
	const postJourneyDetails = async (
		data,
		flightId,
		scheduleId,
		userId,
		numberOfTravellers,
		cabinClass
	) => {
		try {
			const res = await axios.post(
				`http://localhost:8000/api/journey/${flightId}/${scheduleId}/${userId}/${numberOfTravellers}/${cabinClass}`,
				data,
				{ withCredentials: true }
			);
			if (res.data) {
				//also update the schedule by decrementing the available sats;
				const seats = await axios.patch(
					`http://localhost:8000/api/updateSchedule/${scheduleId}/${cabinClass}/${numberOfTravellers}`,
					{},
					{ withCredentials: true }
				);

				if (seats.data) {
					console.log(seats.data);
					let pnr = res.data.pnr;
					//set the pnr to localStorage
					localStorage.setItem('pnr', pnr);
					window.location.href = '/flights/confirmation';
				}

				//allot the seats based on the previously existing seats
			}
		} catch (err) {
			console.log(err);
		}
	};
	const handlePaymentSubmit = async () => {
		submitPayment = 'process';
		$ticketBookingDetails = { ...$ticketBookingDetails, amountPayed: grandTotalPayable };
		var uuid = uuidv4();
		var hex = '0x' + uuid.replace(/-/g, '');
		let pnr_string = BigInt(hex);
		pnr_string = String(pnr_string);
		let pnr = pnr_string.slice(0, 12);
		$ticketBookingDetails = { ...$ticketBookingDetails, pnr: pnr };

		console.log($ticketBookingDetails);
		//make a request
		let senddata = {};
		senddata['pnr'] = $ticketBookingDetails.pnr;
		senddata['amountPayed'] = $ticketBookingDetails.amountPayed;
		var obj = JSON.parse(JSON.stringify($ticketBookingDetails));

		// delete senddata.metaDatatemp.pnr;
		delete obj.flightId;
		delete obj.scheduleId;
		delete obj.amountPayed;
		delete obj.pnr;
		obj.paymentMethod = paymentMethod;
		senddata['metaData'] = JSON.stringify(obj);

		console.log('the final details are', $ticketBookingDetails);
		await postJourneyDetails(
			senddata,
			$ticketBookingDetails.flightId,
			$ticketBookingDetails.scheduleId,
			$user.data.id,
			$ticketBookingDetails['travellerDetails'].length,
			$ticketBookingDetails.itinery.cabinClass
		);
	};

	onMount(() => {
		grandTotalPayable = $finalPayabaleAmount + transactionFee;
	});
</script>

{#if submitPayment == 'process'}
	<LoaderFullscreen />
{/if}
<div class="col-span-12 lg:col-span-5 bg-white flex flex-col justify-between px-4 lg:px-24 py-20">
	<div class="flex flex-col justify-between">
		<h3 class="text-2xl font-bold">Order Summary</h3>
		<div class="pt-8 pb-12 border-b border-gray-200">
			<p class="text-gray-400 flex items-center justify-between">
				Balance Amount: <span class="text-black font-medium">Rs. {$finalPayabaleAmount}</span>
			</p>
			<p class="text-gray-400 mt-4 flex items-center justify-between">
				Transaction Charges: <span class="text-gray-900 text-sm">Rs. {transactionFee}</span>
			</p>
		</div>
		<div class="py-6">
			<p class="font-medium flex items-center justify-between">
				Total: <span class="text-lg font-medium">Rs. {grandTotalPayable}</span>
			</p>
			<p class="text-gray-400 text-sm mt-1">(Incl Charges)</p>
		</div>
		<button
			type="button"
			on:click={handlePaymentSubmit}
			class="bg-orange1 hover:bg-orange-700 text-white mt-6 font-bold px-8 py-3 rounded-md"
			>Make Payment</button
		>
	</div>

	<p class="text-xs text-gray-400 mt-8 lg:mt-0">
		* All payment transactions are end to end encrypted. "Company name" does not store your payment
		information on our servers.
	</p>
</div>
