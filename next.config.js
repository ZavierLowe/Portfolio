/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = require('@next/mdx')()
/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = withMDX(nextConfig)

module.exports = nextConfig

module.exports = {
	images: {
		unoptimized: true,
	},
	poweredByHeader: false,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};
