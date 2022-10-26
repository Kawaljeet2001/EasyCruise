<script>
	import '../app.css';
	import Footer from '../lib/Footer/Footer.svelte';
	import Navbar from '../lib/Navbar/Navbar.svelte';
	import {goto} from "$app/navigation";
	
	
</script>


<Navbar />
<slot />
<Footer/>