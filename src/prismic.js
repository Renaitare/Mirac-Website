import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://wallpapers.cdn.prismic.io/api/v2';

export const Client = Prismic.client(apiEndpoint);

export function initApi(req) {
	return Prismic.getApi(apiEndpoint, {
		req: req,
	});
}

export const linkResolver = document => {
	if (document.type === 'wallpaper') return `/wallpapers/${document.uid}`;
	if (document.type === 'blog_home') return '/blog';
	if (document.type === 'about') return '/about';
	return '/';
};
