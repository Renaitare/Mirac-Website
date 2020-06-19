<script context="module">
	import { Client } from '../../prismic.js';

	export async function preload(page, session) {
		let wallpapers = await Client.query('', {
			orderings: '[my.wallpaper.date desc]',
		});

		wallpapers = wallpapers.results;
		return { wallpapers };
	}
</script>

<script>
	export let wallpapers;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>
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
