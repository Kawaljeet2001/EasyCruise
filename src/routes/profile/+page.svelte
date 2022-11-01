<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { user } from '../../stores/store.js';

	let myJourneys = null;
	const get_all_user_journeys = async (userId) => {
		try {
			const res = await axios.get(`http://localhost:8000/api/userjourneys/${userId}`);
			console.log(res.data);
			myJourneys = res.data;
		} catch (err) {
			console.log(err);
		}
	};

	onMount(async () => {
		let userId = JSON.parse(localStorage.getItem('isLoggedIn')).data.id;
		await get_all_user_journeys(userId);
	});
</script>

<div class="profilescreen flex justify-center py-20">
	<div class="w-8/12 grid grid-cols-12 gap-x-10">
		<div class="col-span-4 rounded-lg p-8 shadow-shadow2 flex flex-col items-center">
			<div class="h-48 w-48 rounded-full shadow-shadow1 overflow-hidden mt-4">
				<img
					src="https://www.live4india.com/images/users/6.jpg"
					class="h-full w-full"
					alt="user-profile"
				/>
			</div>
			<p class="mt-6 text-xl font-bold">{$user.data.username}</p>
			<p class="text-gray-400 text-sm mt-2 text-center">
				This is just any simple demo punch line, which is not really necessary.
			</p>
		</div>
		<div class="col-span-8 flex flex-col shadow-shadow2">
			<div class="w-full flex flex-col p-8">
				<p class="text-lg font-bold">My Journeys</p>
				<div class="flex flex-col w-full mt-6">
					{#if myJourneys}
						{#each myJourneys as journey}
							<div class="my-1 p-3 w-full border border-gray-100 rounded-md">
                                <p class="text-black font-medium">PNR : <span class="text-gray-400 text-sm ml-2">{journey.pnr}</span></p>
                            </div>
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.profilescreen {
		height: 74vh;
	}
</style>
