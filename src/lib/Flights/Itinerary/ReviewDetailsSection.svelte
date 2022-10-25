<script>
	import SectionHeading from './SectionHeading.svelte';
	export let details, activeSection, completeCurrentSection, isSectionCompleted;
	import { dateInFormat2 } from '../../../utils/dateParser.svelte';
	import ReviewDetailsCompleted from './ReviewDetailsCompleted.svelte';
</script>

<div class="w-full border-b border-gray-300 pb-10">
	{#if isSectionCompleted}
		<ReviewDetailsCompleted {details} />
	{:else if activeSection == 'review'}
		<SectionHeading
			sectionNumber={1}
			title="Review your Itinerary"
			isActive={activeSection == 'review'}
			titleDesc={null}
		/>
		<div class="flex items-center mt-10">
			<h2 class="font-semibold">{details.details.from} -> {details.details.to}</h2>
			<p class="mx-6 text-gray-400">{dateInFormat2(details.depart_date)}</p>
			{#if details.details.arrivalDay == 'next'}
				<div class="bg-orange-100 px-2 py-0.5 rounded-sm text-xs font-medium text-gray-800">
					Arrives Next Day
				</div>
			{:else}
				<div class="bg-green-100 px-2 py-0.5 rounded-sm text-xs font-medium text-gray-800">
					Arrives Same Day
				</div>
			{/if}
		</div>
		<div class="grid grid-cols-10 mt-4 items-center">
			<div class="col-span-2">
				<img
					src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/G8_2x.png"
					alt="Burger"
					class="w-8"
				/>
				<p class="text-sm text-gray-500">{details.details.name}</p>
				<p class="text-sm text-gray-500">{details.details.flightCode}</p>
				<p class="text-sm text-gray-500">{details.class}</p>
			</div>
			<div class="col-span-1 flex flex-col h-5/6 items-center justify-between">
				<div class="h-2 w-2 bg-gray-300 rounded-full" />
				<div class="w-1 border-gray-500 border-dashed h-full" />
				<div class="h-2 w-2 bg-gray-300 rounded-full" />
			</div>
			<div class="col-span-7 flex flex-col">
				<h3>
					<span class="font-bold text-lg">{details.details.departureTime}</span>
					{details.details.fromCode}
					<span class="ml-2 font-medium text-gray-800 text-xs"
						>Kempegowda International Airport, Bangalore, Terminal 1</span
					>
				</h3>
				<p class="text-xs font-light my-6 text-gray-500">{details.details.duration}</p>
				<h3>
					<span class="font-bold text-lg">{details.details.arrivalTime}</span>
					{details.details.toCode}
					<span class="ml-2 font-medium text-gray-800 text-xs"
						>BOM Chatrapati Shivaji Airport, Mumbai, Terminal 1</span
					>
				</h3>
			</div>
		</div>
		<div class="mt-10 w-full ">
			<button
				type="button"
				on:click={() => {
					completeCurrentSection();
				}}
				class="rounded-md text-sm  bg-orange1 hover:bg-orange-700 text-white font-medium flex items-center justify-center py-2.5 px-6 w-36"
				>Continue</button
			>
		</div>
	{/if}

	<!-- {#if activeSection == 'review'}
		
	{/if} -->
</div>
