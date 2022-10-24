<script>
	export let data;
	import ContactDetailsSection from '$lib/Flights/Itinerary/ContactDetailsSection.svelte';
	import TravellerDetailsSection from '$lib/Flights/Itinerary/TravellerDetailsSection.svelte';
	import ReviewDetailsSection from '../../../lib/Flights/Itinerary/ReviewDetailsSection.svelte';
	
	let numberOfTravellers = 1;
	const {params} = data;

	//defining state
	let flightDetails = {
		flightId : params.get("id"),
		flightName : params.get("fname"),
		departureDate : params.get("depart_date"),
		departureTime : params.get("depart_time"),
		arrivalDate : params.get("arrival_date"),
		arrivalTime : params.get("arrival_time"),
		adults : params.get("adults"),
		class : params.get("class"),
		source : params.get("from"),
		destination : params.get("to")
	}
	// console.log(flightDetails);
</script>

<div class="min-h-screen w-full flex justify-center">
	<div class="w-8/12 py-12">
		<div class="grid grid-cols-12 gap-x-6">
			<div class="flex flex-col col-span-9">
				<ReviewDetailsSection details = {flightDetails}/>
				<ContactDetailsSection />
				<TravellerDetailsSection numberOfTravellers={2} />
			</div>
			<div class="col-span-3">
				<div
					class="w-full flex flex-col justify-between h-20v border border-gray-200 rounded-sm p-6"
				>
					<div class="flex flex-col">
						<h3 class="flex items-center justify-between">
							Total Price <span class="font-extrabold">Rs. 6,265</span>
						</h3>
						<p class="flex items-center mt-2 justify-between text-xs text-gray-400">4 adults</p>
					</div>
					<div class="pt-3 border-t border-gray-200">
						<p class="flex items-center justify-between text-xs text-gray-400">
							Base Fare (1 Traveller) <span>Rs 5,217</span>
						</p>
						<p class="flex items-center justify-between text-xs text-gray-400 mt-2">
							Taxes and fees <span>Rs 1,048</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
