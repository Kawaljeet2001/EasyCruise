<script>
	export let details;
	import { dateInFormat2 } from '../../../utils/dateParser.svelte';
	let sectionNumber = 1;
</script>

<div class="flex items-center">
	<div
		class="h-8 w-8 flex items-center justify-center rounded-full border mr-4 bg-green-600 text-white border-green-600"
	>
		<img
			src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/96/ffffff/external-tick-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
			alt="tick"
		/>
	</div>
	<div class="grid grid-cols-12 gap-x-6 w-full">
		<div class="col-span-3 flex flex-col">
			<p class="font-bold">{details.details.flightDetails.company}</p>
			<p class="text-sm">{details.details.flightDetails.flightCode}</p>
		</div>
		<div class="col-span-5 flex flex-col">
			<p class="font-bold ">{details.details.source} -> {details.details.destination}</p>
			<p class="text-sm">{dateInFormat2(details.depart_date)}</p>
		</div>
		<div class="col-span-4 flex flex-col">
			<p class="font-bold ">{details.details.flightDetails.departure} - {details.details.flightDetails.arrival}</p>
			<p class="text-sm">{details.details.flightDetails.duration}</p>
		</div>
	</div>
</div>
