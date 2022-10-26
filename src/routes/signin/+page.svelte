<script>
	import LoaderFullscreen from '../../lib/Loader/LoaderFullscreen.svelte';
	import axios from 'axios';
	const isFormValid = (data) => {
		for (const item of Object.keys(data)) {
			if (!data[item]) return false;
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
		if (!isFormValid(data)) {
			alert('Form is not valid');
			return;
		}
		console.log(data);
		isFormSubmitted = true;
	};

	const sendUserLoginRequest = async (data) => {
		try {
			const res = await axios.post('/api/signin', data);
			console.log(res.data);
		} catch (err) {
			console.log(err);
		}
	};
	//states
	let isFormSubmitted = false;
	//states
</script>

<div class="z-40 fixed top-0 h-screen w-full flex justify-center items-center bg-white">
	{#if isFormSubmitted}
		<LoaderFullscreen />
	{/if}
	<div class="w-6/12 h-70v rounded-md grid grid-cols-11 shadow-shadow1">
		<div class="h-full col-span-4 overflow-y-hidden">
			<img
				src="https://images.ixigo.com/rt-flight/pc/img/login/banner.png?v=1"
				alt="poster"
				class="h-full"
			/>
		</div>
		<div class="col-span-7 p-12 h-full flex flex-col items-center justify-between">
			<form class="flex flex-col w-full" on:submit|preventDefault={handleSubmit}>
				<h3 class="text-2xl">Login to "my company"</h3>
				<p class="text-xs text-gray-400 mt-10">Enter email</p>
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
					class="col-span-4 rounded-sm my-8 bg-orange1 hover:bg-orange-700 text-white font-bold flex justify-center p-4"
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
