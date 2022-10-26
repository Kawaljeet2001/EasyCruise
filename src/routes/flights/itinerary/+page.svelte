<script>
	import { onMount } from 'svelte';
	import ContactDetailsSection from '$lib/Flights/Itinerary/ContactDetailsSection.svelte';
	import TravellerDetailsSection from '$lib/Flights/Itinerary/TravellerDetailsSection.svelte';
	import ReviewDetailsSection from '$lib/Flights/Itinerary/ReviewDetailsSection.svelte';
	import LoaderFullscreen from '../../../lib/Loader/LoaderFullscreen.svelte';
	import PriceSummarySection from '../../../lib/Flights/Itinerary/PriceSummarySection.svelte';

	let numberOfTravellers = null;
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
		
		//checking for userloggedin or not
		flightDetails = JSON.parse(localStorage.getItem('flightDetails'));
		numberOfTravellers = Number(flightDetails.numOfTravellers);
	});
</script>

{#if flightDetails}
	<div class="min-h-screen w-full flex justify-center">
		<div class="w-8/12 py-12 mt-4 grid grid-cols-12 gap-x-6">
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
					{numberOfTravellers}
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
			<PriceSummarySection details = {flightDetails}/>
		</div>
	</div>
{:else}
	<LoaderFullscreen />
{/if}
