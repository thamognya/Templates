/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
	swcMinify: true,
	experimental: {
		// Required:
		appDir: true,
		// runtime: 'experimental-edge',
		// swcMinifyDebugOptions: {
		// 	compress: {
		// 		defaults: true,
		// 		side_effects: false
		// 	}
		// }
	},
	// compiler: {
	// 	removeConsole: {
	// 		exclude: ['error']
	// 	}
	// }
}

module.exports = nextConfig
