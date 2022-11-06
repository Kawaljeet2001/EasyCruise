<script>
	import { page } from '$app/stores';
	// $: console.log($page.url.pathname);
</script>

<div class="h-screen w-screen fixed top-0 left-0 z-40 bg-white">
	<nav
		class="py-4 px-16 w-full sticky top-0 shadow-shadow2 h-20 flex items-center justify-between z-50 bg-white"
	>
		<div class="relative ">
			<a href="/admin" class="text-2xl font-extrabold text-orange-600"
				>easycruise<span class="text-sm text-gray-700 font-bold absolute -bottom-3.5 right-0.5"
					>ADMIN</span
				></a
			>
		</div>
	</nav>
	<div class="w-full grid grid-cols-12 h-full">
		<div class="h-full shadow-xl col-span-2  flex flex-col">
			<a
				class="py-4 pl-6 text-lg font-medium w-full {$page.url.pathname == '/admin'
					? 'text-blue-500 bg-blue-50 border border-transparent'
					: 'text-gray-400 bg-white border border-gray-50'} "
				href="/admin"
			>
				Overview
			</a>
			<a
				class="py-4 pl-6 text-lg font-medium w-full {$page.url.pathname.includes("/admin/flight")
					? 'text-blue-500 bg-blue-50 border border-transparent'
					: 'text-gray-400 bg-white border border-gray-50'} "
				href="/admin/flight"
			>
				Flight Details
			</a>
			<a
				class="py-4 pl-6 text-gray-400 font-medium w-full border border-gray-50"
				href="/admin/gulu"
			>
				Earnings
			</a>
		</div>

		<div class="col-span-10 flex justify-center overflow-scroll">
			<slot />
		</div>
	</div>
</div>
