<script>
	import { onMount } from 'svelte';
	import { goto } from '@sapper/app';
	onMount(() => goto('wallpapers/'));
</script>

<svelte:head>
	<title>Home</title>
	<link rel="canonical" href="https://thatmirac.com/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@thatmirac" />
	<meta name="twitter:creator:id" content="1153786059718889472" />
	<meta name="twitter:description" content="Wallpapers by Mirac" />
	<meta name="twitter:title" content="Home • Wallpapers by Mirac" />
	<meta name="twitter:image" content="assets/card.png" />
	<meta name="twitter:image:alt" content="Home" />
	<meta name="og:type" content="website" />
	<meta name="og:title" content="Home" />
	<meta name="og:site_name" content="thatmirac.com" />
	<meta name="og:image" content="assets/card.png" />
	<meta name="description" content="Wallpapers by Mirac" />
</svelte:head>
