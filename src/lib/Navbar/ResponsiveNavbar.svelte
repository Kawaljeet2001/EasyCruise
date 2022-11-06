<script>
	import axios from 'axios';
	let isVisible = true;
	import { user } from '../../stores/store.js';
	let showHiddenMenu = false;
	let openNavbar = false;
	const handleLogout = async () => {
		try {
			//deleting the localStorage key
			const res = await axios.post(
				'http://localhost:8000/api/userlogout',
				{},
				{ withCredentials: true }
			);
			console.log(res.data);
			if (res.data) {
				localStorage.removeItem('isLoggedIn');
				window.location.href = '/';
			}
		} catch (err) {
			console.log(err);
		}
	};

    const handleOpenNavbar = () => {
        openNavbar = !openNavbar
    }
</script>

{#if isVisible}
	<nav
		class="lg:hidden bg-white py-4 relative px-6 lg:px-16 w-full sticky top-0 shadow-shadow2 h-20 flex items-center justify-between z-20"
	>
		<div>
			<a href="/" class="text-2xl font-extrabold"><span class="text-orange-600">easycruise</span></a
			>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img src="https://img.icons8.com/material-outlined/24/null/menu--v1.png" alt="hamburger" class="cursor-pointer" on:click={handleOpenNavbar}/>
		{#if openNavbar}
			<div
				class="bg-white shadow-xl absolute top-20 w-screen flex flex-col p-6 left-0 items-center justify-end"
			>
				<a class="mx-4 text-lg w-full bg-gray-100 rounded-md py-2 px-4 hover:bg-gray-200" href="/"
					>Flights</a
				>
				<a
					class="mx-4 text-lg w-full bg-gray-100 rounded-md py-2 px-4 mt-2 hover:bg-gray-200"
					href="/support">Support</a
				>
				{#if $user}
					<div class="w-full my-2">
						<button
							class="h-16 w-16 mx-4 w-full mt-2 rounded-full bg-orange1 text-white font-bold text-lg"
							type="button"
							on:click={() => (showHiddenMenu = !showHiddenMenu)}>{$user.data.username[0]}</button
						>
					</div>
				{:else}
					<a
						class="mx-4 text-white font-medium w-full mt-4 bg-blue-700 hover:bg-blue-800 text-center py-3.5 px-8 rounded-md"
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
		{/if}
	</nav>
{/if}
