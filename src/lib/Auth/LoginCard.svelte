<script>
	export let toggle;

	const handleSubmit = (e) => {
		const formData = new FormData(e.target);
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log(data);
	};
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
		<div class="col-span-7 p-12 bg-white flex flex-col relative items-center">
			<button class="absolute top-2 right-3 cursor-pointer" on:click={toggle}>X</button>
			<form class="flex flex-col w-full" on:submit|preventDefault={handleSubmit}>
				<h3 class="text-2xl">Login to ixigo</h3>
				<p class="text-xs text-gray-400 mt-6">Enter email</p>
				<input
					type="email"
					placeholder="eg. h@k.xyz"
					class="border border-gray-200 mt-1 p-3 rounded-sm"
					name="email"
					value=""
				/>
				<p class="text-xs text-gray-400 mt-2">Enter password</p>
				<input
					type="password"
					placeholder="eg. ******"
					class="border border-gray-200 mt-1 p-3 rounded-sm"
					name="password"
					value=""
				/>
				<button
					class="col-span-4 rounded-sm my-8 bg-orange1 text-white font-bold flex justify-center p-3"
					type="submit">Login</button
				>
			</form>
			<div class="mt-4">
				<p class="text-gray-600 text-sm">
					By logging in, I understand & agree to ****** Terms of Use and Privacy Policy
				</p>
				<p class="text-gray-600 text-sm my-4">
					This site is protected by reCAPTCHA and the <a
						href="https://google.com"
						target="_blank"
						rel="noreferrer"
						class="text-orange1 underline">Google Privacy Policy</a
					>
					and
					<a
						href="https://google.com"
						target="_blank"
						rel="noreferrer"
						class="text-orange1 underline">Terms of Service</a
					> apply.
				</p>
			</div>
		</div>
	</div>
</div>
