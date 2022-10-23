<script>
	import SectionHeading from './SectionHeading.svelte';
	export let numberOfTravellers;
</script>

<div class="w-full mt-10 pb-10 border-b border-gray-300">
	<SectionHeading title="Add traveller details" sectionNumber={3} isActive={false} />
    {#each Array(numberOfTravellers) as item , index}
	<div class="flex flex-col my-10">
		<h3 class="font-bold text-lg">Adult {index+1}</h3>
		<p class="text-gray-500 text-sm mt-4">Traveller name and gender</p>
		<div class="grid grid-cols-12 gap-x-6">
			<input
				type="text"
				placeholder="First name"
				class="border col-span-5 border-gray-300 mt-1 p-2 rounded-sm"
				name="firstName"
				value=""
			/>
			<input
				type="text"
				placeholder="Last name"
				class="border col-span-5 border-gray-300 mt-1 p-2 rounded-sm"
				name="lastName"
				value=""
			/>
			<input
				type="text"
				placeholder="Gender"
				class="border col-span-2 border-gray-300 mt-1 p-2 rounded-sm"
				name="gender"
				value=""
			/>
		</div>
	</div>
    {/each}

    

	<button
		class="mt-12 rounded-md text-sm  bg-orange1 hover:bg-orange-700 text-white font-medium flex items-center justify-center py-2.5 px-6"
		>Continue to payment</button
	>
</div>
