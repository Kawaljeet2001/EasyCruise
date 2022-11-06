<script>
	export let activeSection, completeCurrentSection, saveDetails, isSectionCompleted, personalInformation;
	import ContactDetailsCompleted from './ContactDetailsCompleted.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import {ticketBookingDetails} from "../../../stores/store.js";
	const isContactFormValid = (item) => {
		for (const key of Object.keys(item)) {
			if (!item[key]) return false;
		}
		return true;
	};
	const handleSubmit = (e) => {
		const formData = new FormData(e.target);
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		data['contactNo'] = {
			code: data['contactNo_1'],
			number: data['contactNo_2']
		};
		delete data['contactNo_1'];
		delete data['contactNo_2'];
		if (!isContactFormValid(data))
			alert('The form is not valid! All fields are required and cannot be empty!');
		else {
			$ticketBookingDetails = {...$ticketBookingDetails , "contactDetails" : data};
			saveDetails(data);
			completeCurrentSection();
		}
	};
</script>

<div class="w-full mt-10 pb-10 border-b border-gray-300">
	{#if isSectionCompleted}
		<ContactDetailsCompleted details = {personalInformation}/>
	{:else}
		<SectionHeading
			title="Add contact details"
			sectionNumber={2}
			isActive={activeSection == 'contact'}
			titleDesc="E-ticket will be sent to this email address and phone number"
			
		/>
		{#if activeSection == 'contact'}
			<form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
				<p class="text-sm text-gray-500 mt-6">Mobile number</p>
				<div class="grid grid-cols-12 lg:grid-cols-10 gap-x-4 lg:gap-x-6 w-full lg:w-7/12 items-center ">
					<input
						type="text"
						class="border col-span-2 border-gray-300 mt-1 p-2 rounded-sm"
						name="contactNo_1"
						value="+91"
					/>
					<input
						type="text"
						placeholder="Mobile number"
						class="border col-span-10 lg:col-span-8 border-gray-300 mt-1 p-2 rounded-sm"
						name="contactNo_2"
						value=""
					/>
				</div>
				<p class="text-sm text-gray-500 mt-6">Enter address</p>
				<input
					type="email"
					placeholder="Email address"
					class="border w-full lg:w-7/12 border-gray-300 mt-1 p-2 rounded-sm"
					name="contactEmail"
					value=""
				/>
				<button
					type="submit"
					class="mt-12 rounded-md text-sm  bg-orange1 hover:bg-orange-700 text-white font-medium flex items-center justify-center py-2.5 px-6 w-36"
					>Continue</button
				>
			</form>
		{/if}
	{/if}
</div>
