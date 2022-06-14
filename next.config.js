/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['pbs.twimg.com', process.env.URL],
	},
};

module.exports = nextConfig;
