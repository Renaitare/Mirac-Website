module.exports = {
	apps: [
		{
			name: 'mirac',
			script: '__sapper__/build',
			env: {
				NODE_ENV: 'production',
				PORT: 3000,
			},
		},
	],
};
