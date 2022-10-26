<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import Footer from '../lib/Footer/Footer.svelte';
	import LoaderFullscreen from '../lib/Loader/LoaderFullscreen.svelte';
	import Navbar from '../lib/Navbar/Navbar.svelte';
	import { user } from '../stores/store.js';
	import { validateUser } from '../utils/auth.js';

	// $: console.log('The user is: ', $user);

	let isSiteReadyToLoad = false;
	onMount(async () => {
		if (!user) {
			await validateUser();
		}
		isSiteReadyToLoad = true;
	});
</script>

{#if isSiteReadyToLoad}
	<Navbar />
	<slot />
	<Footer />
{:else}
	<LoaderFullscreen />
{/if}
