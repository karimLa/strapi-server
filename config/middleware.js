module.exports = ({ env }) => {
	const urls = env('WEB_URL', 'http://localhost:3000 http://localhost:1337').split(' ')

	return {
		settings: {
			cors: {
				origin: urls
			},
		},
	}
};