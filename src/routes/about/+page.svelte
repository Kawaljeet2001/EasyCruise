<script>
	let findOutItems = [
		{
			title: 'Careers at easycruise',
			desc: 'Find out more about our open roles, working culture, benefits, D&I approach and how we recruit.',
			url: 'https://company.trivago.com/wp-content/uploads/2020/05/D85_3731_V1_square.jpg'
		},
		{
			title: 'Tech blog',
			desc: 'Get insight into our projects, prototypes and tech stack from our developers!',
			url: 'https://company.trivago.com/wp-content/uploads/2020/05/helpful_links_techblog.jpg'
		},
		{
			title: 'Easycruise business blog',
			desc: 'A central source of actionable insights into hotel marketing, technology, and trends.',
			url: 'https://company.trivago.com/wp-content/uploads/2022/04/adobestock_390081655_square-600x600-1.jpg'
		},
		{
			title: 'Easycruise company blog',
			desc: "Easycruise's blog is home to our latest company updates, insight into how we work and helpful travel tips.",
			url: 'https://company.trivago.com/wp-content/uploads/2022/04/l1010864_600x600.jpg'
		}
	];
</script>

<div class="bg-gray-50 p-12 h-80v flex items-center justify-center">
	<iframe
		src="https://www.youtube.com/embed/5tAtslReYCI"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
        class="h-70v w-8/12 rounded-xl"
	/>
</div>
<div class="bg-orange1 flex justify-center py-8">
	<div class="w-8/12 py-20 px-4">
		<p class="text-white">Our Mission</p>
		<h2 class="text-white font-bold text-5xl w-7/12 mt-2">
			To be your companion to experience our world
		</h2>
	</div>
</div>
<div class="bg-white w-full flex justify-center py-20">
	<div class="w-8/12 grid grid-cols-12 gap-x-8">
		<div class="col-span-6 flex flex-col justify-center px-8">
			<h1 class="text-5xl font-bold">About easycruise</h1>
			<p class="mt-6 font-light">
				Founded in 2005 by three university friends in Düsseldorf (Germany), trivago has since
				become a leading global accommodation search website. We are focused on reshaping the way
				millions of travelers search for and compare hotels and other accommodations. Part of
				Expedia Group (NASDAQ: TRVG), trivago’s mission is to become your companion to experience
				our world. Find out how trivago works here.
			</p>
			<div class="grid grid-cols-9 gap-x-2 mt-12 w-8/12">
				<button class="col-span-3 text-white font-medium px-4 py-2 rounded-md bg-blue-700"
					>Github</button
				>
				<button class="col-span-3 text-white font-medium px-4 py-2 rounded-md bg-blue-700"
					>Youtube</button
				>
				<button class="col-span-3 text-white font-medium px-4 py-2 rounded-md bg-blue-700"
					>IIITM</button
				>
			</div>
		</div>
		<div class="col-span-6 px-6">
			<div class="h-60v rounded-md bg-gray-100 w-full overflow-hidden">
				<img
					src="https://company.trivago.com/wp-content/uploads/2022/02/our-story-trivago-product_square.jpg"
					alt="easycruise-about"
					class="h-full"
				/>
			</div>
		</div>
	</div>
</div>
<div class="bg-gray-100 py-20 flex justify-center">
	<div class="w-9/12 grid grid-cols-12 gap-x-4">
		<div class="col-span-3 flex flex-col items-center px-4">
			<p class="text-5xl font-bold">5 mil</p>
			<p class="w-8/12 text-center mt-2 text-lg">hotels & alternative accommodation</p>
		</div>
		<div class="col-span-3 flex flex-col items-center px-4">
			<p class="text-5xl font-bold">190</p>
			<p class="w-8/12 text-center mt-2 text-lg">countries</p>
		</div>
		<div class="col-span-3 flex flex-col items-center px-4">
			<p class="text-5xl font-bold">53</p>
			<p class="w-8/12 text-center mt-2 text-lg">localized websites & apps</p>
		</div>
		<div class="col-span-3 flex flex-col items-center px-4">
			<p class="text-5xl font-bold">31</p>
			<p class="w-8/12 text-center mt-2 text-lg">languages</p>
		</div>
	</div>
</div>
<div class="flex flex-col p-20">
	<h1 class="text-5xl font-semibold">Find out more</h1>
	<div class="bg-white grid grid-cols-12 mt-16 gap-x-10">
		{#each findOutItems as item}
			<div class="h-70v rounded-lg col-span-3 flex flex-col">
				<div class="h-45v overflow-hidden rounded-lg">
					<img src={item.url} alt="blog-1" class="h-full" />
				</div>
				<div class="flex flex-col items-center mt-8">
					<h1 class="text-2xl font-bold">{item.title}</h1>
					<p class="w-8/12 text-center mt-2 text-sm">
						{item.desc}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
