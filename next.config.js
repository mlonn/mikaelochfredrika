/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Static HTML export to out/, served by the Cloudflare Worker's static assets.
  output: 'export',
  // No image optimization server in a static export.
  images: { unoptimized: true },
  compiler: { styledComponents: true },
};
