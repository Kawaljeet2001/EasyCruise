<script>
	import axios from 'axios';
	import { onMount } from 'svelte';

	let loadContent = false;
	let stats = null;
	const getOverviewStats = async () => {
		try {
			const res = await axios.get('http://localhost:8000/admin/overviewStats');
			// console.log(res.data);
			stats = res.data;
			loadContent = true;
		} catch (err) {
			console.log(err);
		}
	};
	const formatPrice = (price) => {
		var nfObject = new Intl.NumberFormat('en-US');
		var output = nfObject.format(price);
		return output;
	};

	onMount(async () => {
		getOverviewStats();
	});
</script>

<svelte:head>
	<title>Admin - Easycruise</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>
<div class=" w-full p-16 flex bg-gray-50">
	{#if loadContent}
		<div class="flex flex-col w-full">
			<div class="p-6 rounded-md grid grid-cols-12 gap-6 w-full ">
				<div
					class="bg-white h-20v col-span-4 py-8 pl-12 flex flex-col justify-center rounded-md shadow-lg"
				>
					<h3 class="text-7xl font-bold text-orange1">4</h3>
					<p class="mt-2 text-gray-400 font-medium">Company partners</p>
				</div>
				<div
					class="bg-white h-20v col-span-4 py-8 pl-12 flex flex-col justify-center rounded-md shadow-lg"
				>
					<h3 class="text-7xl font-bold text-orange1">{stats.aircrafts.length}</h3>
					<p class="mt-2 text-gray-400 font-medium">Aircrafts available</p>
				</div>
				<div
					class="bg-white h-20v col-span-4 py-8 pl-12 flex flex-col justify-center rounded-md shadow-lg"
				>
					<h3 class="text-7xl font-bold text-orange1">{stats.users.length}</h3>
					<p class="mt-2 text-gray-400 font-medium">Users registered</p>
				</div>
				<div
					class="bg-white h-20v col-span-4 py-8 pl-12 flex flex-col justify-center rounded-md shadow-lg"
				>
					<h3 class="text-7xl font-bold text-orange1">{stats.flights_flown.length}</h3>
					<p class="mt-2 text-gray-400 font-medium">Flights Flown</p>
				</div>
				<div
					class="bg-white h-20v col-span-4 py-8 pl-12 flex flex-col justify-center rounded-md shadow-lg"
				>
					<h3 class="text-7xl font-bold text-blue-500">&#8377; {formatPrice(stats.earnings)}</h3>
					<p class="mt-2 text-gray-400 font-medium">Revenue generated</p>
				</div>
				<!-- <div class="col-span-8 bg-white shadow-lg py-8 pl-12 mt-16">
                    ergeg
                </div> -->
			</div>
		</div>
	{/if}
</div>
