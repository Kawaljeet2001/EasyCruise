<script>
	import LoaderFullscreen from '../../Loader/LoaderFullscreen.svelte';
	import SectionHeading from './SectionHeading.svelte';
	export let numberOfTravellers,
		activeSection,
		completeCurrentSection,
		saveDetails,
		isSectionCompleted;

	const parseTravellerData = (data) => {
		const dataArray = new Array(numberOfTravellers);
		for (const item of Object.keys(data)) {
			var index = Number(item[0]) - 1;
			if (!dataArray[index]) dataArray[index] = {};
			dataArray[index] = { ...dataArray[index], [item.substring(1, item.length)]: data[item] };
		}
		return dataArray;
	};

	const isTravellerFormValid = (data) => {
		for (const item of Object.keys(data)) {
			if (!data[item]) return false;
		}
		return true;
	};
	const handleSubmit = (e) => {
		const formData = new FormData(e.target);
		let data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}

		if (!isTravellerFormValid(data)) {
			alert('The form is not valid! All fields are required and cannot be empty!');
			return;
		}
		data = parseTravellerData(data);
		saveDetails({ travellers: data });
		completeCurrentSection();

		setTimeout(() => {
			window.location.href = "/payment";
		},1500)
	};
</script>

<form class="w-full mt-10 pb-10 border-b border-gray-300" on:submit|preventDefault={handleSubmit}>
	{#if isSectionCompleted}
		<LoaderFullscreen/>
	{/if}
	<SectionHeading
		title="Add traveller details"
		sectionNumber={3}
		isActive={activeSection == 'traveller'}
		titleDesc={null}
	/>
	{#if activeSection == 'traveller'}
		{#each Array(numberOfTravellers) as item, index}
			<div class="flex flex-col my-10">
				<h3 class="font-bold text-lg">Adult {index + 1}</h3>
				<p class="text-gray-500 text-sm mt-4">Traveller name and gender</p>
				<div class="grid grid-cols-12 gap-x-6">
					<input
						type="text"
						placeholder="First name"
						class="border col-span-5 border-gray-300 mt-1 p-2 rounded-sm"
						name="{index + 1}firstName"
						value=""
					/>
					<input
						type="text"
						placeholder="Last name"
						class="border col-span-5 border-gray-300 mt-1 p-2 rounded-sm"
						name="{index + 1}lastName"
						value=""
					/>
					<select
						class="border text-gray-400 col-span-2 border-gray-300 mt-1 p-2 rounded-sm bg-transparent"
						name="{index + 1}gender"
					>s
						<option>Gender</option>
						<option>M</option>
						<option>F</option>
					</select>
				</div>
			</div>
		{/each}
		<button
			type="submit"
			class="mt-12 rounded-md text-sm  bg-orange1 hover:bg-orange-700 text-white font-medium flex items-center justify-center py-2.5 px-6"
			>Continue to payment</button
		>
	{/if}
</form>
