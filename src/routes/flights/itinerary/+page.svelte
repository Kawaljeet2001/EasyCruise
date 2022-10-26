<script>
	export let data;
	const {params} = data;
	import { onMount } from 'svelte';
	import ContactDetailsSection from '$lib/Flights/Itinerary/ContactDetailsSection.svelte';
	import TravellerDetailsSection from '$lib/Flights/Itinerary/TravellerDetailsSection.svelte';
	import ReviewDetailsSection from '$lib/Flights/Itinerary/ReviewDetailsSection.svelte';
	import LoaderFullscreen from '../../../lib/Loader/LoaderFullscreen.svelte';

	let numberOfTravellers = 1;
	let flightDetails = null;
	let activeSection = 'review';
	let isSectionCompleted = {
		review: false,
		contact: false,
		traveller: false
	};
	let personalInformation = {
		contactNo: null,
		contactEmail: null,
		travellers: []
	};
	onMount(() => {
		flightDetails = JSON.parse(localStorage.getItem('flightDetails'));
	});
</script>

{#if flightDetails}
	<div class="min-h-screen w-full flex justify-center">
		<div class="w-8/12 py-12 mt-4">
			<div class="grid grid-cols-12 gap-x-6">
				<div class="flex flex-col col-span-9">
					<ReviewDetailsSection
						details={flightDetails}
						{activeSection}
						isSectionCompleted={isSectionCompleted['review']}
						completeCurrentSection={() => {
							isSectionCompleted['review'] = true;
							activeSection = 'contact';
						}}
					/>
					<ContactDetailsSection
						{activeSection}
						isSectionCompleted={isSectionCompleted['contact']}
						completeCurrentSection={() => {
							isSectionCompleted['contact'] = true;
							activeSection = 'traveller';
						}}
						{personalInformation}
						saveDetails={(e) => {
							personalInformation = { ...personalInformation, ...e };
						}}
					/>
					<TravellerDetailsSection
						numberOfTravellers={2}
						{activeSection}
						isSectionCompleted={isSectionCompleted['traveller']}
						completeCurrentSection={() => {
							isSectionCompleted['traveller'] = true;
						}}
						saveDetails={(e) => {
							personalInformation = { ...personalInformation, ...e };
							console.log(personalInformation);
						}}
					/>
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
{:else}
	<LoaderFullscreen />
{/if}
