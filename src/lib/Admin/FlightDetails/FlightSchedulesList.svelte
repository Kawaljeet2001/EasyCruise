<script>
	import axios from 'axios';
	import { onMount } from 'svelte';

	export let details;
	export let flightDetails;

	let flightEarnings = null;
	const formatPrice = (price) => {
		var nfObject = new Intl.NumberFormat('en-US');
		var output = nfObject.format(price);
		return output;
	};
	const getScheduleEarnings = async () => {
		try {
			const res = await axios.get(
				`http://localhost:8000/admin/schedulearnings/${flightDetails.id}`
			);
			let resObj = {};
			for (const item of res.data.earnings) {
				resObj[item.scheduleId] = item.earnings;
			}
			flightEarnings = resObj;
		} catch (err) {
			console.log(err);
		}
	};

	onMount(async () => {
		await getScheduleEarnings();
	});
</script>

{#if flightEarnings}
	{#each details as item}
		<div class="mb-2 p-3 w-full shadow-shadow2 grid grid-cols-10">
			<div class="col-span-2 flex flex-col">
				<h3 class="font-medium text-gray-600">Journey Date</h3>
				<p class="font-light mt-2">{item.date}</p>
			</div>
			<div class="col-span-2 flex flex-col">
				<h3 class="font-medium text-gray-600">Economy Booked</h3>
				<p class="font-light mt-2">{flightDetails.ecoCap - item.ecoRem}</p>
			</div>

			<div class="col-span-2 flex flex-col">
				<h3 class="font-medium text-gray-600">Business Booked</h3>
				<p class="font-light mt-2">{flightDetails.busCap - item.busRem}</p>
			</div>
			<div class="col-span-2 flex flex-col">
				<h3 class="font-medium text-gray-600">Executive Booked</h3>
				<p class="font-light mt-2">{flightDetails.execCap - item.execRem}</p>
			</div>
			<div class="col-span-2 flex flex-col">
				<h3 class="font-medium text-gray-600">Revenue Generated</h3>
				<p class="font-medium mt-2 text-orange1">
					&#8377; {formatPrice(flightEarnings[item.id])}
				</p>
			</div>
		</div>
	{/each}
{/if}
