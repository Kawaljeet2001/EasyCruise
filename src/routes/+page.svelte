<script>
	import LoginCard from '../lib/Auth/LoginCard.svelte';
	import TicketCard from '../lib/Flight/TicketCard.svelte';

	let popularDestinations = [
		{
			name: 'New Delhi',
			prop: '3051 properties',
			url: 'https://thumbs.dreamstime.com/b/vertical-historical-india-gate-against-blue-sky-new-delhi-214110335.jpg'
		},
		{
			name: 'Jaipur',
			prop: '777 properties',
			url: 'https://images.pexels.com/photos/894443/pexels-photo-894443.jpeg?cs=srgb&dl=pexels-anuja-vidhate-894443.jpg'
		},
		{
			name: 'Goa',
			prop: '2436 properties',
			url: 'https://i1.trekearth.com/photos/44303/goa_coco_beach.jpg'
		},
		{
			name: 'Mumbai',
			prop: '1178 properties',
			url: 'https://im.whatshot.in/img/2020/Apr/vertical-taj-1586759488.jpg'
		},
		{
			name: 'Manali',
			prop: '935 properties',
			url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Manali_hillside_and_the_view_of_Himalayas.jpg'
		},
		{
			name: 'Kashmir',
			prop: '1071 properties',
			url: 'https://media.istockphoto.com/id/1044781846/photo/dal-lake-in-srinagar-kashmir.jpg?s=612x612&w=0&k=20&c=OMfOMZpZBi4Tg-esjcXA4uOYjmKiXxqJbMr-mObhxtY='
		},
		{
			name: 'Kerala',
			prop: '2131 properties',
			url: 'https://ak.picdn.net/offset/photos/5aeb238a17fb156e4807fbf8/medium/photo.jpg'
		},
		{
			name: 'Chennai',
			prop: '876 properties',
			url: 'https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/kapaleeshwarar-temple-1656078540_5665f51253f57401332d.jpg'
		}
	];
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
	<div class="w-full bg-white flex justify-center pb-16">
		<div class="w-10/12 lg:w-7/12 py-12 flex flex-col">
			<h3 class="font-extrabold text-2xl">Popular Destinations</h3>

			<div class="grid grid-cols-12 gap-4 mt-8">
				{#each popularDestinations as item}
					<div
						class="bg-gray-100 rounded-md col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 h-30v overflow-hidden relative"
					>
						<div
							class="absolute left-0 bottom-0 bg-gradient-to-t from-black to-transparent w-full p-6"
						>
							<h2 class="text-white text-xl font-bold">{item.name}</h2>
							<p class="text-white text-sm">{item.prop}</p>
						</div>
						<img src={item.url} alt="popular-destination" class="max-w-full" />
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="w-full bg-orange1 flex justify-center items-center">
		<div class="w-10/12 lg:w-7/12 py-16 grid grid-cols-12">
			<div class="col-span-12 lg:col-span-8 flex flex-col items-start">
				<h2 class="text-2xl text-white font-bold">Sign up for Exclusive Email-only Coupons</h2>
				<p class="font-light mt-1 text-white">
					Exclusive access to coupons, special offers and promotions.
				</p>
			</div>
			<div class="col-span-12 mt-4 lg:mt-0 lg:col-span-4 flex flex-col items-start">
				<input
					type="email"
					class="w-full bg-gray-50 border-none py-3 px-4 rounded-md"
					placeholder="Enter email address"
				/>
			</div>
		</div>
	</div>
</main>

<style>
	.clippar {
		clip-path: ellipse(60% 50% at 50% 7%);
	}
</style>
