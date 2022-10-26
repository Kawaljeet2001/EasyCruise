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
		from: 'Delhi',
		to: 'Mumbai',
		class: 'Economy',
		departureDate: new Date().toISOString().split('T')[0],
		adults: 1
	};
</script>

<div class="bg-white w-full p-8 rounded-3xl shadow-lg flex flex-col">
	<div class="grid grid-cols-12 gap-x-2">
		<div class="col-span-8 grid grid-cols-11 gap-x-2">
			<div class="rounded-lg bg-lightBlue p-4 col-span-5 flex flex-col">
				<p class="text-sm text-gray-400">From</p>
				<input
					class="text-xl font-semibold mt-1.5 bg-transparent outline-none"
					bind:value={ticketInput.from}
				/>
				<p class="text-sm text-gray-400">DEL, India Gandhi Int"l Airport</p>
			</div>
			<div class="rounded-lg bg-white p-4 col-span-1 flex flex-col" />
			<div class="rounded-lg bg-lightBlue p-4 col-span-5 flex flex-col">
				<p class="text-sm text-gray-400">To</p>
				<input
					class="text-xl font-semibold mt-1.5 bg-transparent outline-none"
					bind:value={ticketInput.to}
				/>
				<p class="text-sm text-gray-400">BOM, Chhatrapati Shivaji Int"l Airport</p>
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<label class="rounded-lg bg-lightBlue p-4 col-span-2 flex flex-col" for="date-input">
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
		<!-- <div class="rounded-lg bg-lightBlue p-4 col-span-2 flex flex-col">
			<p class="text-sm text-gray-400">Return Date</p>
			<input class="text-xl font-semibold mt-1.5 bg-transparent outline-none" value="22 Oct" />
			<p class="text-sm text-gray-400">Friday, 2022</p>
		</div> -->
	</div>
	<div class="grid grid-cols-12 gap-x-2 w-full pt-4 justify-end">
		<div class="col-span-8 grid grid-cols-11 gap-x-2">
			<select
				bind:value={ticketInput.class}
				name="class"
				class="bg-lightBlue px-3 rounded-lg col-span-3 flex items-center justify-center font-semibold"
			>
				<option value="Economy">Economy</option>
				<option value="Business">Business</option>
				<option value="Executive">Executive</option>
			</select>
			<div
				class="flex items-center justify-center bg-lightBlue rounded-lg col-span-2 relative px-3 h-full"
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
			class="col-span-4 rounded-lg bg-orange1 hover:bg-orange-700 text-white font-bold flex justify-center p-3"
			>Search</a
		>
	</div>
</div>
