import { Client } from '../../prismic.js';

export async function get(req, res, next) {
	const wallpaper = await Client.getByUID('wallpaper', req.params.uid, {
		fetchLinks: ['wallpaper.preview', 'wallpaper.name'],
	});

	if (wallpaper) {
		let date = (function () {
			let date = new Date(wallpaper.data.date);
			let month = date.getMonth().toString().padStart(2, '0');
			let day = date.getDate().toString().padStart(2, '0');
			return `${day}.${month}.${date.getFullYear()}`;
		})();

		let credits = wallpaper.data.body.find(slice => {
			return slice.slice_type === 'credits';
		});

		let mobile = wallpaper.data.body1.find(slice => {
			return slice.slice_type === 'mobile_image';
		});

		let tablet = wallpaper.data.body1.find(slice => {
			return slice.slice_type === 'tablet_image';
		});

		let desktop = wallpaper.data.body1.find(slice => {
			return slice.slice_type === 'desktop_image';
		});

		let related = [];
		wallpaper.data.related.forEach(data => {
			if (data.wallpaper.data) {
				related.push({
					name: data.wallpaper.data.name[0].text,
					preview: data.wallpaper.data.preview.url,
					uid: data.wallpaper.slug,
				});
			}
		});

		let data = {
			name: wallpaper.data.name[0].text,
			date: date,
			header: wallpaper.data.body1[0].primary.image.url,
			preview: wallpaper.data.preview.url,
			screenshots: wallpaper.data.screenshots,
			related: related,
			credits: credits,
			mobile: mobile,
			tablet: tablet,
			desktop: desktop,
		};

		res.writeHead(200, {
			'Content-Type': 'application/json',
		}).end(JSON.stringify(data));
	}
}
