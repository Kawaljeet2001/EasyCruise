<script>
	import ContactDetailsSection from '$lib/Flights/Itinerary/ContactDetailsSection.svelte';
	import TravellerDetailsSection from '$lib/Flights/Itinerary/TravellerDetailsSection.svelte';
	import SectionHeading from '$lib/Flights/Itinerary/SectionHeading.svelte';

	let numberOfTravellers = 1;
</script>

<div class="min-h-screen w-full flex justify-center">
	<div class="w-8/12 py-12">
		<div class="grid grid-cols-12 gap-x-6">
			<div class="flex flex-col col-span-9">
				<div class="w-full border-b border-gray-300 pb-10">
					<SectionHeading sectionNumber={1} title="Review your Itinerary" isActive={true} />
					<div class="flex items-center mt-10">
						<h2 class="font-semibold">Bangalore -> Mumbai</h2>
						<p class="mx-6 text-gray-400">Sat, 22 Oct 2022</p>
						<div class="bg-orange-100 px-2 py-0.5 rounded-sm text-xs font-medium text-gray-800">
							Arrives Next Day
						</div>
					</div>
					<div class="grid grid-cols-10 mt-4 items-center">
						<div class="col-span-2">
							<img
								src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/G8_2x.png"
								alt="Burger"
								class="w-8"
							/>
							<p class="text-sm text-gray-500">GO FIRST</p>
							<p class="text-sm text-gray-500">G8-399</p>
							<p class="text-sm text-gray-500">Economy</p>
						</div>
						<div class="col-span-1 flex flex-col h-5/6 items-center justify-between">
							<div class="h-2 w-2 bg-gray-300 rounded-full" />
							<div class="w-1 border-gray-500 border-dashed h-full" />
							<div class="h-2 w-2 bg-gray-300 rounded-full" />
						</div>
						<div class="col-span-7 flex flex-col">
							<h3>
								<span class="font-bold text-lg">22:35</span> BLR
								<span class="ml-2 font-medium text-gray-800 text-xs"
									>Kempegowda International Airport, Bangalore, Terminal 1</span
								>
							</h3>
							<p class="text-xs font-light my-6 text-gray-500">1h 40m</p>
							<h3>
								<span class="font-bold text-lg">00:15</span> BOM
								<span class="ml-2 font-medium text-gray-800 text-xs"
									>BOM Chatrapati Shivaji Airport, Mumbai, Terminal 1</span
								>
							</h3>
						</div>
					</div>
					<div class="mt-10 w-full ">
						<button
							class="rounded-md text-sm  bg-orange1 hover:bg-orange-700 text-white font-medium flex items-center justify-center py-2.5 px-6 w-36"
							>Continue</button
						>
					</div>
				</div>
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
