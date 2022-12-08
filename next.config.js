/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "seniorproject-mvp.herokuapp.com",
				pathname: "/media/images/**",
			},
		],
	},

	env: {
		baseURL: "https://seniorproject-mvp.herokuapp.com/api/",
	},
};

module.exports = nextConfig;