<script>
	import LoginCard from '../lib/Auth/LoginCard.svelte';
import TicketCard from '../lib/Flight/TicketCard.svelte';
</script>

<main class="bg-gray1 min-h-screen flex flex-col items-center justify-center ">
	<!-- <div class="clippar w-full overflow-hidden absolute top-0 bg-red-500 h-80v">
		<img
			class="w-full"
			src="https://img.happyeasygo.com/oss/ossuploadfile/advertising/2021/11/11/7b1b0a40fe39470a8166252f994d702b.jpg"
			alt="aeroplane-background"
		/>
	</div>
	<div class="h-15v z-10 flex items-center justify-center">
		<h1 class="text-4xl text-white font-extrabold">Book Domestic & International Flight Online</h1>
	</div> -->
	<div class="w-11/12 lg:w-7/12 flex flex-col items-center justify-center py-12 lg:py-20 z-10">
		<div class="flex flex-col items-center lg:items-start w-full mb-10">
			<h1 class="text-4xl font-extrabold">Search flights</h1>
			<p class="font-bold mt-2">Enjoy hassle free bookings with EasyCruise</p>
		</div>
		<TicketCard />
		<div class="hidden lg:block w-full my-8">
			<img
				class="h-full w-full"
				src="https://img.happyeasygo.com/oss/ossuploadfile/advertising/2022/09/15/grand-sale_1090x168.png?x"
				alt="banner-advertisement"
			/>
		</div>
		<div class="mt-10  lg:mt-0 grid grid-cols-2 gap-x-4">
			<div class="col-span-2 lg:col-span-1 rounded-md shadow-lg">
				<img
					src="https://img.happyeasygo.com/oss/ossuploadfile/advertising/2021/11/16/6b3c3642133d486da50930273a988908.png"
					alt="lulu"
					class="h-full w-full"
				/>
			</div>
			<div class="col-span-2 lg:col-span-1 mt-4 lg:mt-0 rounded-md shadow-lg">
				<img
					src="https://img.happyeasygo.com/oss/ossuploadfile/advertising/2021/10/21/f40b96e293f54b4baaac1ebc104ffd5c.png"
					alt="lulu"
					class="h-full w-full"
				/>
			</div>
		</div>
	</div>
	<div class="w-full h-96 bg-peach1" />
	<div class="w-full bg-white flex justify-center items-center">
		<div class="w-10/12 lg:w-7/12 py-10">
			<h2 class="text-2xl ">Sign up for Exclusive Email-only Coupons</h2>
			<p class="font-light mt-3">Exclusive access to coupons, special offers and promotions.</p>
		</div>
	</div>
</main>

<style>
	.clippar {
		clip-path: ellipse(60% 50% at 50% 7%);
	}
</style>
