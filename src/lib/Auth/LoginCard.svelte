<script>
    export let toggle;

</script>
<div
	class="z-40 h-screen w-full fixed top-0 flex items-center justify-center bg-black bg-opacity-70"
>
	<div class="w-5/12 bg-white h-60v rounded-md grid grid-cols-11">
		<div class="bg-green1 h-full col-span-4">
			<img
				src="https://images.ixigo.com/rt-flight/pc/img/login/banner.png?v=1"
				alt="poster"
				class="h-full"
			/>
		</div>
		<div class="col-span-7 p-12 bg-white flex flex-col relative" >
            <button class="absolute top-2 right-3 cursor-pointer" on:click={toggle}>X</button>
            <h3 class="text-2xl">Login to ixigo</h3>
            <button class="col-span-4 rounded-sm my-4 bg-orange1 text-white font-bold flex justify-center p-3"
			>Search</button
		>
        </div>
	</div>
</div>
