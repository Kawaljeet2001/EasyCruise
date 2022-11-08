<script>
	import FaqAccordian from '../../lib/Contact/FaqAccordian.svelte';
</script>
<svelte:head>
	<title>Contact Us</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>
<div class="min-h-80v flex flex-col items-center">
	<div class="bg-orange1 h-40v p-6 w-full flex flex-col items-center justify-center">
		<h2 class="text-white font-medium text-4xl text-center">Welcome to Our Support Center</h2>
		<p class="text-white mt-2 text-xl">How Can We Help You?</p>

		<input
			type="text"
			placeholder="Type your question here"
			class="bg-white py-4 px-6 w-full lg:w-5/12 rounded-sm text-lg shadow-lg mt-8"
		/>
	</div>
	<div class="py-24 flex flex-col items-center w-11/12 lg:w-8/12">
		<h1 class="text-4xl lg:text-5xl font-semibold text-center">Frequently Asked Questions</h1>
		<div class="flex flex-col mt-4 lg:mt-16 w-full py-10">
			<FaqAccordian
				title="How can you keep your account safe?"
				desc="Beware of fraudulent SMS & calls about KYC suspension or expiration, account block and fake rewards. Easycruise will never ask you to download any app to complete your KYC."
			/>
			<FaqAccordian
				title="How to book a ticket?"
				desc="Beware of fraudulent SMS & calls about KYC suspension or expiration, account block and fake rewards. Easycruise will never ask you to download any app to complete your KYC."
			/>
			<FaqAccordian
				title="Can booked tickets be cancelled?"
				desc="Beware of fraudulent SMS & calls about KYC suspension or expiration, account block and fake rewards. Easycruise will never ask you to download any app to complete your KYC."
			/>
			<FaqAccordian
				title="What are different modes of payment?"
				desc="Beware of fraudulent SMS & calls about KYC suspension or expiration, account block and fake rewards. Easycruise will never ask you to download any app to complete your KYC."
			/>
		</div>
	</div>
</div>
