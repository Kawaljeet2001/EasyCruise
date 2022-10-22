<script>
	import LoginCard from "../Auth/LoginCard.svelte";

	//states
	let openLoginCard = false;

	const toggleOpenLoginCard = () => {
		openLoginCard = !openLoginCard;
	}
</script>

<nav class="bg-white p-4 w-full sticky top-0 shadow-xl h-16 flex items-center justify-end z-20">
	<div class="flex items-center justify-between">
		<a class = "mx-4 text-lg" href="/">Home</a>
		<a class = "mx-4 text-lg" href="/support">Support</a>
		<button type = "button" class = "mx-4 text-lg" on:click={toggleOpenLoginCard}>Login</button>
	</div>
	{#if openLoginCard}
		<LoginCard toggle = {() => toggleOpenLoginCard()}/>
	{/if}
</nav>
