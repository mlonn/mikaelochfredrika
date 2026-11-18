module.exports = {
  reactStrictMode: true,
  // Static export (served by the Cloudflare Worker's static assets), so no image optimization server.
  images: { unoptimized: true },
};
