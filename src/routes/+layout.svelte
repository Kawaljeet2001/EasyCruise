<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { state } from '../stores/store.js';
	import '../app.css';
	import Footer from '../lib/Footer/Footer.svelte';
	import LoaderFullscreen from '../lib/Loader/LoaderFullscreen.svelte';
	import Navbar from '../lib/Navbar/Navbar.svelte';
	import { user, ticketBookingDetails } from '../stores/store.js';
	import { validateUser } from '../utils/auth.js';
	import ResponsiveNavbar from '../lib/Navbar/ResponsiveNavbar.svelte';

	// $: console.log('The user is: ', $user);
	let isSiteReadyToLoad = false;
	onMount(async () => {
		await validateUser();
		isSiteReadyToLoad = true;
	});
</script>

{#if isSiteReadyToLoad}
	<ResponsiveNavbar />
	<Navbar />
	<slot />
	<Footer />
{:else}
	<LoaderFullscreen />
{/if}
