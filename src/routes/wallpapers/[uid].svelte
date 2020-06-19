<script context="module">
	import { onMount } from 'svelte';
	import { Client } from '../../prismic.js';

	export async function preload({ params, query }) {
		const uid = params.uid;
		const res = await this.fetch(`wallpapers/${uid}.json`);
		const data = await res.json();
		return { data, uid };
	}
</script>

<script>
	export let data;
	export let uid;
</script>

<svelte:head>
	<title>{data.name}</title>
	<link rel="canonical" href={`https://thatmirac.com/wallpapers/${uid}`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@thatmirac" />
	<meta name="twitter:creator:id" content="1153786059718889472" />
	<meta name="twitter:description" content="Wallpapers by Mirac" />
	<meta name="twitter:title" content="Home • Wallpapers by Mirac" />
	<meta
		name="twitter:image"
		content="/static/d47347aef01a7ad3ee41717a17e49338/twitter_card.jpg" />
	<meta name="twitter:image:alt" content="Home" />
	<meta name="og:type" content="website" />
	<meta name="og:title" content="Home" />
	<meta name="og:site_name" content="thatmirac.com" />
	<meta
		name="og:image"
		content="/static/d47347aef01a7ad3ee41717a17e49338/twitter_card.jpg" />
	<meta name="description" content="Wallpapers by Mirac" />
</svelte:head>

<body>
	<div class="wallprev-container">
		<div class="top-image">
			<div class="top-image-background">
				<img src={data.header} alt={`${data.name} Header`} />
			</div>
			<div class="top-image-overlay" />
			<div class="top-image-elements">
				<div class="title">
					<h1>{data.date}</h1>
					<h2>{data.name}</h2>
				</div>
				<div class="get-button-container">
					<div class="get-button">
						<a
							href="index.html"
							style="color: rgba(255, 255, 255, 0.9);">
							GET
						</a>
					</div>
				</div>
			</div>
		</div>
		{#if data.credits}
			<div class="credits-section">
				<p>{data.credits.primary.text[0].text}</p>
				<div class="user">
					<img
						src={data.credits.primary.image.url}
						alt={data.credits.primary.author[0].text} />
					<a href={data.credits.primary.link.url}>
						{data.credits.primary.author[0].text}
					</a>
				</div>
			</div>
		{/if}
		<div class="seperator" />
		<div class="screenshots-section">
			<div class="subtitle" id="screenshots-title">
				<h1>Preview</h1>
			</div>
			<div class="screenshots-wrapper">
				{#each data.screenshots as shot}
					<img src={shot.image.url} alt={`${data.name} Image`} />
				{/each}
				<p />
			</div>
		</div>
		<div class="seperator" />
		<div class="sizes-section">
			<div class="subtitle">
				<h1>Sizes</h1>
			</div>
			<div class="download-grid">
				{#if data.mobile}
					<div class="download-container-phone">
						<div class="phone">
							<div class="phone-shape" />
							<div class="phone-home-button" />
						</div>
						<div class="resolution">1125 × 2436</div>
						<div class="download-button">
							<a
								href={data.mobile.primary.image.url}
								style="color: rgba(255, 255, 255, 0.9);"
								download>
								<p>Download</p>
							</a>
						</div>
					</div>
				{/if}
				{#if data.tablet}
					<div class="download-container-tablet">
						<div class="tablet">
							<div class="tablet-shape" />
							<div class="tablet-home-button" />
						</div>
						<div class="resolution">2388 × 1668</div>
						<div class="download-button">
							<a
								href={data.tablet.primary.image.url}
								style="color: rgba(255, 255, 255, 0.9);"
								download>
								<p>Download</p>
							</a>
						</div>
					</div>
				{/if}
				{#if data.desktop}
					<div class="download-container-computer">
						<div class="computer">
							<div class="computer-shape" />
							<div class="computer-stand" />
						</div>
						<div class="resolution">2560 × 1440</div>
						<div class="download-button" download>
							<a
								href={data.desktop.primary.image.url}
								style="color: rgba(255, 255, 255, 0.9);"
								download>
								<p>Download</p>
							</a>
						</div>
					</div>
				{/if}
			</div>
		</div>
		<div class="seperator" />
		<div class="related-section">
			<div class="subtitle" id="related-title">
				<h1>More Like This</h1>
			</div>
			<div class="related-wrapper">
				{#each data.related as wallpaper}
					<img
						src={wallpaper.preview}
						alt={`${wallpaper.name} Image`} />
				{/each}
				<p />
			</div>
		</div>
		<div class="seperator" />
		<div class="footer" id="wppagefooter">
			<p>©{new Date().getFullYear()}, Mirac</p>
			<a href="/credits">
				<p>Credits</p>
			</a>
		</div>
	</div>
</body>
