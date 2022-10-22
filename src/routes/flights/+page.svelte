<script>
	import FlightJourney from "../../lib/Flights/FlightJourney.svelte";

</script>

<main class="flex flex-col items-center bg-gray1 min-h-screen">
	<div class="grid grid-cols-10 gap-x-6 h-80v w-8/12 py-10">
		<div class="col-span-3 bg-white rounded-lg p-4">
			<h3 class="font-bold text-lg">One Way Price</h3>
		</div>
		<div class="col-span-7 flex flex-col  rounded-lg">
			<FlightJourney/>
			<FlightJourney/>
			<FlightJourney/>
			<FlightJourney/>
		</div>
	</div>
</main>
