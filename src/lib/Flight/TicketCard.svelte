<script>
	const parseDateUtil = (departureDate, toReturn) => {
		const dateField = new Date(departureDate);
		const date = dateField.getDate();
		const month = dateField.toLocaleString('default', { month: 'long' });
		const day = dateField.toLocaleString('default', { weekday: 'long' });
		const year = dateField.getFullYear();
		if (toReturn == 'dateString') return date + ' ' + month.substring(0, 3);
		else return day + ', ' + year;
	};

	let ticketInput = {
		from: 'New Delhi',
		to: 'Mumbai',
		class: 'Economy',
		departureDate: new Date().toISOString().split('T')[0],
		adults: 1
	};

	const swapDestinations = () => {
		let tempto = ticketInput.to;
		let tempfrom = ticketInput.from;

		ticketInput = { ...ticketInput, to: tempfrom, from: tempto };
	};
</script>

<div class="bg-white w-full p-8 rounded-3xl shadow-lg flex flex-col">
	<div class="grid grid-cols-12 gap-x-2">
		<div class="col-span-12 lg:col-span-8 grid grid-cols-12 lg:grid-cols-11 lg:gap-x-2">
			<div class="rounded-lg bg-lightBlue p-4 col-span-12 lg:col-span-5 flex flex-col">
				<p class="text-sm text-gray-400">From</p>
				<input
					class="text-xl font-semibold mt-1.5 bg-transparent outline-none"
					bind:value={ticketInput.from}
				/>
				<p class="text-sm text-gray-400">DEL, India Gandhi Int"l Airport</p>
			</div>
			<div
				class="rounded-lg bg-white p-4 col-span-1 hidden lg:flex flex-col items-center justify-center"
			>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					class="cursor-pointer"
					on:click={swapDestinations}
					><rect width="32" height="32" rx="16" fill="white" /><g clip-path="url(#clip0_160_1650)"
						><path
							d="M24.1666 14.8333H7.83325"
							stroke="#3366CC"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/><path
							d="M7.83325 14.8333L13.6666 9"
							stroke="#3366CC"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/><path
							d="M7.83342 18.3335H24.1667"
							stroke="#3366CC"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/><path
							d="M24.1667 18.3334L18.3334 24.1667"
							stroke="#3366CC"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/><circle
							cx="16"
							cy="16"
							r="13.375"
							stroke="#3366CC"
							stroke-width="1.25"
							stroke-linecap="round"
							stroke-linejoin="round"
						/></g
					><defs
						><clipPath id="clip0_160_1650"
							><rect width="28" height="28" fill="white" transform="translate(2 2)" /></clipPath
						></defs
					></svg
				>
			</div>
			<div class="rounded-lg bg-lightBlue p-4 col-span-12 lg:col-span-5 flex flex-col mt-4 lg:mt-0">
				<p class="text-sm text-gray-400">To</p>
				<input
					class="text-xl font-semibold mt-1.5 bg-transparent outline-none"
					bind:value={ticketInput.to}
				/>
				<p class="text-sm text-gray-400">BOM, Chhatrapati Shivaji Int"l Airport</p>
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<label
			class="rounded-lg bg-lightBlue p-4 col-span-12 mt-4 lg:mt-0 lg:col-span-4 flex flex-col"
			for="date-input"
		>
			<p class="text-sm text-gray-400">From Date</p>
			<div class="flex flex-col">
				<p class="mt-2 text-xl font-semibold">
					{parseDateUtil(ticketInput.departureDate, 'dateString')}
				</p>
				<input
					class="h-0 w-0 bg-transparent outline-none"
					id="date-input"
					type="date"
					bind:value={ticketInput.departureDate}
				/>
			</div>
			<p class="text-sm mt-0 text-gray-400">
				{parseDateUtil(ticketInput.departureDate, 'dayString')}
			</p>
		</label>
	</div>
	<div class="grid grid-cols-12 gap-x-2 w-full pt-4 justify-end">
		<div class="col-span-12 lg:col-span-8 grid grid-cols-12 lg:grid-cols-11 gap-x-2">
			<select
				bind:value={ticketInput.class}
				name="class"
				class="bg-lightBlue py-3 lg:py-0 px-3 rounded-lg col-span-6 lg:col-span-3 flex items-center justify-center font-semibold"
			>
				<option value="Economy">Economy</option>
				<option value="Business">Business</option>
				<option value="Executive">Executive</option>
			</select>
			<div
				class="flex items-center justify-center bg-lightBlue rounded-lg col-span-6 lg:col-span-2 relative px-3 h-full"
			>
				<select
					bind:value={ticketInput.adults}
					name="class"
					class=" font-semibold bg-transparent w-full"
				>
					{#each Array(9) as item, index}
						<option value={index + 1}>{index + 1}</option>
					{/each}
				</select>
				<p class="absolute top-1/4 left-1/4 font-semibold text-black z-20">
					Adult{#if ticketInput.adults > 1}s{/if}
				</p>
			</div>
		</div>
		<a
			href={`/flights?from=${ticketInput.from}&to=${ticketInput.to}&depart_date=${ticketInput.departureDate}&class=${ticketInput.class}&adults=${ticketInput.adults}`}
			class="col-span-12 mt-4 lg:mt-0 lg:col-span-4 rounded-lg bg-orange1 hover:bg-orange-700 text-white font-bold flex justify-center p-3"
			>Search</a
		>
	</div>
</div>
