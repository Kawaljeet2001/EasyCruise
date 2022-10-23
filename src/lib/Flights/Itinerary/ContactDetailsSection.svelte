<script>
	import SectionHeading from './SectionHeading.svelte';
</script>

<div class="w-full mt-10 pb-10 border-b border-gray-300">
	<SectionHeading
		title="Add contact details"
		sectionNumber={2}
		isActive={false}
		titleDesc="E-ticket will be sent to this email address and phone number"
	/>
	<div class="flex flex-col">
		<p class="text-sm text-gray-500 mt-6">Mobile number</p>
		<div class="grid grid-cols-10 gap-x-6 w-7/12 items-center ">
			<input
				type="text"
				class="border col-span-2 border-gray-300 mt-1 p-2 rounded-sm"
				name="phone_code"
				value=""
			/>
			<input
				type="text"
				placeholder="Mobile number"
				class="border col-span-8 border-gray-300 mt-1 p-2 rounded-sm"
				name="phone_number"
				value=""
			/>
		</div>
		<p class="text-sm text-gray-500 mt-6">Enter address</p>
		<input
			type="email"
			placeholder="Email address"
			class="border w-7/12 border-gray-300 mt-1 p-2 rounded-sm"
			name="email-address"
			value=""
		/>
		<button
			class="mt-12 rounded-md text-sm  bg-orange1 hover:bg-orange-700 text-white font-medium flex items-center justify-center py-2.5 px-6 w-36"
			>Continue</button
		>
	</div>
</div>
