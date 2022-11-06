<script>
	import axios from 'axios';
	let isVisible = true;
	import { user } from '../../stores/store.js';
	let showHiddenMenu = false;
	const handleLogout = async () => {
		try {
			//deleting the localStorage key
			const res = await axios.post('http://localhost:8000/api/userlogout', {}, { withCredentials: true });
			console.log(res.data);
			if(res.data){
				localStorage.removeItem('isLoggedIn');
				window.location.href = "/";
			}
		} catch (err) {
			console.log(err);
		}
	};


</script>

{#if isVisible}
	<nav
		class="bg-white py-4 px-16 w-full sticky top-0 shadow-shadow2 h-20 hidden lg:flex items-center justify-between z-20"
	>
		<div>
			<a href="/" class="text-2xl font-extrabold"><span class="text-orange-600">easycruise</span></a
			>
		</div>
		<div class="relative flex items-center justify-between">
			<a class="mx-4 text-lg" href="/">Flights</a>
			<a class="mx-4 text-lg" href="/support">Support</a>
			{#if $user}
				<button
					class="h-12 w-12 mx-4 rounded-full bg-orange1 text-white font-bold text-lg"
					type="button"
					on:click={() => showHiddenMenu = !showHiddenMenu}>{$user.data.username[0]}</button
				>
			{:else}
				<a
					class="mx-4 text-white font-medium bg-blue-700 hover:bg-blue-800 py-2.5 px-8 rounded-md"
					href="/signin">Login / Signup</a
				>
			{/if}
			{#if showHiddenMenu}
				<div
					class="absolute shadow-shadow2 rounded-md px-4 pt-4 pb-6 h-72 w-64 bg-white right-2 top-16 flex flex-col justify-between"
				>
					<a href="/profile" class="hover:bg-gray-100 bg-gray-50 rounded-md w-full px-4 py-3"
						>Profile</a
					>
					<button
						class=" text-white text-lg font-bold bg-blue-700 hover:bg-blue-800 py-3 rounded-md w-full"
						type="button"
						on:click={handleLogout}>Logout</button
					>
				</div>
			{/if}
		</div>
	</nav>
{/if}
