<script>
	import { onMount } from 'svelte';
	import { goto } from '@sapper/app';
	onMount(() => goto('wallpapers/'));
</script>

<svelte:head>
	<title>Home</title>
	<link rel="canonical" href="https://thatmirac.com/" />
</svelte:head>
