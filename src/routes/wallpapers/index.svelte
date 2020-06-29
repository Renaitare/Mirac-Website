<script context="module">
	import { Client } from '../../prismic.js';

	export async function preload(page, session) {
		let wallpapers = await Client.query('', {
			orderings: '[my.wallpaper.date desc]',
			pageSize: 100,
		});

		wallpapers = wallpapers.results;
		return { wallpapers };
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	export let wallpapers;
</script>

<svelte:head>
	<title>Home</title>
	<link rel="canonical" href="https://thatmirac.com/wallpapers/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@thatmirac" />
	<meta name="twitter:creator:id" content="1153786059718889472" />
	<meta name="twitter:description" content="Wallpapers by Mirac" />
	<meta name="twitter:title" content="Home | Wallpapers by Mirac" />
	<meta name="twitter:image" content="assets/card.png" />
	<meta name="twitter:image:alt" content="Home" />
	<meta name="og:type" content="website" />
	<meta name="og:title" content="Home" />
	<meta name="og:site_name" content="thatmirac.com" />
	<meta name="og:image" content="assets/card.png" />
	<meta name="description" content="Wallpapers by Mirac" />
</svelte:head>

<main transition:fade>
	<div class="showcase">
		<span>
			<h1>WALLPAPERS</h1>
			<h2>made by Mirac</h2>
		</span>
	</div>
	<div class="wallprev-container">
		<div class="wallprev">
			{#each wallpapers as post}
				<a rel="prefetch" href={`wallpapers/${post.uid}`}>
					<img
						src={post.data.preview.url}
						alt={post.data.name[0].text} />
				</a>
			{/each}
		</div>
		<div class="footer">
			<p>©{new Date().getFullYear()}, Mirac</p>
			<a href="credits">
				<p>Credits</p>
			</a>
		</div>
	</div>
</main>
